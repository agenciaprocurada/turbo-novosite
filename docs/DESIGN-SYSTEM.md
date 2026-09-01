# Design System — TurboCloud

Este documento descreve o padrão visual **já implementado** na home. Ele é
descritivo, não aspiracional: tudo aqui existe em `src/styles/global.css` e em
`src/components/`. Página nova segue isto.

A fonte da verdade dos valores é o bloco `@theme` em
[`src/styles/global.css`](../src/styles/global.css). Este arquivo explica **por
que** cada valor é o que é e **quando** usar cada um. Se um valor mudar lá,
atualize aqui.

Identidade: *Clean SaaS com sangue Turbo* — estrutura e respiro de SaaS
moderno, cor e voz da TurboCloud.

---

## 1. Cor

### Verde — três tokens, não um

`#6BDD12` é a cor da marca, mas **não tem contraste para texto sobre branco**
(1,75:1). Por isso o verde é dividido por função. Escolher errado quebra a
acessibilidade da página.

| Token | Hex | Contraste no branco | Use para |
| --- | --- | --- | --- |
| `--color-green` | `#6BDD12` | 1,75:1 | **fundo** de botão, acento sobre roxo, ícone dentro de bloco escuro |
| `--color-green-soft` | `#A7E57F` | — | gradiente, ilustração, hover do botão verde |
| `--color-green-ink` | `#3E8A00` | 4,24:1 | **só texto grande (≥ 24px)**: segunda linha de título hero/seção |
| `--color-green-deep` | `#2F6B00` | 6,4:1 | texto corrido, link, eyebrow, ícone sobre fundo claro |

**Regras que não se quebram:**

- Nunca `text-green` sobre fundo claro.
- Botão verde **sempre** com texto roxo `#300C51` (9,2:1). Texto branco sobre o
  verde dá 1,75:1 — some no sol.
- Ícone informativo pede no mínimo 3:1 → `green-ink` é o mais claro possível.

### Roxo

| Token | Hex | Use para |
| --- | --- | --- |
| `--color-purple-950` | `#300C51` | blocos escuros de seção, texto sobre botão verde |
| `--color-purple-900` | `#3B1461` | degradês dentro dos blocos escuros |
| `--color-purple-800` | `#4B1F78` | superfície dentro de bloco escuro, botão `outline-purple` |
| `--color-purple-logo` | `#5C1F85` | **roxo do wordmark**: ícones e barras dos cards, chip do funil, card de plano em destaque, pílula de aba ativa |

Branco sobre `purple-logo` dá ~10,5:1 — seguro para texto.

### Neutros e apoio

| Token | Hex | Papel |
| --- | --- | --- |
| `--color-bg` | `#FBFBFA` | fundo da página |
| `--color-surface` | `#FFFFFF` | card, painel, pílula |
| `--color-ink` | `#18121B` | texto principal |
| `--color-ink-soft` | `#6E6675` | texto de apoio, rótulo |
| `--color-line` | `#E8E5EC` | borda e divisor |
| `--color-star` | `#F5B301` | estrela de avaliação — **decorativo, nunca texto** |
| `--color-amber-deep` | `#B45309` | status fora do operacional (4,9:1 no bg) |

---

## 2. Tipografia

**Nunito** (sans, marca) + **JetBrains Mono** (dados técnicos). O contraste
redonda × mono é o que dá o ar de produto técnico — não unifique tudo em Nunito.

Só o subset **latin** é carregado. Os `@font-face` estão escritos à mão em
`global.css` porque o `index.css` do fontsource puxa cirílico, grego e
vietnamita — centenas de KB inúteis para pt-BR.

### Ajustes que a Nunito exige

Por ser arredondada e de contraste baixo, ela pede o que uma grotesca não pede:

- títulos, botões e preços em **700** (500 fica frouxo no display);
- letter-spacing **−0,02em**, não −0,04em — a Nunito já vem apertada;
- em **caixa alta**, tracking **positivo** (`+0,04em`): com o tracking negativo
  do site as letras encostam.

### Escala

| Papel | Tamanho | Onde |
| --- | --- | --- |
| Título hero | `clamp(2.25rem, 6.2vw, 3.85rem)`, tracking −0,022em | `HeadingDuo size="hero"` |
| Título de seção | `clamp(1.9rem, 4.2vw, 2.6rem)`, tracking −0,018em | `HeadingDuo size="section"` |
| Subtítulo | `clamp(1.25rem, 2.4vw, 1.5rem)`, tracking −0,01em | `HeadingDuo size="sub"` |
| Corpo | 17px / 1.6 | `body` |
| Texto de apoio | 14–16px, `text-ink-soft` | parágrafos secundários |
| Eyebrow | mono 12px, +0,12em, caixa alta | utilitário `eyebrow` / `SectionEyebrow` |
| Rótulo técnico | mono 9–12px, +0,1em, caixa alta | painéis, stats, marcadores |

`h1`–`h3` já vêm com `text-wrap: balance`; parágrafos com `text-wrap: pretty`.

**Um `<h1>` por página.**

### Título em duas batidas

A assinatura tipográfica: a primeira linha em `ink` (ou branco no escuro), a
segunda em verde. Use `HeadingDuo` — ele já escolhe o verde certo conforme o
tamanho e o tom (`green-ink` no claro grande, `green-deep` no `sub`, `green`
puro no escuro).

---

## 3. Raio, sombra e superfície

| Token | Valor | Use para |
| --- | --- | --- |
| `--radius-btn` | **14px** | **todo controle clicável com fundo**: botão, pílula do header, chip, aba, alternador |
| `--radius-card` | 20px | card, painel, mockup |
| `--radius-block` | 28px | bloco de seção colorido (`block-section`) |

Circular (`rounded-full`) fica só para o que é de fato redondo: avatar, ponto de
status, ícone circular, selo.

| Sombra | Use para |
| --- | --- |
| `--shadow-soft` | repouso de card e botão |
| `--shadow-lift` | hover, painel flutuante, card em destaque |
| `--shadow-pill` | pílula do header ao rolar |

Painel flutuante sobre arte usa fundo translúcido + `backdrop-filter`
(`rgb(255 255 255 / 0.66)` + `blur(14px)`), para a arte aparecer atrás.

---

## 4. Layout e ritmo

- **`container-page`**: largura máx. 1200px, padding lateral 20px.
- **`block-section`**: bloco colorido que "flutua" com 12px de margem lateral e
  raio de 28px.
- **Respiro entre seções**: `py-[clamp(72px,9vw,132px)]` (constante `SECAO` no
  index). Seções que se relacionam usam pares menores, como
  `pt-[clamp(48px,6vw,80px)] pb-[clamp(40px,5vw,64px)]`.
- **Blocos escuros**: `py-[clamp(56px,7vw,104px)]`, fundo `purple-950`, texto
  branco, e a classe `block-dark` (que troca a cor do foco).

### Grades usadas

| Padrão | Classe |
| --- | --- |
| Texto + arte (hero) | `lg:grid-cols-[minmax(0,616px)_1fr]` |
| Texto + arte + card | `lg:grid-cols-[minmax(0,440px)_1fr_minmax(0,320px)]` |
| Cards de serviço | `sm:grid-cols-2 lg:grid-cols-4` |
| Planos | carrossel com `snap-x` no celular, `lg:grid-cols-4` no desktop |

**Celular primeiro na ordem do DOM.** Onde a ordem visual muda no desktop, use
`lg:col-start-*` / `lg:row-start-*` em vez de duplicar markup.

---

## 5. Componentes

Antes de criar um componente novo, verifique se um destes resolve.

### Botão — `Button.astro`

Único componente de CTA. **Sempre caixa alta.**

| Variante | Aparência | Use para |
| --- | --- | --- |
| `green` | fundo verde, texto roxo | ação principal |
| `white` | fundo branco, texto roxo | ação secundária sobre fundo claro ou arte |
| `outline-light` | contorno branco | secundária dentro de bloco escuro |
| `outline-dark` | contorno cinza, fundo branco | secundária discreta no claro |
| `outline-purple` | contorno roxo | ação em card de plano |
| `ghost` | só texto | ação terciária |

Tamanhos: `md` (44px, texto 13px) e `lg` (52px, texto 14px).

> **Cuidado conhecido:** classe de display no `<Button>` não funciona — `hidden`
> passado via `class` perde para o `inline-flex` da variante na ordem da folha
> de estilo. Envolva num `<span class="hidden sm:block">`.

### Outros

| Componente | Papel |
| --- | --- |
| `SectionEyebrow` | rótulo mono acima do título; `tone="dark"` dentro de bloco escuro |
| `HeadingDuo` | título em duas cores |
| `Badge` | selo pequeno (`green`, `soft`, `status`, contornos) |
| `ServiceCard` | card de produto: ícone, título, itens com check, barra roxa no rodapé |
| `PricingCard` | card de plano, com variante em destaque |
| `StatBlock` | número + rótulo |
| `Avatar` | foto ou monograma |
| `MockupFrame` | moldura de janela para ilustrações de UI |

---

## 6. Movimento

Toda animação é **opcional**: a regra global de `prefers-reduced-motion: reduce`
no fim do `global.css` desliga tudo. **Animação nova precisa continuar coberta
por ela** — se depender de estado inicial escondido, garanta que o estado final
seja o visível.

- **Entrada por scroll**: classe `.reveal` + `IntersectionObserver`. Escalone
  com `data-delay="1..4"` (80ms cada).
- Só esconde quando há JS (`.js .reveal`) — sem JS o conteúdo nasce visível.
- Animações contínuas nomeadas com prefixo `turbo-` (`turbo-float`,
  `turbo-ping`, `turbo-marker`, `turbo-packet`).
- **Zero biblioteca de animação.** `IntersectionObserver` + CSS resolvem.

---

## 7. Acessibilidade

- Um `<h1>` por página; hierarquia de headings sem pular nível.
- Foco visível: `green-deep` no claro, `green` puro dentro de `.block-dark`.
- `aria-selected` / `role="tab"` em abas e carrosséis; `aria-expanded` em
  accordions e menus.
- Skip link para `#conteudo`.
- Alvo de toque mínimo de 44px em controle no celular.
- Contraste: 4,5:1 para texto normal, 3:1 para texto grande e ícone
  informativo. **Verifique antes de aprovar uma cor nova.**

---

## 8. Conteúdo e imagem

- **Todo texto, preço e número vive em `src/data/site.ts`.** Nada escrito
  direto no HTML.
- **Só entra o que existe.** Nada de prova social inventada, número redondo "de
  efeito" ou recurso que a TurboCloud não tem. O que falta confirmar vai para a
  constante `PENDENTE`.
- Imagem: WebP qualidade 85, no **maior tamanho em que aparece de fato** (2× em
  elemento pequeno, para telas retina). Nome começando pela keyword, com cauda
  variada. `alt` descritivo em português. Ícone e diagrama continuam SVG.
- Ilustração de UI é HTML/CSS/SVG, não screenshot.

---

## 9. Performance

A página vende velocidade; ela precisa ser a prova.

- Orçamento: **~30 KB de HTML gzip, ~10 KB de CSS**, 2 woff2. PR que estoura
  isso tem algo errado.
- Zero framework de UI, zero lib de animação.
- Muitos elementos repetidos (pontos de mapa, grade) → `<pattern>` SVG em vez de
  centenas de nós.

---

## 10. Checklist antes de dar por pronta uma página nova

```bash
npm run check    # 0 erros
npm run build    # build limpo
```

E abrir em headless (a skill `browser-automation`; no Windows use script próprio
com o `patchright` do CodeGPT e `channel: 'chromium'`):

- [ ] zero erro de console
- [ ] sem vazamento horizontal em **1440px e 390px**
- [ ] `<h1>` único
- [ ] interações funcionando (abas, accordion, carrossel, menu mobile)
- [ ] contraste conferido em cor nova
- [ ] `prefers-reduced-motion` desliga o movimento
