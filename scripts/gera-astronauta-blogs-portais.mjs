/**
 * Prepara a arte do hero de /hospedagem/blogs-e-portais-de-conteudo/.
 *
 * Mesma receita das outras artes de hero interno — muda só a origem e o
 * formato (1,45:1 aqui, contra 1,40:1 no institucional e 1,77:1 na loja). Quem
 * manda no tamanho é o vão que sobra ao lado do texto; a altura vem da
 * proporção da própria arte, e é por isso que o CSS do hero não tem medida
 * escrita.
 *
 * 1. **Corte da caixa útil** — o arquivo tem 1536×1024, mas o desenho ocupa
 *    1436×993 (medido pelo alfa: de 81,9 até 1516,1001).
 *
 * 2. **Tamanho de exibição** — 725px é a maior largura em que ela aparece, no
 *    breakpoint de 1440px para cima.
 *
 * Rodar de novo só se a arte de origem mudar:
 *   node scripts/gera-astronauta-blogs-portais.mjs
 */
import sharp from 'sharp'

const ORIGEM = '_uploads-turbonovosite/astronauta-blogs-portais.png'
const DESTINO =
  'src/assets/imagens/empresa-de-hospedagem-de-site-astronauta-portal-de-conteudo.webp'
const LARGURA = 725 // a maior largura em que ela aparece no desktop

// O canal alfa é o que pesa nestas artes, não a cor: comprimi-lo com perda
// (`alphaQuality`) tira quase metade do arquivo sem artefato visível na borda
// do recorte sobre o lilás do hero.
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
