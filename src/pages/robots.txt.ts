import type { APIRoute } from 'astro'

/**
 * /robots.txt — gerado no build em vez de ficar em `public/`: arquivo de
 * `public/` chega sem permissão de leitura na hospedagem (ver CLAUDE.md), e o
 * que o build gera já nasce legível.
 *
 * Igual ao do site antigo (tudo liberado) mais a linha do sitemap novo.
 */
export const GET: APIRoute = ({ site }) => {
  const origem = site ?? new URL('https://turbocloud.com.br')

  const texto = `User-agent: *
Disallow:

Sitemap: ${new URL('/sitemap.xml', origem).href}
`

  return new Response(texto, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
