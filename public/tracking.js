/* ============================================================================
   Tracking Turbo Cloud — Meta Pixel + CAPI (Framework FOP) e GA4
   vanilla, sem GTM, sem dependências

   Carregado no <head> de toda página, SEM defer, logo depois de:
     <script>window.TC_TRACK = { pixel, ga4: [...], pagina: { categoria, nome } }</script>

   Funil de um site de hospedagem (várias páginas, vários produtos, checkout
   na loja WHMCS — não é LP de infoproduto):
     1 PageView         carga da página                       GA4: page_view
     2 ViewContent      página de produto, ou seção de planos  GA4: view_item
                        visível na home
     3 AddToCart        clique em "Quero contratar" (plano,    GA4: add_to_cart
                        categoria, ciclo, valor)
     4 Lead             clique em WhatsApp                     GA4: generate_lead
     - InitiateCheckout e Purchase vivem na loja (WHMCS), não aqui

   Todo evento Meta leva event_id único, espelhado no CAPI (Worker do
   Cloudflare) para o Meta deduplicar. A origem da visita (utm_*, fbclid,
   gclid) fica guardada 90 dias e vai colada nos links da loja, para a
   compra poder ser ligada à campanha lá.
   ========================================================================== */
(function () {
  'use strict';

  /* >>> URL do Worker de CAPI. Vazio = CAPI desligado, só o Pixel do navegador roda. <<< */
  var ENDPOINT_CAPI = 'https://capi-turbocloud.agenciaprocurada.workers.dev';

  var CFG = window.TC_TRACK;
  if (!CFG || !CFG.pixel) return;

  var PIXEL = CFG.pixel;
  var GA4 = CFG.ga4 || [];
  var PAGINA = CFG.pagina || {};
  var MOEDA = 'BRL';
  var CAPI = CFG.capi || ENDPOINT_CAPI;
  var LOJA = /app\.turbocloud\.com\.br/i;

  /* ---------- utilidades ------------------------------------------------- */

  function uuid() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return 'e' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 12);
  }
  function leCookie(nome) {
    var m = document.cookie.match(new RegExp('(?:^|;\\s*)' + nome + '=([^;]*)'));
    return m ? decodeURIComponent(m[1]) : '';
  }
  function guarda(chave, valor, dias) {
    try { localStorage.setItem(chave, valor); } catch (e) { }
    document.cookie = chave + '=' + encodeURIComponent(valor) + ';path=/;max-age=' + (dias * 86400) + ';SameSite=Lax';
  }
  function recupera(chave) {
    var v = '';
    try { v = localStorage.getItem(chave) || ''; } catch (e) { }
    return v || leCookie(chave);
  }
  function limpa(s) { return String(s).replace(/[^a-zA-Z0-9_~-]/g, '-'); }
  function numero(v) { var n = parseFloat(String(v).replace(',', '.')); return isFinite(n) && n > 0 ? n : null; }

  /* ---------- 1. visitante: external_id anônimo e estável (180 dias) ------ */

  var UID = recupera('_tc_uid');
  if (!UID) UID = uuid();
  guarda('_tc_uid', UID, 180);

  /* ---------- 2. origem da visita (utm, fbclid, gclid), 90 dias ----------- */

  var CHAVES_UTM = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  var CHAVES_CLIQUE = ['fbclid', 'gclid', 'gbraid', 'wbraid'];

  var origem = (function () {
    var q = new URLSearchParams(location.search);
    var novo = {}, achou = false;
    CHAVES_UTM.concat(CHAVES_CLIQUE).forEach(function (k) {
      var v = q.get(k);
      if (v) { novo[k] = v; achou = true; }
    });
    if (achou) {
      novo.ts = Date.now();
      guarda('_tc_src', JSON.stringify(novo), 90);
      return novo;
    }
    try { return JSON.parse(recupera('_tc_src') || '{}'); } catch (e) { return {}; }
  })();

  /* de onde veio: utm_source salvo → fbclid (meta) → gclid (google) → referrer → direto */
  var FONTE = (function () {
    if (origem.utm_source) return limpa(origem.utm_source);
    if (origem.fbclid) return 'meta';
    if (origem.gclid || origem.gbraid || origem.wbraid) return 'google';
    try {
      var host = document.referrer ? new URL(document.referrer).hostname : '';
      if (host && host !== location.hostname) return limpa(host.replace(/^(www|l|lm|m)\./, '').split('.')[0]);
    } catch (e) { }
    return 'direto';
  })();
  document.documentElement.setAttribute('data-tc-fonte', FONTE);

  function paramsOrigem() {
    var p = { fonte: FONTE };
    if (origem.utm_campaign) p.campanha = origem.utm_campaign;
    if (origem.utm_content) p.anuncio = origem.utm_content;
    return p;
  }

  /* ---------- 3. _fbp e _fbc first-party, ANTES do pixel ------------------ */

  var DOMINIO = (function () {
    var partes = location.hostname.split('.');
    if (partes.length < 2 || /^[0-9.]+$/.test(location.hostname)) return '';
    for (var i = partes.length - 2; i >= 0; i--) {
      var cand = partes.slice(i).join('.');
      document.cookie = '_tc_t=1;domain=' + cand + ';path=/;max-age=60;SameSite=Lax';
      if (leCookie('_tc_t')) {
        document.cookie = '_tc_t=;domain=' + cand + ';path=/;max-age=0';
        return cand;
      }
    }
    return '';
  })();
  function cookieRaiz(nome, valor, dias) {
    document.cookie = nome + '=' + valor + (DOMINIO ? ';domain=' + DOMINIO : '') + ';path=/;max-age=' + (dias * 86400) + ';SameSite=Lax';
  }

  var FBP = leCookie('_fbp');
  if (!FBP) {
    FBP = 'fb.1.' + Date.now() + '.' + String(Math.floor(Math.random() * 1e10)).padStart(10, '0');
    cookieRaiz('_fbp', FBP, 90);
  }
  var FBC = leCookie('_fbc');
  var fbclidAgora = new URLSearchParams(location.search).get('fbclid');
  if (fbclidAgora) {
    FBC = 'fb.1.' + Date.now() + '.' + fbclidAgora;
    cookieRaiz('_fbc', FBC, 90);
  } else if (!FBC && origem.fbclid) {
    FBC = 'fb.1.' + (origem.ts || Date.now()) + '.' + origem.fbclid;
    cookieRaiz('_fbc', FBC, 90);
  }

  /* ---------- 4. Pixel: snippet oficial, autoConfig desligado ------------- */

  !function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) };
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
    t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s)
  }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  /* sem autoConfig: evita SubscribedButtonClick e o PageView extra sem event_id
     que o Pixel dispara sozinho a cada mudança de #hash na URL.
     Os eventos do funil vão só para PIXEL; os pixels em pixelsExtra recebem
     apenas o PageView (mesmo padrão do sapabap). */
  var PIXELS_TODOS = [PIXEL].concat(CFG.pixelsExtra || []);
  PIXELS_TODOS.forEach(function (id) {
    fbq('set', 'autoConfig', false, id);
    fbq('init', id, { external_id: UID });
  });

  /* ---------- 5. GA4: gtag com as mesmas propriedades do site atual ------- */

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  if (GA4.length) {
    var g = document.createElement('script');
    g.async = true;
    g.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4[0];
    document.head.appendChild(g);
    gtag('js', new Date());
    GA4.forEach(function (id) { gtag('config', id, { fonte: FONTE }); });
  }
  function ga(evento, params) { if (GA4.length) gtag('event', evento, params || {}); }

  /* ---------- 6. envio ao CAPI com o MESMO event_id ----------------------- */

  var FILA = '_tc_fila';
  function lerFila() { try { return JSON.parse(localStorage.getItem(FILA) || '[]'); } catch (e) { return []; } }
  function salvarFila(f) { try { localStorage.setItem(FILA, JSON.stringify(f.slice(-20))); } catch (e) { } }

  function postar(corpo) {
    return fetch(CAPI, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=UTF-8' },   /* sem preflight */
      body: JSON.stringify(corpo),
      keepalive: true,
      mode: 'cors'
    }).then(function (r) { if (r.status >= 500) throw new Error('capi ' + r.status); return true; });
  }
  function enviaComRetry(corpo, tentativa) {
    return postar(corpo)['catch'](function () {
      if (tentativa < 1) {
        return new Promise(function (ok) { setTimeout(ok, 1500); }).then(function () { return enviaComRetry(corpo, tentativa + 1); });
      }
      var f = lerFila(); f.push(corpo); salvarFila(f);
      return false;
    });
  }
  function paraCapi(nome, params, id) {
    if (!CAPI || !window.fetch) return;
    enviaComRetry({
      event_name: nome, event_id: id, event_time: Math.floor(Date.now() / 1000),
      event_source_url: location.href, external_id: UID, fbp: FBP, fbc: FBC || '',
      custom_data: params || {}, utm: origem
    }, 0);
  }
  /* reenvia o que ficou pendente da visita anterior (até 24h; depois o Meta não deduplica) */
  (function () {
    if (!CAPI || !window.fetch) return;
    var pendentes = lerFila();
    if (!pendentes.length) return;
    salvarFila([]);
    var limite = Math.floor(Date.now() / 1000) - 86400;
    pendentes.forEach(function (c) { if (c && c.event_time > limite) enviaComRetry(c, 1); });
  })();

  /* dispara em um pixel só (o do funil) */
  function dispara(nome, params) {
    var id = uuid();
    fbq('trackSingle', PIXEL, nome, params || {}, { eventID: id });
    paraCapi(nome, params, id);
    return id;
  }

  /* ---------- 7. PageView: em todos os pixels, imediato ------------------- */

  (function () {
    var id = uuid();
    var p = paramsOrigem();
    fbq('track', 'PageView', p, { eventID: id });
    paraCapi('PageView', p, id);
  })();

  /* ---------- 8. conteúdo da página / categoria em foco ------------------- */

  var feitos = {};
  function umaVez(chave, fn) { if (feitos[chave]) return; feitos[chave] = true; fn(); }

  /* categoria em foco: a da página de produto, ou a aba de planos selecionada */
  function categoriaAtual() {
    var aba = document.querySelector('[data-aba-plano][aria-selected="true"]');
    if (aba && aba.getAttribute('data-aba-plano')) return aba.getAttribute('data-aba-plano');
    /* seção de planos nova: produto + local viram um painel visível só */
    var painel = document.querySelector('[data-painel-plano]:not([hidden])');
    if (painel && painel.getAttribute('data-painel-plano')) return painel.getAttribute('data-painel-plano');
    return PAGINA.categoria || '';
  }
  function cicloAtual() {
    var b = document.querySelector('[data-ciclo][aria-pressed="true"]');
    if (b) return b.getAttribute('data-ciclo') === 'anual' ? 'anual' : 'mensal';
    /* seção de planos nova: interruptor Mensal/Anual */
    var sw = document.querySelector('[data-ciclo-switch]');
    return sw && sw.getAttribute('aria-checked') === 'true' ? 'anual' : 'mensal';
  }

  function viewContent(categoria) {
    umaVez('ViewContent:' + categoria, function () {
      var p = paramsOrigem();
      p.content_name = PAGINA.nome || document.title;
      p.content_category = categoria;
      p.content_type = 'product_group';
      dispara('ViewContent', p);
      ga('view_item', { item_list_name: categoria, fonte: FONTE, items: [{ item_name: p.content_name, item_category: categoria }] });
    });
  }

  function aoPronto(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn); else fn();
  }

  aoPronto(function () {
    /* página de produto: já está vendo o conteúdo */
    if (PAGINA.categoria) setTimeout(function () { viewContent(PAGINA.categoria); }, 1000);

    /* seção de planos (home e produtos): ViewContent quando ela entra na tela */
    var planos = document.getElementById('planos');
    if (planos && 'IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (e) { if (e.isIntersecting) viewContent(categoriaAtual() || 'planos'); });
      }, { threshold: 0.25 });
      io.observe(planos);
    }

    marcaLinksLoja();
  });

  /* ---------- 9. links da loja: origem colada já no carregamento ---------- */

  function comRastreio(url) {
    try {
      var u = new URL(url, location.href);
      CHAVES_UTM.concat(CHAVES_CLIQUE).forEach(function (k) {
        if (origem[k] && !u.searchParams.get(k)) u.searchParams.set(k, origem[k]);
      });
      if (!u.searchParams.get('tc_uid')) u.searchParams.set('tc_uid', UID);
      return u.toString();
    } catch (e) { return url; }
  }
  function marcaLinksLoja() {
    var links = document.querySelectorAll('a[href]');
    for (var i = 0; i < links.length; i++) {
      if (LOJA.test(links[i].href)) links[i].href = comRastreio(links[i].href);
    }
  }

  /* ---------- 10. cliques: plano (AddToCart) e WhatsApp (Lead) ------------ */

  document.addEventListener('click', function (ev) {
    var alvo = ev.target;
    if (!alvo || !alvo.closest) return;
    var link = alvo.closest('a[href]');
    if (!link) return;
    var href = link.getAttribute('href') || '';

    /* botão de plano: o card envolve o link num [data-plano] com os dados */
    var card = link.closest('[data-plano]');
    if (card) {
      if (LOJA.test(link.href)) link.href = comRastreio(link.href);
      var ciclo = cicloAtual();
      var painel = link.closest('[data-painel-plano]');
      var categoria = card.getAttribute('data-categoria') || (painel && painel.getAttribute('data-painel-plano')) || categoriaAtual() || '';
      var mensal = numero(card.getAttribute('data-preco-mensal'));
      var anualTotal = numero(card.getAttribute('data-preco-anual-total'));
      var valor = ciclo === 'anual' && anualTotal ? anualTotal : mensal;
      var plano = card.getAttribute('data-plano') || '';
      var moeda = card.getAttribute('data-moeda') || MOEDA;

      var p = paramsOrigem();
      p.content_name = plano;
      p.content_category = categoria;
      p.content_type = 'product';
      p.content_ids = [limpa(categoria + '-' + plano).toLowerCase()];
      p.ciclo = ciclo;
      if (valor) { p.value = valor; p.currency = moeda; }
      p.num_items = 1;
      dispara('AddToCart', p);
      ga('add_to_cart', {
        currency: moeda, value: valor || undefined, fonte: FONTE, ciclo: ciclo,
        items: [{ item_id: p.content_ids[0], item_name: plano, item_category: categoria, item_variant: ciclo, price: valor || undefined, quantity: 1 }]
      });
      return;
    }

    /* WhatsApp ou "Falar com a equipe" (abre o chat TurboBot): Lead, com o
       contexto de onde a pessoa clicou */
    if (/wa\.me|api\.whatsapp\.com|whatsapp:|#falar-com-a-equipe$/i.test(href) || link.hasAttribute('data-abrir-chat')) {
      /* contexto do clique: id da seção, ou o título dela, ou "pagina" */
      var secao = link.closest('section, footer, header');
      var titulo = secao && secao.querySelector('h1, h2');
      var contexto = (secao && secao.id) || (titulo && titulo.textContent.trim().slice(0, 40)) || 'pagina';
      var p2 = paramsOrigem();
      p2.content_name = (PAGINA.nome || document.title);
      p2.content_category = contexto;
      dispara('Lead', p2);
      ga('generate_lead', { fonte: FONTE, origem_clique: p2.content_category, pagina: p2.content_name });
      return;
    }

    if (LOJA.test(link.href)) link.href = comRastreio(link.href);
  }, true);

  /* ---------- 11. api pública (eventos manuais) ---------------------------- */

  window.tcTrack = dispara;
})();
