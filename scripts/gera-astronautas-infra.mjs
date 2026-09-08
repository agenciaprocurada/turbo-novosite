/**
 * Prepara os recortes transparentes dos heros Container, Cloud VPS e E-mail.
 * Uso: node scripts/gera-astronautas-infra.mjs <containers|cloud-vps|email> <origem>
 * Originais gerados com image_gen; prompts em docs/ARTES-INFRAESTRUTURA.md.
 * Mesma receita dos heros existentes: caixa útil pelo alfa, máximo de 725px,
 * WebP 85 / alphaQuality 60. Nunca amplia nem remove o canal transparente.
 */
import sharp from 'sharp'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const nomes = {
  containers: 'empresa-de-hospedagem-de-site-astronauta-containers-isolados.webp',
  'cloud-vps': 'empresa-de-hospedagem-de-site-astronauta-cloud-vps.webp',
  email: 'empresa-de-hospedagem-de-site-astronauta-servidor-email.webp',
}
const [tema, origem] = process.argv.slice(2)
if (!Object.hasOwn(nomes, tema ?? '') || !origem) {
  throw new Error('Uso: node scripts/gera-astronautas-infra.mjs <containers|cloud-vps|email> <origem>')
}
const meta = await sharp(origem).metadata()
if (!meta.hasAlpha) throw new Error('A arte deve ter fundo transparente verdadeiro.')
const { data, info } = await sharp(origem).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
let left = info.width, top = info.height, right = -1, bottom = -1, transparentes = 0
for (let y = 0; y < info.height; y++) {
  for (let x = 0; x < info.width; x++) {
    const alpha = data[(y * info.width + x) * info.channels + 3]
    if (alpha === 0) transparentes++
    if (alpha > 8) {
      left = Math.min(left, x); top = Math.min(top, y)
      right = Math.max(right, x); bottom = Math.max(bottom, y)
    }
  }
}
if (!transparentes || right < left) throw new Error('O recorte precisa conter pixels transparentes e desenho visível.')
const pasta = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/assets/imagens')
const destino = path.join(pasta, nomes[tema])
const resultado = await sharp(origem)
  .extract({ left, top, width: right - left + 1, height: bottom - top + 1 })
  .resize({ width: 725, withoutEnlargement: true })
  .webp({ quality: 85, alphaQuality: 60, effort: 6 })
  .toFile(destino)
console.log(`${tema}: ${resultado.width}x${resultado.height}, ${(resultado.size / 1024).toFixed(1)} KiB; alfa preservado`)
