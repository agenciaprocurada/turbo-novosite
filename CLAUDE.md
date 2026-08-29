# TurboCloud — nova home

Landing page única para substituir a home de turbocloud.com.br. Site novo, fora
do WordPress. Segue o estudo "Clean SaaS com sangue Turbo": estrutura, respiro e
componentes no padrão StayCloud; cor, voz e tema no padrão TurboCloud.

## Servidores locais

Astro usa **http://localhost:4321** por padrão, tanto no `dev` quanto no
`preview`. Quem subir primeiro fica com a 4321; o segundo cai para a **4322**.
Leia sempre a porta na saída do comando em vez de assumir.

| Comando | Uso |
| --- | --- |
| `npm run dev` | desenvolvimento, com HMR |
| `npm run preview` | serve o `dist/` já buildado — é o que usamos para conferir o resultado real |

O preview roda em background e **não para com Ctrl+C** (mas morre junto com o
terminal que o criou). Para gerenciar:

```bash
npx astro preview stop
npx astro preview status   # ver se está de pé
```

Se a porta responder mas o conteúdo parecer velho, é `dist/` desatualizado:
rode `npm run build` e reinicie o preview.

## Stack

Astro 7 + Tailwind 4 (config CSS-first via `@theme`, sem `tailwind.config.js`),
`output: 'static'`. Sem framework de UI, sem lib de animação. O `dist/` é HTML
puro — sobe em qualquer lugar, não precisa de Node no servidor.

```bash
npm run build   # gera dist/
npm run check   # astro check — deve fechar com 0 erros
```

## Onde mexer

| Preciso mudar... | Vá em |
| --- | --- |
| preço, plano, texto, link, depoimento, número | `src/data/site.ts` |
| cor, fonte, raio, sombra | bloco `@theme` em `src/styles/global.css` |
| ordem das seções | `src/pages/index.astro` |
| um componente | `src/components/` |
| ilustração / mockup de UI | `src/components/mockups/` |
| imagem (WebP tratado) | `src/assets/imagens/` — ver regra 7 |
| `<head>`, SEO, JSON-LD | `src/layouts/Base.astro` |

**Todo o conteúdo vive em `src/data/site.ts`.** Nenhum preço ou número está
escrito direto no HTML. Trocar a tabela de planos é editar um arquivo só.

## Regras do projeto

### 1. Só entra o que existe

Todo número da página saiu de turbocloud.com.br ou do Trustindex (coleta de
14/08/2026). Não inventar prova social, não usar número redondo "de efeito", não
prometer recurso que a TurboCloud não tem. O que falta confirmar está na
constante `PENDENTE`, no fim de `src/data/site.ts`.

Dois pontos já resolvidos que não devem ser "corrigidos" de volta:

- **Suporte:** a página informa `8h–1h, seg–sáb, + ticket`. O site atual se
  contradiz (banner diz "24/7", FAQ diz 8h–1h). Vale o FAQ.
- **Plano Three (R$ 49,90) é mais barato que o Duo (R$ 64,90) de propósito.**
  O Duo dá 2 vCPU e 5GB **por domínio**; o Three divide os mesmos recursos entre
  três. Não é erro de digitação.

### 2. Contraste do verde — três tokens, não um

`#6BDD12` sobre branco não tem contraste para texto. Por isso:

- `--color-green` `#6BDD12` — só sobre roxo, ou como **fundo** de botão.
  Botão verde **sempre** com texto roxo `#300C51` (9,2:1).
- `--color-green-ink` `#3E8A00` — 4,24:1. Só texto grande (≥ 24px): é o verde
  da segunda linha dos títulos `hero` e `section`.
- `--color-green-deep` `#2F6B00` — 6,4:1, passa AA. É o verde de texto corrido,
  link, eyebrow e ícone sobre fundo claro.

Nunca usar `text-green` sobre fundo claro.

### 3. Tipografia — Nunito precisa de ajuste

A sans é a **Nunito** (fonte da marca). Por ser arredondada e de contraste
baixo, ela pede o que uma grotesca não pede:

- títulos, botões e preços em **700** (500 fica frouxo no display);
- letter-spacing **−0,02em**, não −0,04em — Nunito já vem apertada de fábrica.

A mono é **JetBrains Mono**, só nos rótulos técnicos (`TTFB 18MS`,
`TIER III · BRASIL`). É o contraste redonda × mono que dá o ar de produto
técnico — não unificar tudo em Nunito.

Só o subset **latin** das fontes é carregado. O `index.css` do fontsource puxa
cirílico, grego e vietnamita junto — centenas de KB inúteis para pt-BR. Os
`@font-face` estão escritos à mão em `global.css` por causa disso.

### 4. Performance é o produto

A página vende velocidade; ela mesma tem que ser a prova.

- Zero foto por padrão. Toda ilustração é HTML/CSS ou SVG gerado em build — mapa
  pontilhado, velocímetro, painéis, funil de migração, conversa de WhatsApp.
- Zero biblioteca de animação. `IntersectionObserver` + CSS resolvem.
- Orçamento atual: **~30 KB de HTML gzip, ~9 KB de CSS**, 2 woff2. Se um PR
  estourar isso, tem algo errado.

### 5. Movimento é opcional

Tudo respeita `prefers-reduced-motion: reduce`: velocímetro, reveal on scroll,
carrossel, accordion e funil desligam. A regra global está no fim de
`global.css` — animação nova precisa continuar coberta por ela.

### 6. Acessibilidade

H1 único, foco visível (`:focus-visible` com verde escuro no claro e verde puro
dentro dos blocos `.block-dark`), `aria-selected`/`role="tab"` nos carrosséis e
accordions, skip link para `#conteudo`.

Cuidado conhecido: **classe de display no `<Button>` não funciona.** `hidden`
passado via `class` perde para o `inline-flex` da variante base na ordem da
folha de estilo. Envolver o botão num `<span class="hidden sm:block">`.

### 7. Imagens — obrigatório, sem exceção

Hoje o projeto **não tem nenhuma imagem raster**: toda ilustração é HTML/CSS ou
SVG. Quando entrar a primeira, vale tudo o que está abaixo.

**Formato e peso**

- Sempre **WebP com qualidade 85**. Nenhum PNG ou JPG chega no `dist/`.
- Redimensionar para o **maior tamanho em que a imagem realmente aparece no
  desktop — e não um pixel a mais**. Se o card mostra 560px de largura, o
  arquivo tem 560px. Nunca subir o original de 3000px e deixar o CSS encolher.
- Ícone, logo, selo, bandeira e diagrama continuam em **SVG** — não viram WebP.

O `sharp` já vem junto com o Astro, não precisa instalar:

```bash
# 560 = a largura máxima em que essa imagem aparece no desktop
node -e "require('sharp')(process.argv[1]).resize({width:560,withoutEnlargement:true}).webp({quality:85}).toFile(process.argv[2]).then(i=>console.log(i.width+'x'+i.height,(i.size/1024).toFixed(1)+' KB'))" \
  _uploads/original.png \
  src/assets/imagens/empresa-de-hospedagem-de-site-painel-cpanel.webp
```

**Nome do arquivo — SEO**

Keyword principal do projeto: **empresa de hospedagem de site**.

Todo arquivo começa pela keyword — minúscula, sem acento, separado por hífen — e
termina descrevendo o que a imagem mostra de fato:

```
empresa-de-hospedagem-de-site-painel-cpanel.webp
empresa-de-hospedagem-de-site-datacenter-tier-3.webp
empresa-de-hospedagem-de-site-suporte-whatsapp.webp
```

Nunca `IMG_2381.webp`, `foto1.webp` ou `Captura de tela 2026-08-28.png`.

**A cauda tem que variar.** Vinte arquivos chamados
`empresa-de-hospedagem-de-site-1..20` é keyword stuffing, e o Google trata
como spam — o efeito vira o oposto do pretendido.

**Atributo alt**

Toda `<img>` leva `alt` descritivo em português, dizendo o que se vê, com a
keyword **só onde ela couber naturalmente na frase**:

```html
alt="Painel cPanel da Turbo Cloud com os plugins premium inclusos"
alt="Datacenter TIER III em São Paulo usado pela empresa de hospedagem de site"
```

Alt não é depósito de palavra-chave. `alt="empresa de hospedagem de site
hospedagem de sites empresa hospedagem"` derruba o SEO e quebra o leitor de
tela. Imagem puramente decorativa leva `alt=""` + `aria-hidden="true"` —
nunca fica sem o atributo.

**A pasta `_uploads` é matéria-prima, nunca destino**

Nada dentro de `_uploads` pode ser referenciado direto: nem em `src`, nem em
`url()` do CSS, nem copiado como está para `public/`. O fluxo é sempre:

```
_uploads/  →  converter p/ WebP 85 no tamanho certo  →  renomear pela keyword
           →  salvar em src/assets/imagens/  →  referenciar de lá
```

`_uploads` nunca aparece num caminho do código nem sobra no `dist/`.

**Onde salvar e como usar**

- `src/assets/imagens/` + componente `<Image>` do `astro:assets`. Ele emite
  `width`/`height` (mata o CLS) e `loading="lazy"` fora da dobra.
- `public/` só para o que precisa de URL fixa e previsível: favicon, og-image.

## Como verificar antes de dizer que está pronto

Não declarar "funciona" sem rodar. O mínimo:

```bash
npm run check    # 0 erros
npm run build    # build limpo
```

E abrir de verdade em headless para pegar erro de console, overflow horizontal
e interação quebrada (abas de plano, ciclo mensal/anual, accordion, carrossel,
menu mobile, X da topbar). A skill `browser-automation` faz isso; o `--script`
dela quebra no Windows por caminho ESM, então use um script próprio com o
`patchright` do CodeGPT e `channel: 'chromium'`.

Checar sempre em **1440px e 390px** — o mobile já vazou 4px uma vez por causa
do rótulo do marcador no mapa.

## Estrutura da página

`S0` topbar fechável · `S1` header pílula · `S2` hero (bloco roxo) ·
`S3` prova social + depoimentos · `S4` serviços 2×2 · `S5` infraestrutura
(accordion, bloco roxo) · `S6` becos + banner · `S7` migração · `S8` suporte
(bloco roxo) · `S9` Brasil + stats · `S10` planos (3 abas × 4 cards) ·
FAQ · `S11` CTA final · `S12` footer.

O versículo de Romanos 11:36 no rodapé é marca da casa. **Mantém.**
