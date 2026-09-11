/**
 * Pós-build: deixa todo arquivo de `dist/` legível por qualquer usuário.
 *
 * Por quê: na hospedagem, a imagem é montada num Dockerfile gerado pela
 * plataforma (`COPY . .` → `npm run build` → `COPY dist` para o nginx). Os
 * arquivos que o build GERA nascem com 644 e o nginx serve normalmente. Já os
 * arquivos copiados como estão de `public/` (favicon.svg, e antes os logos
 * de clientes) chegam sem permissão de leitura para o usuário do nginx e o
 * servidor responde 403 — foi assim que o favicon sumiu do site publicado.
 *
 * Aqui não se muda nada de conteúdo: só o modo. No Windows o chmod é quase
 * inócuo (mexe só no atributo somente-leitura), o que não atrapalha.
 */
import { readdir, chmod, stat } from 'node:fs/promises'
import { join } from 'node:path'

const raiz = join(process.cwd(), 'dist')
let arquivos = 0
let pastas = 0

async function percorre(dir) {
  await chmod(dir, 0o755)
  pastas++
  for (const entrada of await readdir(dir, { withFileTypes: true })) {
    const caminho = join(dir, entrada.name)
    if (entrada.isDirectory()) {
      await percorre(caminho)
    } else {
      await chmod(caminho, 0o644)
      arquivos++
    }
  }
}

try {
  await stat(raiz)
} catch {
  console.error('[normaliza-permissoes] dist/ não existe — rode o astro build antes.')
  process.exit(1)
}

await percorre(raiz)
console.log(`[normaliza-permissoes] ${arquivos} arquivos e ${pastas} pastas em dist/ com leitura liberada.`)
