/**
 * Gera o astronauta institucional que flutua ao lado do H1 no topo do site.
 *
 * Duas coisas acontecem aqui:
 *
 * 1. **Corte da margem transparente.** O PNG de origem tem 768×1376, mas o
 *    desenho ocupa só 730×1197 (medido pelo alfa: de 20,108 até 749,1304). O
 *    resto é vazio — pixel pago sem nada dentro. Cortar antes de redimensionar
 *    faz o astronauta ocupar todo o arquivo.
 *
 * 2. **Tamanho de exibição, não o do original.** No desktop ele aparece com no
 *    máximo 270px de largura (regra 7). Guardar os 768px seria carregar quase
 *    quatro vezes mais pixel do que a tela usa.
 *
 * Rodar de novo só se a arte de origem mudar:
 *   node scripts/gera-astronauta-institucional.mjs
 */
import sharp from 'sharp'

const ORIGEM = '_uploads-turbonovosite/astronauta-institucional.png'
const DESTINO =
  'src/assets/imagens/empresa-de-hospedagem-de-site-astronauta-notebook-institucional.webp'

/** Caixa útil, medida pelo canal alfa da arte de origem. */
const CAIXA = { left: 20, top: 108, width: 730, height: 1197 }
const LARGURA = 270 // a maior largura em que ele aparece no desktop (xl:w-[270px])

const info = await sharp(ORIGEM)
  .extract(CAIXA)
  .resize({ width: LARGURA, withoutEnlargement: true })
  .webp({ quality: 85 })
  .toFile(DESTINO)

console.log(`${info.width}x${info.height}  ${(info.size / 1024).toFixed(1)} KB`)
