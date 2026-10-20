import clientLogo0 from '../assets/logos/cora.svg?url'
import clientLogo1 from '../assets/logos/oab.webp?url'
import clientLogo2 from '../assets/logos/tallos.svg?url'
import clientLogo3 from '../assets/logos/unimed-geral.svg?url'
import clientLogo4 from '../assets/logos/fiocruz.webp?url'
import clientLogo5 from '../assets/logos/fenapaf.svg?url'
import clientLogo6 from '../assets/logos/abrint.webp?url'
import clientLogo7 from '../assets/logos/abcfarma.webp?url'
import clientLogo8 from '../assets/logos/anpei.webp?url'
import clientLogo9 from '../assets/logos/cref8-geral.svg?url'
import clientLogo10 from '../assets/logos/carloschagas.webp?url'
import clientLogo11 from '../assets/logos/febracis.svg?url'
import clientLogo12 from '../assets/logos/livup.svg?url'
import clientLogo13 from '../assets/logos/fecomercio-geral.svg?url'
import clientLogo14 from '../assets/logos/sinduscon.svg?url'
import clientLogo15 from '../assets/logos/creci-geral.svg?url'
import clientLogo16 from '../assets/logos/ademi.svg?url'
import clientLogo17 from '../assets/logos/iab.webp?url'
import clientLogo18 from '../assets/logos/brasao-brasil.webp?url'

/**
 * Fonte única de conteúdo da home.
 *
 * REGRA DO PROJETO: só entra aqui número, preço ou prova que exista de verdade.
 * Tudo que foi extraído de turbocloud.com.br em 14/08/2026 está marcado com
 * `fonte`. O que ainda falta confirmar está listado em `PENDENTE` no fim do arquivo
 * — nada aqui é inventado.
 */

/* ------------------------------------------------------------------ */
/* Marca e contato                                                     */
/* ------------------------------------------------------------------ */

export const marca = {
  nome: 'Turbo Cloud',
  tagline: 'Hospedagem de alta performance no Brasil',
  desde: 2013,
  cnpj: '19.262.676/0001-81',
  endereco: 'Av. Carlos Gomes, 700, 5º Andar, Bela Vista, Porto Alegre – RS',
  email: 'ola@turbocloud.com.br',
  telefone: '(11) 94860-0000',
  versiculo: {
    texto: 'A Deus seja toda a Honra e Glória! Amém.',
    referencia: 'Romanos 11:36',
  },
} as const

export const links = {
  whatsapp: 'https://wa.me/5511948600000',
  areaCliente: 'https://app.turbocloud.com.br/login',
  faturas: 'https://app.turbocloud.com.br/clientarea.php?action=invoices',
  ajuda: 'https://app.turbocloud.com.br/knowledgebase',
  ticket: 'https://app.turbocloud.com.br/submitticket.php',
  status: 'https://status.turbocloud.com.br/',
  /** JSON público da status page (Better Stack). Traz o `aggregate_state` que o
   *  rodapé lê para dizer se está tudo operacional.
   *  O locale (`/en/`) vai explícito de propósito: `/index.json` responde 302 para
   *  cá, e a resposta de redirect não carrega o header CORS — o navegador barra.
   *  Só o 200 final tem `Access-Control-Allow-Origin: *`. */
  statusApi: 'https://status.turbocloud.com.br/en/index.json',
  /** Página pública das avaliações (Trustindex — fonte dos depoimentos). */
  avaliacoes: 'https://www.trustindex.io/reviews/turbocloud.com.br',
  reclameAqui: 'https://www.reclameaqui.com.br/empresa/turbo-cloud/',
  /* Ainda no WordPress — entram na onda 2 e 3 do mapa de páginas.
     Enquanto forem absolutos, apontam para o site antigo de propósito:
     link quebrado é pior que link para a versão velha. */
  calculadora: '/calculadora/',

  /* Já reconstruídas aqui */
  /** A página /planos/ foi descontinuada e redireciona para a home. Os links
   *  internos apontam para a seção de planos da home, não para o topo dela:
   *  quem clica em "Planos" quer ver preço, não a dobra inicial. */
  planos: '/#planos',
  contato: '/contato/',
  hospedagem: '/hospedagem/',
  estrutura: '/estrutura/',
  afiliados: '/afiliados/',
  /** Índice dos documentos. Os textos ficam no WHMCS — fonte única, para não
   *  repetir o que aconteceu com as duas políticas de privacidade diferentes. */
  legal: '/legal/',
  produtos: {
    institucionais: '/hospedagem/sites-institucionais/',
    woocommerce: '/hospedagem/lojas-virtuais-woocommerce/',
    blogs: '/hospedagem/blogs-e-portais-de-conteudo/',
    containers: '/hospedagem/containers/',
    cloudVps: '/hospedagem/cloud-vps/',
    email: '/hospedagem/servidor-para-e-mail/',
    openclaw: '/hospedagem/openclaw/',
  },
  ferramentasIa: {
    turboBuilder: '/ferramentas-ia/turbo-builder/',
    turboDeploy: '/ferramentas-ia/turbo-deploy/',
  },
} as const

/** Carrinho do WHMCS. Cada plano leva direto para o seu produto — antes todos
 *  apontavam para a página /planos/, o que dava uma volta a mais entre "quero
 *  esse" e o checkout. Slugs conferidos em app.turbocloud.com.br.
 *  Cloudron e EasyPanel são dois produtos, cada um com o seu slug. */
export const loja = (caminho: string) => `https://app.turbocloud.com.br/store/${caminho}`

/** Janela real de atendimento. O site atual se contradiz (diz "24/7" em banner e
 *  "8h às 1h" no FAQ). Aqui vale o FAQ — honestidade vende melhor que 24/7 genérico. */
export const atendimento = {
  whatsapp: 'Segunda a sábado, das 8h à 1h',
  ticket: 'Domingo e fora do horário, via ticket',
  resumo: 'WhatsApp 8h–1h (seg–sáb) · ticket todos os dias',
} as const

/* ------------------------------------------------------------------ */
/* Provas — todos os números abaixo saíram do site em produção         */
/* ------------------------------------------------------------------ */

export const provas = {
  /* 18 ms é o TTFB que o site atual publica. O 5 ms que estava aqui não tinha fonte. */
  ttfb: '18 ms',
  uptimeTier3: '99,982%',
  backup: '12/12h',
  notaGoogle: '5,0',
  avaliacoesGoogle: 1366,
  /* O site atual diz "+150 plugins premium" e, no mesmo parágrafo, "3 plugins premium à sua
     escolha" + 25.000 gratuitos. Vale a versão conservadora: 3. */
  pluginsPremium: '3',
  pluginsGratuitos: '25.000',
  apps1Click: '470+',
  anosDeCasa: new Date().getFullYear() - 2013,
} as const

/** Números e organizações informados pelo cliente em 09/09/2026.
 * Os clientes privados são apresentados separadamente dos sites governamentais. */
export const confiancaInfra = {
  eyebrow: 'Organizações que confiam na Turbo Cloud',
  organizacoes: [
    { nome: 'Banco Cora', logo: clientLogo0, largura: 90, altura: 24, marca: 'cora' },
    { nome: 'OAB', logo: clientLogo1, largura: 280, altura: 152, marca: 'oab' },
    { nome: 'Tallos', logo: clientLogo2, largura: 184, altura: 44, marca: 'tallos' },
    { nome: 'Unimed', logo: clientLogo3, largura: 309, altura: 53, marca: 'unimed' },
    { nome: 'Fiocruz – Fundação Oswaldo Cruz', logo: clientLogo4, largura: 360, altura: 63, marca: 'fiocruz' },
    { nome: 'FENAPAF – Federação Nacional dos Atletas Profissionais de Futebol', logo: clientLogo5, largura: 122, altura: 87, marca: 'fenapaf' },
    { nome: 'ABRINT', logo: clientLogo6, largura: 360, altura: 135, marca: 'abrint' },
    { nome: 'ABCFARMA', logo: clientLogo7, largura: 360, altura: 90, marca: 'abcfarma' },
    { nome: 'ANPEI', logo: clientLogo8, largura: 128, altura: 28, marca: 'anpei' },
    { nome: 'CREF8', logo: clientLogo9, largura: 171, altura: 51, marca: 'cref8' },
    { nome: 'Instituto Carlos Chagas', logo: clientLogo10, largura: 184, altura: 180, marca: 'carloschagas' },
    { nome: 'Febracis', logo: clientLogo11, largura: 857, altura: 216, marca: 'febracis' },
    { nome: 'Liv Up', logo: clientLogo12, largura: 49, altura: 56, marca: 'livup' },
    { nome: 'Fecomércio', logo: clientLogo13, largura: 363, altura: 145, marca: 'fecomercio' },
    { nome: 'Sinduscon', logo: clientLogo14, largura: 191, altura: 45, marca: 'sinduscon' },
    { nome: 'CRECI', logo: clientLogo15, largura: 268, altura: 56, marca: 'creci' },
    { nome: 'ADEMI', logo: clientLogo16, largura: 156, altura: 60, marca: 'ademi' },
    { nome: 'IAB Brasil', logo: clientLogo17, largura: 117, altura: 57, marca: 'iab' },
  ],
  aplicacoes: '155 mil',
  titulo: 'aplicações hospedadas.',
  destaque: 'Uma infraestrutura para ir mais longe.',
  descricao: 'De empresas a instituições públicas, a confiança de quem precisa de velocidade e estabilidade todos os dias.',
  /** Cartão de destaque abaixo do carrossel e versão discreta no rodapé. */
  governo: '150',
  governoTexto: 'sites governamentais',
  /** Uma entrada por linha: a quebra é parte do desenho do selo. */
  governoSelo: ['Confiança', 'que impulsiona'],
  governoSeloDestaque: 'o Brasil',
  governoLogo: clientLogo18,
  alcance: 'Clientes em',
  paises: 'mais de 70 países',
  maisDe: 'Mais de',
} as const

/** Verificação conferida no perfil do Reclame AQUI em 09/09/2026. */
export const seloReclameAqui = {
  texto: 'Verificada por',
  /** O wordmark é pintado em duas cores, por isso vem partido. */
  marca1: 'Reclame',
  marca2: 'AQUI',
  acessibilidade: 'Turbo Cloud verificada pelo Reclame AQUI — abre em nova aba',
} as const

/** S9 · faixa de números. Ícone + número + rótulo curto. */
export const stats = [
  { icone: 'uptime', valor: '99,982%', label: 'Uptime do datacenter' },
  { icone: 'latencia', valor: provas.ttfb, label: 'Latência média' },
  { icone: 'backup', valor: '12 / 12h', label: 'Backup automático' },
  { icone: 'estrela', valor: '5,0', sufixo: '★', label: 'Nota no Google' },
] as const

/** S9 · Servidores no Brasil */
export const brasil = {
  eyebrow: 'Infraestrutura Global TURBO',
  titulo1: 'Seu projeto no mundo.',
  titulo2: 'Velocidade TURBO em cada conexão.',
  texto: 'Hospedagem na Europa, nos Estados Unidos e no Brasil. Infraestrutura para sites, apps e automações, com a estabilidade e a velocidade que seu projeto precisa para crescer.',
  link: { label: 'Conheça nossos data centers', href: links.estrutura },
} as const

/* ------------------------------------------------------------------ */
/* S0 · Top bar                                                        */
/* ------------------------------------------------------------------ */

export const topbar = {
  badge: 'NOVO',
  texto: 'Calculadora de perda de tráfego: descubra quanto a lentidão custa por mês.',
  /** versão curta para o celular (a longa não cabe) */
  textoCurto: 'Calculadora: quanto a lentidão te custa por mês',
  cta: 'Calcular agora',
  href: links.calculadora,
} as const

/* ------------------------------------------------------------------ */
/* S1 · Navegação                                                      */
/* ------------------------------------------------------------------ */

export const nav = [
  {
    label: 'Hospedagens',
    itens: [
      {
        label: 'Sites institucionais',
        desc: 'WordPress com recursos dedicados',
        href: links.produtos.institucionais,
      },
      {
        label: 'Lojas virtuais',
        desc: 'WooCommerce sem travar no pico',
        href: links.produtos.woocommerce,
      },
      {
        label: 'Blogs e portais',
        desc: 'Conteúdo e notícias em escala',
        href: links.produtos.blogs,
      },
    ],
  },
  {
    label: 'Cloud e VPS',
    itens: [
      {
        label: 'Container',
        desc: 'Isolamento total e CPU dedicada',
        href: links.produtos.containers,
      },
      {
        label: 'Cloud / VPS',
        desc: 'Acesso root e +50 apps em 1 clique',
        href: links.produtos.cloudVps,
      },
      {
        label: 'Servidor de e-mail',
        desc: 'E-mail separado do site',
        href: links.produtos.email,
      },
    ],
  },
  // Ferramentas IA (Turbo Builder / Turbo Deploy) ocultas até o lançamento.
  { label: 'Estrutura', href: links.estrutura },
  { label: 'Planos', href: links.planos },
] as const

/* ------------------------------------------------------------------ */
/* S2 · Hero                                                           */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: marca.tagline,
  titulo1: 'Publique mais rápido.',
  titulo2: 'Cresça sem trocar de cloud.',
  subLead: 'Sua próxima ideia, em modo TURBO:',
  sub: 'sites, apps e automações em uma infraestrutura rápida, estável e pronta para crescer. Você cria o próximo projeto. A Turbo cuida da base para ele ir mais longe.',
  ctaPrimario: { label: 'Ver planos', href: '#planos' },
  ctaSecundario: { label: 'Falar com especialista', href: links.whatsapp },
  /** Selos abaixo dos botões. "Suporte 24h" não entra — o horário real é 8h–1h. */
  beneficios: [`Uptime ${provas.uptimeTier3}`, 'Suporte humano', 'Migração grátis'],
  /** Barra de números do painel flutuante — só dado real de `provas`. */
  numeros: [
    { valor: provas.ttfb, label: 'TTFB' },
    { valor: provas.uptimeTier3, label: 'Uptime' },
    { valor: provas.backup, label: 'Backup' },
    { valor: `${provas.notaGoogle} ★`, label: 'Google' },
  ],
  /** Chips técnicos do painel de desempenho (SpeedPanel). */
  chips: ['LITESPEED', 'NVMe 4.0', 'REDIS', 'CLOUDLINUX'],
} as const

/* ------------------------------------------------------------------ */
/* S3 · Prova social — depoimentos reais do Google (via Trustindex)     */
/* ------------------------------------------------------------------ */

export type Depoimento = {
  nome: string
  data: string
  texto: string
  nota: 5
}

/** Aviso obrigatório enquanto os avatares usarem foto de banco de imagens:
 *  separa o que é real (nome, texto, nota — tudo do Google) do que é
 *  ilustração. Se um dia entrarem fotos reais e autorizadas dos clientes,
 *  esta linha sai. */
export const avisoFotos = 'Fotos ilustrativas · avaliações reais do Google'

/** Transcritos de trustindex.io/reviews/turbocloud.com.br em 14/08/2026.
 *  Só entraram os que foi possível transcrever por inteiro. */
export const depoimentos: Depoimento[] = [
  {
    nome: 'Luziane Tavares',
    data: '31/07/2026',
    nota: 5,
    texto:
      'Suporte muito eficiente e um ótimo atendimento, super atenciosos e dedicados para nos ajudar.',
  },
  {
    nome: 'Cristiano Dias',
    data: '23/06/2026',
    nota: 5,
    texto: 'Suporte ao cliente rápido e eficiente direto pelo WhatsApp. Hospedagem excelente!',
  },
  {
    nome: 'Matthew Ward',
    data: '26/05/2026',
    nota: 5,
    texto: 'Suporte muito eficiente, sempre resolvem meus problemas com rapidez.',
  },
  {
    nome: 'Deejay Nelson Maçã',
    data: '22/05/2026',
    nota: 5,
    texto: 'Experiência ótima. Sou cliente há mais de 5 anos e estou super satisfeito.',
  },
]

/* ------------------------------------------------------------------ */
/* S4 · Serviços (grid 2×2 cobrindo os 6 produtos reais)               */
/* ------------------------------------------------------------------ */

/** Quatro cards em linha. O print de referência trazia "Registro de Domínios"
 *  no 4º card, mas a TurboCloud não tem esse produto/link — entrou o servidor
 *  de e-mail, que existe. Cada item da lista é recurso confirmado no site. */
export const servicos = [
  {
    id: 'wordpress',
    icone: 'wordpress',
    titulo: 'Hospedagem WordPress',
    texto: 'LiteSpeed no servidor, plugins premium inclusos e o cPanel que você já conhece.',
    itens: ['Instalação com 1 clique', 'LiteSpeed + LSCache', `${provas.pluginsPremium} plugins premium grátis`],
    rodape: 'Ideal para WordPress',
    href: links.produtos.institucionais,
  },
  {
    id: 'woocommerce',
    icone: 'loja',
    titulo: 'Hospedagem WooCommerce',
    texto: 'CPU e memória reservadas para a loja vender no pico sem travar.',
    itens: ['Recursos dedicados', 'Cache TurboCache', `Backup a cada 12h`],
    rodape: 'Para lojas que vendem',
    href: links.produtos.woocommerce,
  },
  {
    id: 'container',
    icone: 'nuvem',
    titulo: 'Container e VPS (Cloud)',
    texto: 'Liberdade e performance com recursos dedicados para projetos que exigem mais poder.',
    itens: ['Isolamento total, até 24 vCPU', 'Acesso root completo', `${provas.apps1Click} apps em 1 clique`],
    rodape: 'Para projetos que escalam',
    href: links.produtos.containers,
  },
  {
    id: 'email',
    icone: 'email',
    titulo: 'Servidor de e-mail',
    texto: 'E-mail em servidor separado: se o site cair, a caixa de entrada continua de pé.',
    itens: ['Contas ilimitadas', 'SMTP profissional', 'AntiSpam Pro'],
    rodape: 'A partir de R$ 20/mês',
    href: links.produtos.email,
  },
] as const

/* ------------------------------------------------------------------ */
/* S5 · Infraestrutura (accordion de 4 itens)                          */
/* ------------------------------------------------------------------ */

/** Lista da seção S5 (padrão do print). Só recurso confirmado no site atual:
 *  "monitoramento 24/7" e "proteção DDoS" do print ficaram de fora por falta
 *  de fonte. */
export const infraLista = [
  'Datacenter TIER III no Brasil (Ascenty, São Paulo)',
  'CPU e memória dedicadas por conta (CloudLinux)',
  'Armazenamento NVMe 4.0 em RAID10',
  'Backup automático de 12 em 12 horas',
  'AntiBrute Force e AntiVírus em tempo real',
  'Certificado SSL grátis com renovação automática',
  'Contingência: espelho em outro datacenter',
] as const

/** Card de status ao lado dos racks. */
export const infraCard = [
  { icone: 'pin', label: 'Localização', valor: 'Brasil – São Paulo' },
  { icone: 'uptime', label: 'Uptime', valor: provas.uptimeTier3 },
  { icone: 'latencia', label: 'TTFB médio', valor: provas.ttfb },
  { icone: 'escudo', label: 'Segurança em tempo real', valor: 'Ativa', status: true },
] as const

export const infraestrutura = [
  {
    id: 'dedicado',
    titulo: 'Recursos dedicados de verdade',
    texto:
      'CloudLinux reserva CPU e memória por conta. O site do vizinho pode disparar no consumo que o seu continua com o mesmo tanto de processador — nos planos Duo e nas revendas, a reserva é por domínio.',
    painel: 'isolamento',
  },
  {
    id: 'backup',
    titulo: 'Backup automático de 12 em 12 horas',
    texto:
      'Dois pontos de restauração por dia, todos os dias, sem plugin e sem você lembrar. Para projetos que não podem parar, existe o serviço de contingência: espelhamento automático em um datacenter diferente.',
    painel: 'backup',
  },
  {
    id: 'seguranca',
    titulo: 'Segurança em tempo real',
    texto:
      'AntiBrute Force barrando tentativa de força bruta no wp-admin e AntiVírus MalwareExpert escaneando em tempo real. Certificado SSL grátis emitido e renovado sozinho.',
    painel: 'seguranca',
  },
  {
    id: 'datacenter',
    titulo: 'Datacenter TIER III no Brasil',
    texto:
      'Estrutura na Ascenty em São Paulo — o mesmo datacenter usado por grandes players como o Microsoft Azure. Certificação TIER III, 99,982% de disponibilidade, NVMe 4.0 em RAID10 e seus dados dentro da lei brasileira.',
    painel: 'datacenter',
  },
] as const

/* ------------------------------------------------------------------ */
/* S6 · Por que escolher a Turbo Cloud + banner O caminho Turbo         */
/* ------------------------------------------------------------------ */

/** S6 · Por que escolher — três razões, uma por eixo da pergunta do título
 *  (rápido · simples · barato). Suporte segue a janela real de atendimento. */
export const porque = [
  {
    icone: 'velocidade',
    titulo: 'Performance de verdade',
    texto: 'Servidores no Brasil, CPU e memória dedicadas e stack otimizado para WordPress.',
  },
  {
    icone: 'suporte',
    titulo: 'Suporte especializado',
    texto: 'Atendimento humano no WhatsApp, de segunda a sábado, das 8h à 1h.',
  },
  {
    icone: 'preco',
    titulo: 'Preço justo e transparente',
    texto: 'Planos em real, sem letra miúda e sem taxa escondida.',
  },
] as const

export const bannerTurbo = {
  titulo: 'O caminho Turbo',
  /** linha em destaque (negrito) */
  destaque: 'Mais velocidade, mais estabilidade e mais conversões.',
  texto: 'Seu site merece o melhor. Seu negócio também.',
  cta: { label: 'Ver planos agora', href: '#planos' },
} as const

/* ------------------------------------------------------------------ */
/* S7 · Migração                                                       */
/* ------------------------------------------------------------------ */

export const migracao = {
  eyebrow: 'MIGRAÇÃO GRÁTIS',
  titulo1: 'Vindo de outra hospedagem?',
  titulo2: 'A gente faz a mudança.',
  texto:
    'Nosso time cuida de tudo: arquivos, banco de dados, contas de e-mail e apontamento de DNS. Você acompanha e aprova antes de virar a chave.',
  passos: [
    { label: 'Você manda o acesso atual', desc: 'cPanel, FTP ou o painel que for' },
    { label: 'A gente copia e testa', desc: 'site sobe em ambiente de teste primeiro' },
    { label: 'Você aprova e o DNS vira', desc: 'sem downtime perceptível' },
  ],
  cta: { label: 'Quero migrar agora', href: links.whatsapp },
  origens: ['cPanel', 'WordPress', 'WooCommerce', 'Plesk', 'E-mail'],
} as const

/* ------------------------------------------------------------------ */
/* S8 · Suporte humano                                                 */
/* ------------------------------------------------------------------ */

export const suporte = {
  eyebrow: 'NÃO É ROBÔ. NÃO É GRINGO. É GENTE DAQUI.',
  titulo1: 'Time brasileiro que resolve',
  titulo2: 'junto com você.',
  texto:
    'Sem script, sem fila de ticket que morre no vácuo, sem "abra um chamado e aguarde 48h". Você chama no WhatsApp e fala com quem tem acesso ao servidor.',
  ctaWhats: { label: 'Chamar no WhatsApp', href: links.whatsapp },
  ctaTicket: { label: 'Abrir ticket', href: links.ticket },
  /** Conversa ilustrativa — o formato é real (WhatsApp), o diálogo é uma
   *  representação do fluxo de atendimento, não a transcrição de um cliente. */
  conversa: [
    { de: 'cliente', texto: 'Oi! Minha loja tá dando erro no checkout desde agora de manhã 😩', hora: '09:12' },
    { de: 'turbo', texto: 'Bom dia! Já estou olhando o log do seu domínio aqui. Me confirma se é no /finalizar-compra?', hora: '09:13' },
    { de: 'cliente', texto: 'Isso mesmo', hora: '09:14' },
    { de: 'turbo', texto: 'Achei: um plugin de frete estourou o limite de memória do PHP. Subi o limite e limpei o TurboCache. Testa aí 👍', hora: '09:21' },
    { de: 'cliente', texto: 'Voltou!! Muito obrigado 🙏', hora: '09:23' },
  ],
  selo: 'Resolvido em 11 minutos',
} as const

/* ------------------------------------------------------------------ */
/* S9 · Infraestrutura global                                          */
/* ------------------------------------------------------------------ */

/** Marcadores do mapa do Brasil (S9). x/y em % do viewBox do MapDots. */
/** Pontos de presença marcados no mapa-múndi, em [lon, lat].
 *  A estrutura principal é a de São Paulo (Ascenty). Os servidores nos EUA e
 *  na Europa existem e estão no site atual, mas sem cidade divulgada — por
 *  isso a posição é aproximada e o rótulo não cita cidade. */
export const regioes = [
  { nome: 'São Paulo – SP', detalhe: 'BR', principal: true, lon: -46.6, lat: -23.5 },
  { nome: 'Estados Unidos', detalhe: 'US', principal: false, lon: -77, lat: 38.5 },
  { nome: 'Europa', detalhe: 'EU', principal: false, lon: 6, lat: 50 },
] as const

/* ------------------------------------------------------------------ */
/* S10 · Planos                                                        */
/* ------------------------------------------------------------------ */

export type Plano = {
  nome: string
  persona: string
  precoMensal: number
  /** valor por mês quando pago no ciclo anual */
  precoAnualMes?: number
  /** cobrança única do ciclo anual */
  precoAnualTotal?: number
  destaque?: boolean
  selo?: string
  /** texto literal do cupom exibido no card (ex.: VPS) */
  cupom?: string
  grupos: { titulo: string; itens: string[] }[]
  href: string
}

export type AbaPlanos = {
  id: string
  /** Produto a que a aba pertence. Decide a faixa de garantias e quais abas
   *  cada página de produto mostra (hospedagem reúne Brasil, EUA e Europa). */
  familia: 'hospedagem' | 'container' | 'vps'
  label: string
  /** rótulo curto para o controle segmentado do celular */
  labelCurto?: string
  descricao: string
  nota?: string
  planos: Plano[]
}

const gruposHospedagem = (
  dominios: string,
  disco: string,
  cpu: string,
): Plano['grupos'] => [
  {
    titulo: 'Infraestrutura',
    itens: [dominios, disco, cpu, 'Subdomínios ilimitados', 'Rede de 1GB Ethernet'],
  },
  {
    titulo: 'Segurança e performance',
    itens: [
      'Acelerador LiteSpeed Web',
      'CloudLinux',
      'Backup de 12 em 12 horas',
      'Certificado SSL grátis',
      'AntiSpam Pro',
    ],
  },
  {
    titulo: 'Ferramentas Turbo',
    itens: [
      'E-mail profissional',
      'Instalador WordPress 1Click',
      'Plugins premium originais grátis',
    ],
  },
]

/* Hospedagem de sites: os mesmos nove planos em três locais. Preços, specs e
   recursos são iguais; o que muda é o servidor (e o slug do checkout, que o
   WHMCS do site atual nomeia de forma diferente em cada local — copiados
   literalmente, inclusive o prefixo `container-` em alguns). */
type LocalHospedagem = 'brasil' | 'eua' | 'europa'

const planosHospedagemBase = [
  {
    chave: 'one',
    nome: 'One',
    persona: 'Para quem está colocando o primeiro site no ar.',
    mensal: 35.9,
    anualMes: 32.9,
    anualTotal: 394.9,
    anualForaBrasil: 32.9,
    dominios: '1 domínio Blindagem Turbo',
    disco: '15GB SSD NVMe',
    cpu: '2 vCPU e 5GB DDR4',
    cpuForaBrasil: '2 vCPU e 5GB DDR4 por domínio',
  },
  {
    chave: 'three',
    nome: 'Three',
    persona: 'Para agência e freela que toca mais de um cliente no mesmo painel.',
    mensal: 49.9,
    anualMes: 45.74,
    anualTotal: 548.88,
    destaque: true,
    selo: 'MAIS ESCOLHIDO',
    dominios: '3 domínios em 1 cPanel',
    disco: '50GB SSD NVMe',
    cpu: '2 vCPU e 5GB DDR4',
  },
  {
    chave: 'duo',
    nome: 'Duo',
    persona: 'Para quem investe em tráfego pago e precisa de CPU reservada em cada domínio.',
    mensal: 64.9,
    anualMes: 54.0,
    anualTotal: 648.0,
    anualForaBrasil: 54.0,
    dominios: '2 domínios Blindagem Turbo',
    disco: '20GB SSD NVMe',
    cpu: '2 vCPU e 5GB DDR4 por domínio',
  },
  {
    chave: 'elite-5',
    nome: 'Revenda Elite 5',
    persona: 'Para quem hospeda os sites dos próprios clientes e quer margem.',
    mensal: 100.0,
    anualMes: 91.67,
    anualTotal: 1100.04,
    anualForaBrasil: 91.6,
    dominios: '5 domínios Blindagem Turbo',
    disco: '50GB SSD NVMe',
    cpu: '2 vCPU e 5GB DDR4 por domínio',
  },
  {
    chave: 'elite-10',
    nome: 'Revenda Elite 10',
    persona: 'Revenda com 10 domínios, cada um com a sua reserva de CPU e memória.',
    mensal: 150.0,
    anualMes: 137.5,
    anualTotal: 1650.0,
    anualForaBrasil: 137.5,
    dominios: '10 domínios Blindagem Turbo',
    disco: '75GB SSD NVMe',
    cpu: '2 vCPU e 5GB DDR4 por domínio',
  },
  {
    chave: 'elite-15',
    nome: 'Revenda Elite 15',
    persona: 'Revenda com 15 domínios, cada um com a sua reserva de CPU e memória.',
    mensal: 190.0,
    anualMes: 174.0,
    anualTotal: 2088.0,
    anualForaBrasil: 174.0,
    dominios: '15 domínios Blindagem Turbo',
    disco: '100GB SSD NVMe',
    cpu: '2 vCPU e 5GB DDR4 por domínio',
  },
  {
    chave: 'elite-20',
    nome: 'Revenda Elite 20',
    persona: 'Revenda com 20 domínios, cada um com a sua reserva de CPU e memória.',
    mensal: 280.0,
    anualMes: 256.0,
    anualTotal: 3072.0,
    anualForaBrasil: 256.0,
    dominios: '20 domínios Blindagem Turbo',
    disco: '150GB SSD NVMe',
    cpu: '2 vCPU e 5GB DDR4 por domínio',
  },
  {
    chave: 'elite-30',
    nome: 'Revenda Elite 30',
    persona: 'Revenda com 30 domínios, cada um com a sua reserva de CPU e memória.',
    mensal: 420.0,
    anualMes: 378.0,
    anualTotal: 4536.0,
    dominios: '30 domínios Blindagem Turbo',
    /* Resposta oficial da equipe (20/10/2026): 225GB, no mensal e no anual, em Brasil, EUA e Europa.
       O site atual mostra 150GB no mensal — erro do atual. */
    disco: '225GB SSD NVMe',
    cpu: '2 vCPU e 5GB DDR4 por domínio',
  },
  {
    chave: 'elite-50',
    nome: 'Revenda Elite 50',
    persona: 'Revenda com 50 domínios, cada um com a sua reserva de CPU e memória.',
    mensal: 550.0,
    anualMes: 495.0,
    anualTotal: 5940.0,
    dominios: '50 domínios Blindagem Turbo',
    disco: '250GB SSD NVMe',
    cpu: '2 vCPU e 5GB DDR4 por domínio',
  },
] as const

const slugsHospedagem: Record<LocalHospedagem, Record<string, string>> = {
  brasil: {
    one: 'alta-performance/one',
    three: 'alta-performance/three',
    duo: 'alta-performance/duo',
    'elite-5': 'alta-performance/revenda-elite-5',
    'elite-10': 'alta-performance/revenda-elite-10',
    'elite-15': 'alta-performance/revenda-elite-15',
    'elite-20': 'alta-performance/revenda-elite-20',
    'elite-30': 'alta-performance/revenda-elite-30',
    'elite-50': 'alta-performance/revenda-elite-50',
  },
  eua: {
    one: 'servidores-nos-eua/one-eua',
    three: 'servidores-nos-eua/three-eua',
    duo: 'servidores-nos-eua/duo-eua',
    'elite-5': 'servidores-nos-eua/revenda-elite-5-eua',
    'elite-10': 'servidores-nos-eua/revenda-elite-10-eua',
    'elite-15': 'servidores-nos-eua/revenda-elite-15-eua',
    'elite-20': 'servidores-nos-eua/revenda-elite-20-eua',
    'elite-30': 'servidores-nos-eua/container-revenda-elite-30-eua',
    'elite-50': 'servidores-nos-eua/container-revenda-elite-50-eua',
  },
  europa: {
    one: 'servidores-na-europa/one-europa',
    three: 'servidores-na-europa/three-europa',
    duo: 'servidores-na-europa/duo-europa',
    'elite-5': 'servidores-na-europa/container-revenda-elite-5-europa',
    'elite-10': 'servidores-na-europa/container-revenda-elite-10-europa',
    'elite-15': 'servidores-na-europa/container-revenda-elite-15-europa',
    'elite-20': 'servidores-na-europa/container-revenda-elite-20-europa',
    'elite-30': 'servidores-na-europa/container-revenda-elite-30-europa',
    'elite-50': 'servidores-na-europa/container-revenda-elite-50-europa',
  },
}

/** Brasil leva o preço anual e o total do ano. EUA e Europa levam o preço anual
 *  por mês copiado do site atual (`anualForaBrasil`), que traz só Duo, One e
 *  Revenda Elite 5, 10, 15 e 20 — sem o total do ano, sem Three, Elite 30 e 50.
 *  Esses ficam sem preço anual e o card manda consultar a equipe. O link de
 *  checkout do anual é o mesmo do mensal (igual ao site atual). */
const planosHospedagem = (local: LocalHospedagem): Plano[] =>
  planosHospedagemBase.map((d) => ({
    nome: d.nome,
    persona: d.persona,
    precoMensal: d.mensal,
    ...(local === 'brasil'
      ? { precoAnualMes: d.anualMes, precoAnualTotal: d.anualTotal }
      : 'anualForaBrasil' in d
        ? { precoAnualMes: d.anualForaBrasil }
        : {}),
    ...('destaque' in d ? { destaque: d.destaque, selo: d.selo } : {}),
    grupos: gruposHospedagem(
      d.dominios,
      d.disco,
      local !== 'brasil' && 'cpuForaBrasil' in d ? d.cpuForaBrasil : d.cpu,
    ),
    href: loja(slugsHospedagem[local][d.chave]!),
  }))

const gruposContainer = (cpuRam: string, dominios: string, disco: string): Plano['grupos'] => [
  {
    titulo: 'Infraestrutura',
    itens: [cpuRam, dominios, disco, 'Tráfego ilimitado', 'Rede de 1GB Ethernet'],
  },
  {
    titulo: 'Segurança e performance',
    itens: [
      'Ambiente isolado',
      'Acelerador LiteSpeed Web',
      'Backup de 12 em 12 horas',
      'Certificado SSL grátis',
      'AntiSpam Pro',
    ],
  },
  {
    titulo: 'Ferramentas Turbo',
    itens: ['E-mail profissional', 'Instalador WordPress 1Click', 'Plugins premium originais grátis'],
  },
]

/** VPS: os cards não informam vCPU/RAM/disco porque o site atual também não
 *  informa — só o que a página atual afirma. */
const gruposVps = (...extras: string[]): Plano['grupos'] => [
  {
    titulo: 'Infraestrutura',
    itens: ['Acesso ROOT completo', ...extras, 'NVMe 4.0 em RAID10', 'Servidores na Ascenty em São Paulo'],
  },
]

const gruposVpsPadrao = (...extras: string[]): Plano['grupos'] => [
  ...gruposVps(...extras),
  {
    titulo: 'Segurança e performance',
    itens: ['Recursos dedicados', 'Monitoramento contínuo', 'Escalabilidade sob demanda'],
  },
]

/** Texto literal do cupom que o site atual exibe nos seis cards de VPS
 *  (confirmado como vigente pela equipe em 20/10/2026). */
const CUPOM_VPS = 'CUPOM 20% OFF: VPS20OFF'

const gruposApps: Plano['grupos'][number] = {
  titulo: 'Apps em 1 clique',
  itens: ['n8n', 'Typebot', 'Chatwoot', 'Mautic', '+50 aplicações'],
}

export const abasPlanos: AbaPlanos[] = [
  {
    id: 'hospedagem',
    familia: 'hospedagem',
    label: 'Hospedagem Brasil',
    labelCurto: 'Brasil',
    descricao: 'WordPress, WooCommerce, blogs e portais. Backup e plugins premium inclusos.',
    planos: planosHospedagem('brasil'),
  },
  {
    id: 'hospedagem-eua',
    familia: 'hospedagem',
    label: 'Hospedagem EUA',
    labelCurto: 'EUA',
    descricao: 'Os mesmos planos de hospedagem, com o servidor nos Estados Unidos.',
    planos: planosHospedagem('eua'),
  },
  {
    id: 'hospedagem-europa',
    familia: 'hospedagem',
    label: 'Hospedagem Europa',
    labelCurto: 'Europa',
    descricao: 'Os mesmos planos de hospedagem, com o servidor na Europa.',
    planos: planosHospedagem('europa'),
  },
  {
    id: 'container',
    familia: 'container',
    label: 'Container',
    descricao: 'Isolamento total e recursos exclusivos para projetos que não podem oscilar.',
    planos: [
      {
        nome: 'Container 4v50',
        persona: 'Para o projeto que passou do limite da hospedagem compartilhada.',
        precoMensal: 295.0,
        grupos: gruposContainer('4 vCPU e 6GB RAM DDR4', '10 domínios Blindagem Turbo', '50GB SSD NVMe Pro'),
        href: loja('container-especial/special-container-4v50-295'),
      },
      {
        nome: 'Container 4v100',
        persona: 'Para quem precisa do mesmo poder com o dobro de disco.',
        precoMensal: 395.0,
        grupos: gruposContainer('4 vCPU e 6GB RAM DDR4', '15 domínios Blindagem Turbo', '100GB SSD NVMe Pro'),
        href: loja('container-especial/special-container-4v100-395'),
      },
      {
        nome: 'Container 8v100',
        persona: 'Para loja e portal com pico de tráfego constante.',
        precoMensal: 545.0,
        destaque: true,
        selo: 'MAIS ESCOLHIDO',
        grupos: gruposContainer('8 vCPU e 12GB RAM DDR4', '25 domínios Blindagem Turbo', '100GB SSD NVMe Pro'),
        href: loja('container-especial/special-container-8v100-545'),
      },
      {
        nome: 'Container 16v100',
        persona: 'Para operação com dezenas de sites e uso pesado de CPU.',
        precoMensal: 1200.0,
        grupos: gruposContainer('16 vCPU e 16GB RAM DDR4', '50 domínios Blindagem Turbo', '100GB SSD NVMe'),
        href: loja('container-especial/container-especial-16v100'),
      },
      {
        nome: 'Container 24v100',
        persona: 'Para o maior porte: 100 domínios e 24 vCPU dedicados ao seu projeto.',
        precoMensal: 1950.0,
        grupos: gruposContainer('24 vCPU e 24GB RAM DDR4', '100 domínios Blindagem Turbo', '100GB SSD NVMe'),
        href: loja('container-especial/24v100'),
      },
    ],
  },
  {
    id: 'vps',
    familia: 'vps',
    label: 'Cloud / VPS',
    labelCurto: 'VPS',
    descricao: 'Acesso root, NVMe 4.0 em RAID10 e servidores na Ascenty em São Paulo.',
    nota: 'VPS e bare metal ainda não têm backup automático — ele está disponível nos planos de hospedagem, revenda, Container e e-mail. Plugins premium também não entram no VPS.',
    planos: [
      {
        nome: 'VPS NVMe Linux',
        persona: 'Para quem quer o servidor do próprio jeito, com root total.',
        precoMensal: 49.9,
        cupom: CUPOM_VPS,
        grupos: gruposVpsPadrao('Ubuntu, Debian, AlmaLinux, CentOS e mais'),
        href: loja('cloud-vps/vps-nvme-linux'),
      },
      {
        nome: 'VPS NVMe Windows Server',
        persona: 'Para quem precisa de Windows Server com acesso root total.',
        precoMensal: 92.4,
        cupom: CUPOM_VPS,
        grupos: [
          ...gruposVps('Sistema operacional Windows Server'),
          {
            titulo: 'Licença',
            itens: ['Licença do Windows não inclusa', 'Instalado por padrão em versão TRIAL'],
          },
        ],
        href: loja('cloud-vps/vps-nvme-windows-server'),
      },
      {
        nome: 'VPS com cPanel',
        persona: 'Para quem quer VPS sem abrir mão do painel que já conhece.',
        precoMensal: 64.9,
        cupom: CUPOM_VPS,
        destaque: true,
        selo: 'RECOMENDADO',
        grupos: [
          ...gruposVps('cPanel TurboCloud pré-configurado'),
          {
            titulo: 'Já vem instalado',
            itens: ['Firewall', 'NGINX', 'MariaDB', 'WordPress Toolkit'],
          },
        ],
        href: loja('cloud-vps/vps-nvme-com-cpanel-especial'),
      },
      {
        nome: 'VPS com CloudPanel',
        persona: 'Para quem prefere um painel leve e gratuito.',
        precoMensal: 67.4,
        cupom: CUPOM_VPS,
        grupos: gruposVpsPadrao('CloudPanel pré-instalado'),
        href: loja('cloud-vps/vps-nvme-com-cloudpanel'),
      },
      {
        nome: 'VPS com Cloudron',
        persona: 'Para automação: n8n, Typebot, Chatwoot e Mautic em 1 clique.',
        precoMensal: 82.4,
        cupom: CUPOM_VPS,
        grupos: [...gruposVps('Instalador automático Cloudron'), gruposApps],
        href: loja('cloud-vps/vps-nvme-com-instalador-automatico-cloudron'),
      },
      {
        nome: 'VPS com EasyPanel',
        persona: 'Para automação: n8n, Typebot, Chatwoot e Mautic em 1 clique.',
        precoMensal: 82.4,
        cupom: CUPOM_VPS,
        grupos: [...gruposVps('Instalador automático EasyPanel'), gruposApps],
        /* "eazypanel" é o slug que existe no WHMCS do site atual (sic). */
        href: loja('cloud-vps/vps-nvme-com-instalador-automatico-eazypanel'),
      },
    ],
  },
]

/** Menor preço mensal de uma família de planos — o "a partir de" das páginas. */
export const menorPreco = (familia: AbaPlanos['familia']) =>
  Math.min(
    ...abasPlanos
      .filter((aba) => aba.familia === familia)
      .flatMap((aba) => aba.planos.map((p) => p.precoMensal)),
  )

/** Cabeçalho da seção de planos (padrão do print). */
export const planosCabecalho = {
  selo: 'Você foca no seu negócio. A gente cuida do resto.',
  titulo1: 'Hospedagem de sites com performance',
  titulo2a: 'e suporte que',
  titulo2b: 'fazem a diferença.',
  texto:
    'Preço em real, sem surpresa de câmbio. A migração é feita pela nossa equipe e, na hospedagem de sites, na revenda e na VPS, você tem 7 dias de garantia (na VPS, exceto custos de terceiros, como licenças).',
} as const

export type Garantia = {
  icone: 'migracao' | 'uptime' | 'backup' | 'ssl' | 'suporte' | 'garantia'
  linha1: string
  linha2: string
}

/** Faixa de garantias abaixo dos cards. Só o que existe: o uptime é o do
 *  datacenter TIER III e o suporte segue a janela real de atendimento.
 *  Esta é a faixa de hospedagem e Container (os dois têm backup de 12 em 12h
 *  e SSL grátis em todos os planos). */
export const garantiasPlanos: readonly Garantia[] = [
  { icone: 'migracao', linha1: 'Migração grátis', linha2: 'feita pela nossa equipe' },
  { icone: 'uptime', linha1: `${provas.uptimeTier3} de uptime`, linha2: 'no datacenter TIER III' },
  { icone: 'backup', linha1: 'Backups automáticos', linha2: 'a cada 12 horas' },
  { icone: 'ssl', linha1: 'SSL grátis', linha2: 'em todos os planos' },
  { icone: 'suporte', linha1: 'Suporte humano', linha2: 'WhatsApp e ticket' },
]

/** A faixa depende da família da aba: VPS não tem backup automático e nenhum
 *  card de VPS promete SSL, então ela fica só com o que vale para VPS. */
export const garantiasVps: readonly Garantia[] = [
  ...garantiasPlanos.filter((g) => g.icone !== 'backup' && g.icone !== 'ssl'),
  /* Resposta oficial da equipe (20/10/2026): a garantia de 7 dias vale também na
     VPS, desde que não envolva custos de terceiros, como licenças (cPanel, Windows). */
  { icone: 'garantia', linha1: '7 dias de garantia', linha2: 'exceto custos de terceiros, como licenças' },
]

export const notaPlanos =
  'Valores mensais vigentes. Na hospedagem de sites o ciclo anual tem desconto e a cobrança é única; nos servidores EUA e Europa o anual existe só nos planos que mostram o valor, e nos demais a equipe informa. Aceitamos PIX, boleto e cartão.'

/* ------------------------------------------------------------------ */
/* S11 · CTA final                                                     */
/* ------------------------------------------------------------------ */

export const ctaFinal = {
  titulo1: 'Seu site,',
  titulo2: 'em modo Turbo.',
  /** Texto da hospedagem de sites: é lá que o site atual oferece os 7 dias de
   *  teste e a garantia de devolução. Outras páginas usam `ctaFinalGeral`. */
  texto:
    'Contrate em minutos ou deixe a migração com a gente. São 7 dias de teste e garantia de devolução — se não gostar, você não fica no prejuízo.',
  /* /planos/ e não '#planos': o CtaFinal aparece em toda página, inclusive
     em /contato/ e /hospedagem/, que não têm seção de planos. Âncora que não
     existe é botão morto. */
  primario: { label: 'Comece agora', href: links.planos },
  secundario: { label: 'Migrar grátis', href: links.whatsapp },
} as const

/** Fechamento sem promessa de teste ou devolução — para as páginas que não são
 *  de hospedagem de sites (hub, contato, OpenClaw, ferramentas). */
export const ctaFinalGeral = {
  texto: 'Contrate em minutos ou fale com a nossa equipe pelo WhatsApp: a gente ajuda a escolher o plano certo.',
} as const

/* ------------------------------------------------------------------ */
/* S12 · Footer                                                        */
/* ------------------------------------------------------------------ */

export const footer = {
  colunas: [
    {
      titulo: 'Hospedagens',
      itens: [
        { label: 'Sites institucionais', href: links.produtos.institucionais },
        { label: 'Lojas virtuais', href: links.produtos.woocommerce },
        { label: 'Blogs e portais', href: links.produtos.blogs },
        { label: 'Container', href: links.produtos.containers },
        { label: 'Cloud / VPS', href: links.produtos.cloudVps },
        { label: 'Servidor de e-mail', href: links.produtos.email },
        { label: 'OpenClaw VPS', href: links.produtos.openclaw },
      ],
    },
    // Ferramentas IA ocultas até o lançamento.
    {
      titulo: 'Empresa',
      itens: [
        { label: 'Estrutura', href: links.estrutura },
        { label: 'Planos', href: links.planos },
        { label: 'Contato', href: links.contato },
        { label: 'Calculadora de perda de tráfego', href: links.calculadora },
        { label: 'Programa de afiliados', href: links.afiliados },
        { label: 'Documentos e políticas', href: links.legal },
      ],
    },
    {
      titulo: 'Suporte',
      itens: [
        { label: 'Abrir ticket', href: links.ticket },
        { label: 'WhatsApp', href: links.whatsapp },
        { label: 'Faturas', href: links.faturas },
        { label: 'Central de ajuda', href: links.ajuda },
        { label: 'Status dos serviços', href: links.status },
      ],
    },
  ],
} as const

/* ------------------------------------------------------------------ */
/* Perguntas frequentes (SEO: FAQPage) — respostas do site atual        */
/* ------------------------------------------------------------------ */

export type Faq = { p: string; r: string }

/** FAQ geral, da home. Cada página de produto tem o seu, em `produtos.ts`. */
export const faq = [
  {
    p: 'O que significa hospedar em um datacenter TIER III?',
    r: 'Significa alta redundância, disponibilidade de 99,982% e sistemas avançados de segurança física e lógica. Nossa estrutura no Brasil fica na Ascenty, em São Paulo — o mesmo datacenter usado por grandes players como o Microsoft Azure.',
  },
  {
    p: 'Qual o horário do suporte?',
    r: 'O suporte por WhatsApp atende de segunda a sábado, das 8h à 1h. Aos domingos e fora desse horário, o atendimento é por ticket.',
  },
  {
    p: 'Como funciona a migração gratuita?',
    r: 'Nosso time cuida de todo o processo: arquivos, banco de dados, contas de e-mail e apontamento de DNS. Você aprova antes da virada, para que a transição aconteça sem interrupção.',
  },
  {
    p: 'Os planos incluem backup automático?',
    r: 'Os planos de hospedagem de sites, de revenda e de Container têm backup automático a cada 12 horas, e os planos de servidor de e-mail também têm backup automático. Planos de VPS e servidores bare metal ainda não contam com backup automatizado.',
  },
  {
    p: 'Quais são as formas de pagamento?',
    r: 'Cartão de crédito, boleto bancário e PIX.',
  },
  {
    p: 'Posso testar antes de contratar?',
    r: 'Sim. Na hospedagem de sites, na revenda e na VPS são 7 dias de garantia, com devolução do dinheiro caso você não fique satisfeito. Na VPS, a garantia vale desde que não envolva custos de terceiros, como licenças (cPanel, Windows). Container e servidor de e-mail não têm essa garantia.',
  },
] as const

/* ------------------------------------------------------------------ */
/* 404 — página não encontrada                                         */
/* ------------------------------------------------------------------ */

export const paginaErro = {
  titulo: 'Página não encontrada — Turbo Cloud',
  /** noindex no 404: essa URL não deve entrar em índice nenhum. */
  descricao:
    'Essa página não existe ou mudou de endereço. Veja os caminhos mais usados do site ou fale com a gente no WhatsApp.',
  eyebrow: 'Erro 404',
  h1: 'Essa página',
  h1Verde: 'se perdeu no espaço.',
  lead: 'O endereço não existe, mudou de lugar ou tem um erro de digitação. O que você procura provavelmente está num dos caminhos abaixo.',
  ctaPrimario: { label: 'Voltar para a home', href: '/' },
  ctaSecundario: { label: 'Falar no WhatsApp', href: links.whatsapp },
  atalhosTitulo: 'Talvez você procurasse',
  atalhos: [
    { label: 'Planos e preços', desc: 'Hospedagem, Container, VPS e e-mail', href: links.planos },
    { label: 'Hospedagem', desc: 'As seis soluções, lado a lado', href: links.hospedagem },
    { label: 'Sites institucionais', desc: 'WordPress com recursos dedicados', href: links.produtos.institucionais },
    { label: 'Lojas virtuais', desc: 'WooCommerce sem travar no pico', href: links.produtos.woocommerce },
    { label: 'Cloud / VPS', desc: 'Acesso root e recursos garantidos', href: links.produtos.cloudVps },
    { label: 'Contato', desc: 'WhatsApp, ticket e e-mail', href: links.contato },
  ],
  ajudaTitulo: 'Já é cliente?',
  ajuda: [
    { label: 'Área do cliente', href: links.areaCliente },
    { label: 'Abrir ticket', href: links.ticket },
    { label: 'Central de ajuda', href: links.ajuda },
    { label: 'Status dos serviços', href: links.status },
  ],
} as const

/* ==================================================================== */
/* PENDENTE — o que ainda precisa vir do time antes de publicar          */
/* ==================================================================== */

export const PENDENTE = [
  'Imagens do fim da página: astronauta (FAQ), planeta e foguete (CTA final) — os espaços já estão reservados.',
  'Confirmar o e-mail público (o site ofusca; o estudo indica ola@turbocloud.com.br).',
  'Transcrever por inteiro 4 avaliações longas do Google (Bianca Pizzatto, Guilherme Carvalho, Mauricio Bumba, Thiago Garcia) — estão truncadas na fonte.',
  'Fotos reais do time de suporte, se quiserem substituir os monogramas da seção S8.',
  'Autorização de uso de nome dos clientes nos depoimentos (são reviews públicos do Google, mas vale registrar).',
  'Número total de sites/clientes hospedados — o site não publica esse dado.',
  'Confirmar se o desconto de 8% no ciclo anual segue vigente (a página /planos/ é sazonal).',
  'Definir se a conversa da seção de suporte vira transcrição de um caso real (hoje é representação do fluxo).',
  'Programa de afiliados: a tabela de comissões publicada lista "Plano Elite 40", que não existe na tabela de planos (são 5, 10, 15, 20, 30 e 50). Confirmar se é o Elite 30 ou o Elite 50 — o valor foi mantido como está publicado.',
  'Sincronizar o package-lock: falta @emnapi/runtime e @emnapi/core no topo, e por isso npm ci quebra no Linux. O deploy usa npm install e não sente, mas qualquer CI com npm ci vai falhar. Precisa ser regenerado num Linux — regenerar no Windows não resolve.',
  'Turbo Deploy (/ferramentas-ia/turbo-deploy/): confirmar a URL pública de cadastro/login da plataforma. Enquanto isso, os CTAs levam ao WhatsApp para contratar e ativar o plano. O domínio técnico da plataforma não aparece no site de propósito.',
  'Turbo Deploy: confirmar checkout/cadastro, condições contratuais e horário de suporte. Oferta Start/Pro/Business e preços mensais adaptados da HAD Deploy a pedido do cliente em 10/09/2026. CTAs de contratação via WhatsApp.',
  'URL real de checkout/assinatura do Turbo Builder. Os botões "Assinar Starter/Agência" em /ferramentas-ia/turbo-builder/ apontam para o WhatsApp por enquanto — trocar pelo link de loja assim que o produto tiver checkout próprio no WHMCS.',
] as const
