/**
 * Prepara a arte do hero de /hospedagem/sites-institucionais/.
 *
 * A arte já chega em WebP com transparência, então aqui só sobram as duas
 * coisas da regra 7:
 *
 * 1. **Corte da caixa útil** — o arquivo tem 1684×1226, mas o desenho ocupa
 *    1604×1149 (medido pelo alfa: de 50,35 até 1653,1183). O resto é margem
 *    transparente, pixel guardado à toa.
 *
 * 2. **Tamanho de exibição** — no desktop ela aparece com 725px de largura.
 *    Guardar os 1684px seria carregar quatro vezes mais pixel do que a tela usa.
 *
 * Nada a ver com `gera-astronauta-institucional.mjs`, que é outra arte (a
 * vertical, com notebook) e serve só à bancada /teste-nuvens.
 *
 * Rodar de novo só se a arte de origem mudar:
 *   node scripts/gera-astronauta-sites-institucionais.mjs
 */
import sharp from 'sharp'

const ORIGEM = '_uploads-turbonovosite/astronauta-institucional.webp'
const DESTINO =
  'src/assets/imagens/empresa-de-hospedagem-de-site-astronauta-pagespeed-sites-institucionais.webp'
const LARGURA = 725 // a maior largura em que ela aparece no desktop
// O canal alfa é o que pesa nesta arte, não a cor: em qualidade 85 o arquivo
// dava 118 KB, e baixar a qualidade da cor até 60 só tirava 24 KB. Comprimir o
// alfa com perda (`alphaQuality`) resolve — 77 KB, sem artefato visível na
// borda do recorte sobre o lilás do hero, conferido com zoom de 2×.
const WEBP = { quality: 85, alphaQuality: 60, effort: 6 }

// Caixa útil medida no alfa a cada execução — sem número escrito à mão para
// desatualizar quando a arte trocar.
const { data, info } = await sharp(ORIGEM).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
const { width: W, height: H, channels: C } = info
let x0 = W
let y0 = H
let x1 = -1
let y1 = -1
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    if (data[(y * W + x) * C + 3] > 8) {
      if (x < x0) x0 = x
      if (x > x1) x1 = x
      if (y < y0) y0 = y
      if (y > y1) y1 = y
    }
  }
}
console.log(`caixa útil: ${x1 - x0 + 1}x${y1 - y0 + 1} (de ${W}x${H})`)

const arquivo = await sharp(ORIGEM)
  .extract({ left: x0, top: y0, width: x1 - x0 + 1, height: y1 - y0 + 1 })
  .resize({ width: LARGURA, withoutEnlargement: true })
  .webp(WEBP)
  .toFile(DESTINO)

console.log(`${arquivo.width}x${arquivo.height}  ${(arquivo.size / 1024).toFixed(1)} KB`)
