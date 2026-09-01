# TurboCloud — nova home

Landing page única para substituir a home de turbocloud.com.br. Site novo, fora
do WordPress. Segue o estudo "Clean SaaS com sangue Turbo": estrutura, respiro e
componentes no padrão StayCloud; cor, voz e tema no padrão TurboCloud.

## ⚠️ Design System — leia antes de criar página nova

O padrão visual do projeto está em **[`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md)**:
cor, tipografia, raio, sombra, ritmo de seção, componentes, movimento e
acessibilidade — tudo extraído da home já construída.

**Página nova segue esse documento.** Antes de escrever qualquer tela ou
componente novo, leia-o e reaproveite o que já existe em `src/components/` em
vez de recriar. Se um token mudar em `global.css`, atualize o documento no mesmo
commit.

As regras abaixo são o resumo operacional; o documento traz o detalhe e o porquê.

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
| **padrão de design (o que usar e quando)** | `docs/DESIGN-SYSTEM.md` |
| preço, plano, texto, link, depoimento, número | `src/data/site.ts` |
| texto das 6 páginas de produto e do hub | `src/data/produtos.ts` |
| cor, fonte, raio, sombra | bloco `@theme` em `src/styles/global.css` |
| ordem das seções da home | `src/pages/index.astro` |
| uma seção usada em várias páginas | `src/components/secoes/` |
| um componente | `src/components/` |
| ilustração / mockup de UI | `src/components/mockups/` |
| imagem (WebP tratado) | `src/assets/imagens/` — ver regra 7 |
| como uma imagem foi gerada | `scripts/` — um script por arte, comentado |
| build da imagem e config do servidor | `Dockerfile` e `deploy/nginx.conf` |
| `<head>`, SEO, JSON-LD | `src/layouts/Base.astro` |

**Todo o conteúdo vive em `src/data/site.ts` e `src/data/produtos.ts`.**
Nenhum preço ou número está escrito direto no HTML. Trocar a tabela de planos é
editar um arquivo só.

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

`#6BDD12` sobre branco não tem contraste para texto (1,75:1). Por isso o verde é
dividido por função:

- `--color-green` `#6BDD12` — só sobre roxo, ou como **fundo** de botão.
  Botão verde **sempre** com texto roxo `#300C51` (9,2:1).
- `--color-green-ink` `#3E8A00` — 4,24:1. Só texto grande (≥ 24px) e ícone.
- `--color-green-deep` `#2F6B00` — 6,4:1, passa AA. Texto corrido, link,
  eyebrow e ícone sobre fundo claro.

Nunca usar `text-green` sobre fundo claro.
→ tabela completa, com o roxo e os neutros, em `docs/DESIGN-SYSTEM.md`.

### 3. Tipografia — Nunito precisa de ajuste

A sans é a **Nunito** (fonte da marca). Por ser arredondada e de contraste
baixo, ela pede o que uma grotesca não pede:

- títulos, botões e preços em **700** (500 fica frouxo no display);
- letter-spacing **−0,02em**, não −0,04em — Nunito já vem apertada de fábrica;
- em **caixa alta** (todo botão é), tracking **positivo** de `+0,04em`.

A mono é **JetBrains Mono**, só nos rótulos técnicos (`TTFB 18MS`,
`TIER III · BRASIL`). É o contraste redonda × mono que dá o ar de produto
técnico — não unificar tudo em Nunito.

Só o subset **latin** das fontes é carregado. O `index.css` do fontsource puxa
cirílico, grego e vietnamita junto — centenas de KB inúteis para pt-BR. Os
`@font-face` estão escritos à mão em `global.css` por causa disso.
→ escala completa de tamanhos em `docs/DESIGN-SYSTEM.md`.

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

### Home — `src/pages/index.astro`

`S0` topbar fechável · `S1` header pílula · `S2` hero (bloco roxo) ·
`S3` prova social + depoimentos · `S4` serviços 2×2 · `S5` infraestrutura
(accordion, bloco roxo) · `S6` becos + banner · `S7` migração · `S8` suporte
(bloco roxo) · `S9` Brasil + stats · `S10` planos (3 abas × 4 cards) ·
FAQ · `S11` CTA final · `S12` footer.

O versículo de Romanos 11:36 no rodapé é marca da casa. **Mantém.**

### Seções compartilhadas — `src/components/secoes/`

S3, S7, S10, FAQ e S11 saíram do `index.astro` e viraram componente, porque as
outras oito páginas usam os mesmos blocos. A home continua idêntica; quem
mexer numa dessas seções mexe em nove páginas de uma vez.

| Componente | O que é |
| --- | --- |
| `ProvaSocial.astro` | nota do Google + carrossel (S3) |
| `Planos.astro` | abas × ciclo mensal/anual (S10). `abas={[uma]}` esconde a barra de abas |
| `PlanosEmail.astro` | as 9 faixas de e-mail — não cabem no card de 4 colunas |
| `Faq.astro` | accordion. `itens` troca o conteúdo, `comArte` liga o astronauta |
| `Migracao.astro` | funil de migração (S7) |
| `CtaFinal.astro` | bloco roxo do foguete (S11) |

O contador `[data-count]` e o reveal on scroll moraram no `index.astro`; agora
estão no `Base.astro`, porque valem para toda página.

### Páginas internas

| Rota | Arquivo |
| --- | --- |
| `/hospedagem/` | `src/pages/hospedagem/index.astro` — hub dos 6 produtos |
| `/hospedagem/<slug>/` | `src/pages/hospedagem/[slug].astro` — **uma** rota, 6 conjuntos de dados |
| `/planos/` | `src/pages/planos.astro` — 3 abas + planos de e-mail |
| `/contato/` | `src/pages/contato.astro` — sem formulário, ver abaixo |
| `/404` | `src/pages/404.astro` + `src/components/PaginaErro.astro` |

**O hero das páginas internas é claro, não roxo.** `HeroProduto.astro` segue
o mesmo sistema do hero da home: fundo `#F6F1FA`, título em duas cores
(`text-ink` + `text-green-ink`), chips com check verde, CTA verde + branco e
degradê no pé fundindo com `#FBFBFA`. O roxo é do hero da home e dos blocos de
seção (segurança, CTA final) — **não** do topo das internas. Por isso o H1 vem
partido em dois campos no dado: `h1` e `h1Verde`.

Sem imagem no hero interno, de propósito: a arte do hero da home é a peça mais
pesada do site e repeti-la em nove páginas estouraria o orçamento da regra 4.

**A arte da 404 é o fundo do topo, não um bloco.** `erro-404-3` já vem com o
fundo em #F7F1F9 — o #F6F1FA da seção a menos de um nível por canal. Fica
contínua, sem moldura e sem emenda visível. Largura máxima 1160px, que é a
largura útil do container.

Duas armadilhas, as duas já pagas:

- **O recorte tem que respeitar a moldura lisa da arte.** O fundo dela só é
  realmente liso nas bordas — até y=100 em cima, a partir de y=884 embaixo, até
  x=140 à esquerda e a partir de x=1569 à direita. Cortar além disso passa no
  meio de uma nuvem e deixa uma linha reta no topo da imagem. Os números estão
  em `scripts/gera-arte-404.mjs`, com a medição que os produziu.
- **O texto é posicionado com `padding-top` em porcentagem**
  (`pt-[47%] sm:pt-[40%]`). Padding em % é relativo à largura do container, então
  ele encolhe junto com a arte e o texto continua caindo no mesmo ponto do
  desenho em qualquer largura, sem media query. São dois valores porque os dois
  recortes têm proporções diferentes.

O `<picture>` faz art direction de verdade: `<source media>` entrega o recorte
de celular abaixo de 640px e o quadro largo acima. O navegador baixa **um** dos
dois — diferente do truque de `display:none` usado no hero da home.

**O 404 depende do servidor, e quem cuida disso é a plataforma.** O preset
"Astro" do up.turbo.cloud aplicava fallback de SPA
(`try_files $uri $uri/ /index.html`), o que fazia qualquer endereço inexistente
devolver **200 com a home** — inclusive `/nada.txt` e `/_astro/nao-existe.css`.
Isso é o certo para app React de página única e o oposto do que este site
precisa: aqui cada página é um arquivo no disco. **A plataforma corrigiu o
preset.**

Se voltar a acontecer, o que o servidor precisa ter:

```nginx
location / { try_files $uri $uri/ =404; }   # e NÃO /index.html
error_page 404 /404.html;
location = /404.html { internal; }          # senão /404.html responde 200
gzip on;                                    # a home cai de 216 KB para ~33 KB
```

**Não colocar Dockerfile na raiz.** Chegamos a tentar contornar por ali e a
plataforma passou a detectar `DOCKERFILE`, ignorando o preset — e o build
quebrou no `npm ci`, que é mais rígido que o `npm install` usado pelo preset.
Três deploys seguidos falharam em silêncio, porque o painel mantém a versão
anterior no ar quando o novo falha.

A página vai `noindex, follow` (prop `noindex` do `Base.astro`): URL de erro
não indexa, mas os links dela continuam sendo seguidos. O arquivo gerado é
`dist/404.html` — a maioria dos hosts estáticos serve esse nome sozinha; se o
seu não servir, apontar a regra de 404 para ele.

**Por que `/contato/` não tem formulário.** O projeto é `output: 'static'`: não
há servidor para processar POST. Em vez de pendurar o lead num serviço de
terceiro (LGPD, mais uma conta para manter), a página manda direto para os
canais que a Turbo já opera — WhatsApp, ticket e e-mail. Se um dia entrar
formulário, ele exige adaptador de servidor ou serviço externo. **Decisão
tomada, não é lacuna.**

### Schema.org é opt-in

O `Base.astro` sempre emite `Organization`. O resto entra por prop:
`faq={...}` gera o `FAQPage`, `comProduto` gera o `Product`, `trilha={...}`
gera o `BreadcrumbList`. Repetir o mesmo `FAQPage` em nove URLs é o tipo de
coisa que o Google ignora — por isso cada página passa o FAQ que ela mostra.

### Ainda no WordPress

`/estrutura/` e `/calculadora-perda-de-trafego/` continuam apontando para
turbocloud.com.br de propósito: link para a versão velha é melhor que link
quebrado. Ao criar essas páginas aqui, trocar `links.estrutura` e
`links.calculadora` em `site.ts` — o menu e o rodapé seguem sozinhos.
