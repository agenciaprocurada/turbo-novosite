/**
 * Remove o quadriculado neutro gravado pelo gerador nestas três artes.
 * Processamento local autorizado pelo usuário; não regenera o personagem.
 * Uso: node scripts/recorta-fundo-astronautas-infra.mjs <origem.png> <recorte.png>
 *
 * A iluminação lilás/verde separa os objetos do fundo cinza. O matte usa
 * essa diferença de canais e preserva reflexos brancos acima do fundo.
 * Não é um removedor universal: conferir o recorte sobre claro e escuro.
 */
import sharp from 'sharp'

const [origem, destino] = process.argv.slice(2)
if (!origem || !destino || origem === destino) {
  throw new Error('Informe arquivos de origem e destino distintos.')
}
const { data, info } = await sharp(origem).removeAlpha().raw().toBuffer({ resolveWithObject: true })
if (info.width !== 1536 || info.height !== 1024) {
  throw new Error('Este matte foi calibrado para os três originais de 1536 × 1024.')
}
const pixels = info.width * info.height
const alfa = Buffer.alloc(pixels)
const suave = (v, inicio, fim) => {
  const t = Math.max(0, Math.min(1, (v - inicio) / (fim - inicio)))
  return t * t * (3 - 2 * t)
}
for (let i = 0; i < pixels; i++) {
  const r = data[i * 3], g = data[i * 3 + 1], b = data[i * 3 + 2]
  const maior = Math.max(r, g, b), menor = Math.min(r, g, b)
  const cor = suave(maior - menor, 8, 28)
  const reflexo = suave(maior, 223, 239)
  alfa[i] = Math.round(255 * Math.max(cor, reflexo))
}

// Preserva os cinzas intencionais dentro das superfícies dos painéis.
// Coordenadas do PNG original (1536 × 1024), recuadas dos contornos.
const superficies = origem.includes('containers') ? [
  [[1004, 49], [1114, 88], [1087, 194], [981, 167]],
  [[1040, 760], [1159, 798], [1119, 929], [1001, 888]],
] : origem.includes('email') ? [
  [[836, 214], [1402, 149], [1403, 537], [790, 616]],
] : []
const dentro = (x, y, pontos) => {
  let sim = false
  for (let i = 0, j = pontos.length - 1; i < pontos.length; j = i++) {
    const [xi, yi] = pontos[i], [xj, yj] = pontos[j]
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) sim = !sim
  }
  return sim
}
const protegido = new Uint8Array(pixels)
for (let i = 0; i < pixels; i++) {
  const x = i % info.width, y = Math.floor(i / info.width)
  if (superficies.some(p => dentro(x, y, p))) {
    protegido[i] = 1
    alfa[i] = 255
  }
}

// O brilho verde foi composto sobre o xadrez. Recupera a cor das trilhas
// próximas ao fundo a partir da diferença entre verde e os outros canais,
// evitando carregar os quadrados cinzas para o recorte transparente.
const matteInicial = Buffer.from(alfa)
for (let i = 0; i < pixels; i++) {
  if (protegido[i]) continue
  const r = data[i * 3], g = data[i * 3 + 1], b = data[i * 3 + 2]
  if (g <= r + 5 || g <= b + 5) continue
  const x = i % info.width, y = Math.floor(i / info.width)
  let pertoDoFundo = false
  for (const [dx, dy] of [[-16, 0], [16, 0], [0, -16], [0, 16], [-12, -12], [12, 12], [-12, 12], [12, -12]]) {
    const nx = x + dx, ny = y + dy
    if (nx >= 0 && nx < info.width && ny >= 0 && ny < info.height && matteInicial[ny * info.width + nx] < 8) pertoDoFundo = true
  }
  if (!pertoDoFundo) continue
  const branco = suave(Math.min(r, b), 210, 250)
  alfa[i] = Math.round(255 * Math.max(suave(g - (r + b) / 2, 10, 90), branco))
  data[i * 3] = Math.round(107 * (1 - branco) + 245 * branco)
  data[i * 3 + 1] = Math.round(221 * (1 - branco) + 255 * branco)
  data[i * 3 + 2] = Math.round(18 * (1 - branco) + 235 * branco)
}

// Fecha apenas minúsculos pontos neutros cercados por material do objeto.
const visitado = new Uint8Array(pixels)
for (let inicio = 0; inicio < pixels; inicio++) {
  if (visitado[inicio] || alfa[inicio] > 32) continue
  const fila = [inicio]
  visitado[inicio] = 1
  let borda = false
  for (let j = 0; j < fila.length; j++) {
    const atual = fila[j], x = atual % info.width, y = Math.floor(atual / info.width)
    if (!x || !y || x === info.width - 1 || y === info.height - 1) borda = true
    for (const vizinho of [x ? atual - 1 : -1, x < info.width - 1 ? atual + 1 : -1, y ? atual - info.width : -1, y < info.height - 1 ? atual + info.width : -1]) {
      if (vizinho < 0 || visitado[vizinho] || alfa[vizinho] > 32) continue
      visitado[vizinho] = 1
      fila.push(vizinho)
    }
  }
  if (!borda && fila.length <= 32) for (const i of fila) alfa[i] = 255
}

await sharp(data, { raw: { width: info.width, height: info.height, channels: 3 } })
  .joinChannel(alfa, { raw: { width: info.width, height: info.height, channels: 1 } })
  .png()
  .toFile(destino)
console.log(`Recorte salvo: ${destino}`)
