/**
 * Arte do hub /hospedagem/, criada com a ferramenta integrada image_gen.
 * Referência de estilo: astronauta-cloud-vps.webp, sem reutilizar a composição.
 *
 * Prompt: ilustração 3D premium de astronauta branco/lilás à direita,
 * dois servidores à esquerda e nuvem central; conexões verde #6BDD12 e
 * três placas com ícones de site, código e e-mail. Roxo #5C1F85, sem textos,
 * composição horizontal 3:2, objetos inteiros, fundo transparente solicitado.
 * Refinamento: preservar os objetos e remover o quadriculado gerado;
 * usar branco puro se a ferramenta não conseguir exportar canal alfa.
 * O resultado veio em RGB sobre branco. A página usa mix-blend-mode:multiply
 * na camada da arte para compor esse branco sobre as nuvens existentes.
 *
 * Otimização determinística: apenas tamanho e compressão, sem alterar a arte.
 * node scripts/prepara-arte-hospedagem.mjs
 */
import sharp from 'sharp'

const source = '_uploads-turbonovosite/astronauta-hub-hospedagem.png'
const destination = 'src/assets/imagens/empresa-de-hospedagem-de-site-astronauta-solucoes-nuvem.webp'
const output = await sharp(source).resize({ width: 725, withoutEnlargement: true }).webp({ quality: 85, effort: 6 }).toFile(destination)
console.log(`${destination}: ${output.width}×${output.height}, ${(output.size / 1024).toFixed(1)} KB`)
