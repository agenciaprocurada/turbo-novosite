/**
 * Gera a arte da 404 nos dois recortes: desktop e celular.
 *
 * A arte é o **fundo** do topo da página, então a emenda com a seção não pode
 * aparecer. Duas coisas garantem isso:
 *
 * 1. **O recorte respeita a moldura lisa da arte.** Medindo o desvio de cor por
 *    linha e por coluna, o fundo de `erro-404-3` só é realmente liso nas bordas:
 *    até y=100 em cima, a partir de y=884 embaixo, até x=140 à esquerda e a
 *    partir de x=1569 à direita. Cortar além disso passa no meio de uma nuvem e
 *    deixa uma linha reta bem visível no topo da imagem — foi o que aconteceu na
 *    primeira tentativa. Os recortes abaixo ficam dentro desses limites.
 *
 * 2. **Esmaecimento curto + achatamento na cor da seção.** Mesmo dentro da
 *    moldura lisa sobra um desvio de até 6 níveis. Uma rampa de 4–5% resolve, e
 *    o `flatten` faz as bordas saírem exatamente em #F6F1FA. Rampa curta só
 *    funciona porque a diferença de cor é mínima: com as artes anteriores, que
 *    eram um tom inteiro mais escuras, isso não bastava.
 *
 * Rodar de novo só se a arte de origem mudar:
 *   node scripts/gera-arte-404.mjs
 */
import sharp from 'sharp'

const ORIGEM = '_uploads-turbonovosite/erro-404-3.webp'
const DESTINO = 'src/assets/imagens/'
const FUNDO = '#F6F1FA' // o fundo do topo das páginas internas

/** Rampa suave (smoothstep) de 0 a 1. */
const suave = (t) => {
  const c = Math.min(1, Math.max(0, t))
  return c * c * (3 - 2 * c)
}

/**
 * Máscara RGBA: opaca no miolo, transparente nas bordas. `fx` e `fy` são a
 * fração da largura e da altura em que a borda esmaece.
 *
 * Precisa ser RGBA: o `dest-in` do sharp lê o canal alfa do que entra, não o
 * cinza. Máscara em escala de cinza chega opaca e não recorta nada.
 */
async function mascara(w, h, fx, fy) {
  const buf = Buffer.alloc(w * h * 4)
  const rampaX = new Float32Array(w)
  for (let x = 0; x < w; x++) {
    const u = x / (w - 1)
    rampaX[x] = Math.min(suave(u / fx), suave((1 - u) / fx))
  }
  for (let y = 0; y < h; y++) {
    const v = y / (h - 1)
    const ay = Math.min(suave(v / fy), suave((1 - v) / fy))
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4
      buf[i] = buf[i + 1] = buf[i + 2] = 255
      buf[i + 3] = Math.round(255 * rampaX[x] * ay)
    }
  }
  return sharp(buf, { raw: { width: w, height: h, channels: 4 } })
    .png()
    .toBuffer()
}

async function gera({ saida, extract, width, fx, fy }) {
  const base = await sharp(ORIGEM)
    .extract(extract)
    .resize({ width, withoutEnlargement: true })
    .png()
    .toBuffer()
  const { width: w, height: h } = await sharp(base).metadata()

  // Dois passos: no pipeline do sharp o `flatten` roda ANTES do `composite`,
  // então achatar na mesma cadeia não veria a máscara e as bordas sairiam pretas.
  const comAlfa = await sharp(base)
    .ensureAlpha()
    .composite([{ input: await mascara(w, h, fx, fy), blend: 'dest-in' }])
    .png()
    .toBuffer()

  const info = await sharp(comAlfa)
    .flatten({ background: FUNDO })
    .webp({ quality: 85 })
    .toFile(DESTINO + saida)

  const razao = (info.height / info.width).toFixed(3)
  console.log(
    `${saida.padEnd(64)} ${info.width}x${info.height}  proporção ${razao}  ${(info.size / 1024).toFixed(1)} KB`,
  )
}

/* 1160px é o maior tamanho em que a arte aparece no desktop: é a largura útil
   do container (1200px menos os 20px de padding de cada lado). 700px no celular
   é 2× dos 350px em que ela aparece, mesma conta da arte do hero da home. */

// Desktop: quadro inteiro na horizontal, aparando só o que dá em cima e embaixo
// sem sair da moldura lisa.
await gera({
  saida: 'empresa-de-hospedagem-de-site-astronauta-tomada-404.webp',
  extract: { left: 0, top: 100, width: 1630, height: 784 },
  width: 1160,
  fx: 0.04,
  fy: 0.05,
})

// Celular: fecha um pouco mais no desenho, ainda dentro da moldura lisa, e fica
// mais alto — a 350px de largura o quadro do desktop viraria uma tarja fina.
await gera({
  saida: 'empresa-de-hospedagem-de-site-astronauta-tomada-404-celular.webp',
  extract: { left: 120, top: 80, width: 1460, height: 820 },
  width: 700,
  fx: 0.05,
  fy: 0.05,
})
