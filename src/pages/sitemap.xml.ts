import type { APIRoute } from 'astro'

import { produtos, urlProduto } from '../data/produtos'
import { links } from '../data/site'

/**
 * /sitemap.xml — escrito à mão, sem @astrojs/sitemap (o projeto não depende
 * dele). A lista é explícita de propósito: o que NÃO entra é tão importante
 * quanto o que entra — as páginas ocultas (/ferramentas-ia/…), o 404 e as
 * páginas de redirect (/planos/, /whats/, /blog/…) ficam de fora.
 *
 * Ao criar uma página nova indexável, acrescente-a aqui.
 */
const caminhos: string[] = [
  '/',
  links.hospedagem,
  ...produtos.map((produto) => urlProduto(produto.slug)),
  links.estrutura,
  links.calculadora,
  links.afiliados,
  links.contato,
  links.legal,
]

export const GET: APIRoute = ({ site }) => {
  const origem = site ?? new URL('https://turbocloud.com.br')
  const urls = [...new Set(caminhos)].map((caminho) => `  <url><loc>${new URL(caminho, origem).href}</loc></url>`)

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
