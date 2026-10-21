/**
 * Texto dos documentos legais, um arquivo HTML por documento em `./legal/`.
 * Gerados por `scripts/importa-legal.mjs` a partir da Central de Ajuda (WHMCS) —
 * copiados literalmente em 21/10/2026. Ver o comentário em `institucional.ts`.
 * O `?raw` entrega a string; a página injeta com `set:html`.
 */
import termosDeServicos from './legal/termos-de-servicos.html?raw'
import politicaDeUtilizacao from './legal/politica-de-utilizacao.html?raw'
import conteudoIlegal from './legal/conteudo-ilegal.html?raw'
import politicaDeEmailESpam from './legal/politica-de-email-e-spam.html?raw'
import termoDeAtivacaoDePlugins from './legal/termo-de-ativacao-de-plugins.html?raw'
import politicaDePrivacidade from './legal/politica-de-privacidade.html?raw'
import tratamentoDeDados from './legal/tratamento-de-dados.html?raw'
import politicaDeCookies from './legal/politica-de-cookies.html?raw'
import termoDeConfidencialidade from './legal/termo-de-confidencialidade.html?raw'
import termosDoProgramaDeAfiliados from './legal/termos-do-programa-de-afiliados.html?raw'

export const textosLegais: Record<string, string> = {
  'termos-de-servicos': termosDeServicos,
  'politica-de-utilizacao': politicaDeUtilizacao,
  'conteudo-ilegal': conteudoIlegal,
  'politica-de-email-e-spam': politicaDeEmailESpam,
  'termo-de-ativacao-de-plugins': termoDeAtivacaoDePlugins,
  'politica-de-privacidade': politicaDePrivacidade,
  'tratamento-de-dados': tratamentoDeDados,
  'politica-de-cookies': politicaDeCookies,
  'termo-de-confidencialidade': termoDeConfidencialidade,
  'termos-do-programa-de-afiliados': termosDoProgramaDeAfiliados,
}
