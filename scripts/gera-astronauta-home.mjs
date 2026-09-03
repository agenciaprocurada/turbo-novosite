/**
 * Prepara o astronauta do hero da home a partir da arte já recortada.
 *
 * A primeira versão desta arte veio em fundo preto chapado, sem canal alfa, e
 * este script fazia o recorte por conta própria — rampa de luminância,
 * preenchimento a partir das bordas, tratamento das ilhas de preto fechadas
 * (o vão entre as pernas) e desmultiplicação para tirar o contorno sujo.
 * A arte nova (`astronauta-home.webp`) já chega com transparência, então tudo
 * isso saiu. Se algum dia voltar a chegar arte em fundo preto, o histórico do
 * git tem a versão que resolvia.
 *
 * O que sobrou são as duas coisas que continuam valendo (regra 7):
 *
 * 1. **Corte da caixa útil** — a arte tem 1536×1824, mas o desenho ocupa
 *    1286×1772 (medido pelo alfa: de 168,37 até 1453,1808). O resto é margem
 *    transparente, pixel guardado à toa.
 *
 * 2. **Tamanho de exibição, não o do original** — no site ele aparece com
 *    300px de largura. Guardar os 1536px seria carregar cinco vezes mais pixel
 *    do que a tela usa.
 *
 * Rodar de novo só se a arte de origem mudar:
 *   node scripts/gera-astronauta-home.mjs
 */
import sharp from 'sharp'

const ORIGEM = '_uploads-turbonovosite/astronauta-home.webp'
const DESTINO =
  'src/assets/imagens/empresa-de-hospedagem-de-site-astronauta-notebook-nuvem.webp'
const LARGURA = 385 // a maior largura em que ele aparece (palco em escala 1)

// Caixa útil, medida no canal alfa da própria arte a cada execução — assim não
// há número escrito à mão para desatualizar quando a arte trocar.
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
  .webp({ quality: 85 })
  .toFile(DESTINO)

console.log(`${arquivo.width}x${arquivo.height}  ${(arquivo.size / 1024).toFixed(1)} KB`)
