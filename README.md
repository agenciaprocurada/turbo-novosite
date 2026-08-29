# Nova home — Turbo Cloud

Landing page única em Astro + Tailwind v4, saída 100% estática. Segue o estudo
"Clean SaaS com sangue Turbo": estrutura e respiro no padrão StayCloud, cor, voz
e tema no padrão TurboCloud.

## Rodar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview  # serve o dist/
```

O `dist/` é HTML estático puro — sobe em qualquer lugar (a própria TurboCloud,
Cloudflare Pages, Netlify). Não precisa de Node no servidor.

## Onde mexer

| Preciso mudar... | Vá em |
| --- | --- |
| preço, plano, texto, link, depoimento, número | [src/data/site.ts](src/data/site.ts) |
| cor, fonte, raio, sombra | bloco `@theme` em [src/styles/global.css](src/styles/global.css) |
| ordem das seções | [src/pages/index.astro](src/pages/index.astro) |
| um componente específico | [src/components/](src/components/) |
| ilustração/mockup de UI | [src/components/mockups/](src/components/mockups/) |

**Todo o conteúdo vive em `src/data/site.ts`.** Nenhum preço ou número está
escrito direto no HTML — trocar a tabela de planos é editar um arquivo só.

## Regras que o projeto assume

**Contraste do verde.** `#6BDD12` sobre branco tem contraste baixo demais para
texto. Por isso existem três tokens de verde, e não um:

- `--color-green` (`#6BDD12`) — só sobre fundo roxo, ou como fundo de botão.
  Botão verde **sempre** com texto roxo `#300C51` (9,2:1).
- `--color-green-ink` (`#3E8A00`) — 4,24:1 sobre o fundo claro. Vale só para
  texto grande (≥ 24px): é o verde da segunda linha dos títulos.
- `--color-green-deep` (`#2F6B00`) — 6,4:1. É o verde de texto corrido, link,
  eyebrow e ícone sobre fundo claro.

**Tipografia.** A sans é a **Nunito**, a fonte da marca. Por ser arredondada e
de contraste baixo, ela pede ajustes que uma grotesca não pediria: títulos e
botões vão a **700** (peso 500 fica frouxo no display), e o letter-spacing
negativo cai de −0,04em para **−0,02em** — Nunito já tem espacejamento apertado
de fábrica e fecha demais se você usar o tracking calibrado para Inter/Geist.
A mono continua **JetBrains Mono**, só nos rótulos técnicos.

**Nada de foto.** Toda ilustração é HTML/CSS ou SVG gerado em build — o mapa
pontilhado, o velocímetro, os painéis, o funil. A página que vende velocidade
não podia carregar screenshot pesado. Total transferido: ~30 KB de HTML (gzip),
~9 KB de CSS, 2 fontes woff2 (só o subset latin).

**Só o que existe.** Todo número na página saiu de turbocloud.com.br ou do
Trustindex em 14/08/2026. A janela de atendimento informada é a do FAQ
(8h–1h, seg–sáb + ticket), não o "24/7" do banner — o próprio site se
contradiz nisso, e honestidade converte melhor.

**Movimento é opcional.** Tudo respeita `prefers-reduced-motion: reduce`:
velocímetro, reveal, carrossel, accordion e funil desligam.

## O que ainda falta do time

A lista vive no fim de [src/data/site.ts](src/data/site.ts), na constante
`PENDENTE`. Em resumo: e-mail público oficial, quatro depoimentos longos que
estão truncados na fonte, fotos do time (hoje são monogramas), e o número total
de sites hospedados — que a TurboCloud não publica em lugar nenhum.
