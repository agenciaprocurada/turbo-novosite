/**
 * Copia o TEXTO dos documentos legais da Central de Ajuda (WHMCS) para
 * `src/data/legal/<id>.html`, que a página /legal/ renderiza.
 *
 * Fonte: https://app.turbocloud.com.br/knowledgebase/17/Contratos-TurboCloud
 * (categoria "Contratos TurboCloud"; os ids abaixo são os artigos dela).
 * Última cópia: 21/10/2026.
 *
 * O texto é copiado literalmente. Só mudam coisas de marcação:
 *  - e-mails ofuscados pelo Cloudflare (`data-cfemail`) voltam a ser o
 *    endereço real, num link `mailto:`;
 *  - `div`, `class` e `style` saem (a cor branca num título do artigo 54, por
 *    exemplo, o deixava invisível); parágrafos vazios saem;
 *  - os títulos descem de nível (h1/h2… do artigo viram h3/h4…), porque a
 *    página já tem o H1 e o título de cada documento é h2;
 *  - link para outro documento da lista vira âncora `#slug` na própria página;
 *    link externo abre em nova aba.
 *
 * Rodar de novo quando o time mudar um documento no WHMCS:
 *   node scripts/importa-legal.mjs
 * Depois conferir o `git diff` de src/data/legal/ antes de commitar.
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36'
const KB = 'https://app.turbocloud.com.br/knowledgebase'

/** id do artigo no WHMCS → slug da âncora na página (mesmo slug de `legal.ts`). */
const docs = [
  [54, 'Termos-de-Servicos', 'termos-de-servicos'],
  [52, 'Politica-de-Utilizacao', 'politica-de-utilizacao'],
  [50, 'Conteudo-Ilegal', 'conteudo-ilegal'],
  [51, 'Politica-de-E-Mail-Spam', 'politica-de-email-e-spam'],
  [58, 'Termo-de-Ativacao-de-Plugins', 'termo-de-ativacao-de-plugins'],
  [56, 'Politica-de-Privacidade', 'politica-de-privacidade'],
  [55, 'Tratamento-de-Dados', 'tratamento-de-dados'],
  [53, 'Politica-de-Cookies', 'politica-de-cookies'],
  [57, 'Termo-de-Confidencialidade', 'termo-de-confidencialidade'],
  [72, 'Termos-de-Servicos-do-Programa-de-Afiliados', 'termos-do-programa-de-afiliados'],
]
const slugPorId = Object.fromEntries(docs.map(([id, , slug]) => [id, slug]))

const destino = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/data/legal')

/** Proteção de e-mail do Cloudflare: o 1º byte é a chave, o resto é XOR com ela. */
function decodificaEmail(hex) {
  const chave = parseInt(hex.slice(0, 2), 16)
  let saida = ''
  for (let i = 2; i < hex.length; i += 2) saida += String.fromCharCode(parseInt(hex.slice(i, i + 2), 16) ^ chave)
  return saida
}

/** Recorta o conteúdo de `<div class="article-content">…</div>` contando os `div` aninhados. */
function recortaArtigo(pagina) {
  const marca = '<div class="article-content">'
  const ini = pagina.indexOf(marca)
  if (ini < 0) throw new Error('article-content não encontrado')
  let profundidade = 0
  for (const m of pagina.slice(ini).matchAll(/<div\b|<\/div>/g)) {
    profundidade += m[0] === '</div>' ? -1 : 1
    if (profundidade === 0) return pagina.slice(ini + marca.length, ini + m.index)
  }
  throw new Error('article-content sem fechamento')
}

function limpa(html) {
  let h = html

  // e-mails ofuscados
  h = h.replace(/<a\b[^>]*data-cfemail="([0-9a-f]+)"[^>]*>.*?<\/a>/gis, (_, hex) => {
    const email = decodificaEmail(hex)
    return `<a href="mailto:${email}">${email}</a>`
  })

  // marcação de layout
  h = h.replace(/<\/?div\b[^>]*>/gi, '')
  h = h.replace(/<(\w+)\b([^>]*)>/g, (_, tag, attrs) => {
    const href = attrs.match(/\shref="([^"]*)"/)
    return `<${tag}${href ? ` href="${href[1]}"` : ''}>`
  })
  h = h.replace(/<span>(.*?)<\/span>/gis, '$1')
  h = h.replace(/<p>(?:\s|&nbsp;| )*<\/p>/gi, '')

  // links: outro documento da lista → âncora; resto → nova aba
  h = h.replace(/<a href="([^"]*)">/g, (_, href) => {
    const kb = href.match(/knowledgebase\/(\d+)\//)
    if (kb && slugPorId[kb[1]]) return `<a href="#${slugPorId[kb[1]]}">`
    if (href.startsWith('mailto:') || href.startsWith('#')) return `<a href="${href}">`
    return `<a href="${href}" target="_blank" rel="noopener">`
  })

  // títulos: o menor nível do artigo vira h3, o seguinte h4…
  const niveis = [...new Set([...h.matchAll(/<h([1-6])>/g)].map((m) => Number(m[1])))].sort()
  h = h.replace(/<(\/?)h([1-6])>/g, (_, barra, n) => `<${barra}h${3 + niveis.indexOf(Number(n))}>`)

  return h.replace(/\n{3,}/g, '\n\n').trim() + '\n'
}

await mkdir(destino, { recursive: true })
for (const [id, nome, slug] of docs) {
  const url = `${KB}/${id}/${nome}.html`
  const resposta = await fetch(url, { headers: { 'User-Agent': UA } })
  if (!resposta.ok) throw new Error(`${url} → ${resposta.status}`)
  const html = limpa(recortaArtigo(await resposta.text()))
  await writeFile(path.join(destino, `${slug}.html`), html, 'utf8')
  console.log(`${slug}.html  ${html.length} bytes  (${url})`)
}
