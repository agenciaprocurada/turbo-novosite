/**
 * Exporta os heros de Estrutura, Contato e Afiliados no padrão das outras páginas.
 * Uso: node scripts/gera-astronautas-institucionais.mjs <estrutura|contato|afiliados> <origem.png>
 * Originais em _uploads-turbonovosite/; prompts em astronautas-institucionais.prompts.json.
 * Valida o alfa, recorta a margem vazia e gera WebP 85 no máximo de exibição (725px).
 */
import sharp from 'sharp'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const nomes = {
  estrutura: 'empresa-de-hospedagem-de-site-astronauta-estrutura-datacenter.webp',
  contato: 'empresa-de-hospedagem-de-site-astronauta-atendimento-chat.webp',
  afiliados: 'empresa-de-hospedagem-de-site-astronauta-programa-afiliados.webp',
}
const [tema, origem] = process.argv.slice(2)
if (!Object.hasOwn(nomes, tema ?? '') || !origem) {
  throw new Error('Uso: node scripts/gera-astronautas-institucionais.mjs <estrutura|contato|afiliados> <origem.png>')
}
if (!(await sharp(origem).metadata()).hasAlpha) {
  throw new Error('A origem deve ter transparência real, sem fundo quadriculado gravado.')
}
const { data, info } = await sharp(origem).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
let left = info.width, top = info.height, right = -1, bottom = -1, transparentes = 0
for (let y = 0; y < info.height; y++) {
  for (let x = 0; x < info.width; x++) {
    const alpha = data[(y * info.width + x) * info.channels + 3]
    if (!alpha) transparentes++
    if (alpha > 8) {
      left = Math.min(left, x); top = Math.min(top, y)
      right = Math.max(right, x); bottom = Math.max(bottom, y)
    }
  }
}
if (!transparentes || right < left) throw new Error('A arte precisa conter pixels transparentes e desenho visível.')
const pasta = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/assets/imagens')
const resultado = await sharp(origem)
  .extract({ left, top, width: right - left + 1, height: bottom - top + 1 })
  .resize({ width: 725, withoutEnlargement: true })
  .webp({ quality: 85, alphaQuality: 60, effort: 6 })
  .toFile(path.join(pasta, nomes[tema]))
console.log(`${tema}: ${resultado.width} × ${resultado.height}, ${(resultado.size / 1024).toFixed(1)} KiB; alfa preservado`)
