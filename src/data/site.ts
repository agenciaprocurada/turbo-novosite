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
  /* Ainda no WordPress — entram na onda 2 e 3 do mapa de páginas.
     Enquanto forem absolutos, apontam para o site antigo de propósito:
     link quebrado é pior que link para a versão velha. */
  calculadora: 'https://turbocloud.com.br/calculadora-perda-de-trafego/',
  estrutura: 'https://turbocloud.com.br/estrutura/',

  /* Já reconstruídas aqui */
  planos: '/planos/',
  contato: '/contato/',
  hospedagem: '/hospedagem/',
  produtos: {
    institucionais: '/hospedagem/sites-institucionais/',
    woocommerce: '/hospedagem/lojas-virtuais-woocommerce/',
    blogs: '/hospedagem/blogs-e-portais-de-conteudo/',
    containers: '/hospedagem/containers/',
    cloudVps: '/hospedagem/cloud-vps/',
    email: '/hospedagem/servidor-para-e-mail/',
  },
} as const

/** Carrinho do WHMCS. Cada plano leva direto para o seu produto — antes todos
 *  apontavam para a página /planos/, o que dava uma volta a mais entre "quero
 *  esse" e o checkout. Slugs conferidos em app.turbocloud.com.br.
 *  O card "VPS com Cloudron ou EasyPanel" cobre dois produtos, então vai para
 *  a categoria em vez de escolher um dos dois por conta. */
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
  ttfb: '18 ms',
  uptimeTier3: '99,982%',
  backup: '12/12h',
  notaGoogle: '5,0',
  avaliacoesGoogle: 1366,
  pluginsPremium: '+150',
  pluginsGratuitos: '25.000',
  apps1Click: '470+',
  anosDeCasa: new Date().getFullYear() - 2013,
} as const

/** S9 · faixa de números. Ícone + número + rótulo curto. */
export const stats = [
  { icone: 'uptime', valor: '99,982%', label: 'Uptime do datacenter' },
  { icone: 'latencia', valor: '18 ms', label: 'Latência média' },
  { icone: 'backup', valor: '12 / 12h', label: 'Backups diários' },
  { icone: 'estrela', valor: '5,0', sufixo: '★', label: 'Nota no Google' },
] as const

/** S9 · Servidores no Brasil */
export const brasil = {
  eyebrow: 'Servidores no Brasil',
  titulo1: 'Servidores no Brasil,',
  titulo2: 'perto de quem te visita.',
  texto: 'Menor latência, mais velocidade e mais conversões para seu site e sua loja.',
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
        desc: 'Acesso root e +100 apps em 1 clique',
        href: links.produtos.cloudVps,
      },
      {
        label: 'Servidor de e-mail',
        desc: 'E-mail separado do site',
        href: links.produtos.email,
      },
    ],
  },
  { label: 'Estrutura', href: links.estrutura },
  { label: 'Planos', href: links.planos },
  { label: 'Contato', href: links.contato },
] as const

/* ------------------------------------------------------------------ */
/* S2 · Hero                                                           */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: marca.tagline,
  titulo1: 'Seu site no modo Turbo.',
  titulo2: 'Sem sair do Brasil.',
  subLead: 'Do WordPress ao WooCommerce:',
  sub: `memória e processamento dedicados, TTFB de ${provas.ttfb} e suporte humano no WhatsApp. Migração grátis, feita pela nossa equipe.`,
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
  grupos: { titulo: string; itens: string[] }[]
  href: string
}

export type AbaPlanos = {
  id: string
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

export const abasPlanos: AbaPlanos[] = [
  {
    id: 'hospedagem',
    label: 'Hospedagem de sites',
    labelCurto: 'Sites',
    descricao: 'WordPress, WooCommerce, blogs e portais. Backup e plugins premium inclusos.',
    planos: [
      {
        nome: 'One',
        persona: 'Para quem está colocando o primeiro site no ar.',
        precoMensal: 35.9,
        precoAnualMes: 32.9,
        precoAnualTotal: 394.9,
        grupos: gruposHospedagem('1 domínio Blindagem Turbo', '15GB SSD NVMe', '2 vCPU e 5GB DDR4'),
        href: loja('alta-performance/one'),
      },
      {
        nome: 'Three',
        persona: 'Para agência e freela que toca mais de um cliente no mesmo painel.',
        precoMensal: 49.9,
        precoAnualMes: 45.74,
        precoAnualTotal: 548.88,
        destaque: true,
        selo: 'MAIS ESCOLHIDO',
        grupos: gruposHospedagem('3 domínios em 1 cPanel', '50GB SSD NVMe', '2 vCPU e 5GB DDR4'),
        href: loja('alta-performance/three'),
      },
      {
        nome: 'Duo',
        persona: 'Para quem investe em tráfego pago e precisa de CPU reservada em cada domínio.',
        precoMensal: 64.9,
        precoAnualMes: 54.0,
        precoAnualTotal: 648.0,
        grupos: gruposHospedagem(
          '2 domínios Blindagem Turbo',
          '20GB SSD NVMe',
          '2 vCPU e 5GB DDR4 por domínio',
        ),
        href: loja('alta-performance/duo'),
      },
      {
        nome: 'Revenda Elite 5',
        persona: 'Para quem hospeda os sites dos próprios clientes e quer margem.',
        precoMensal: 100.0,
        precoAnualMes: 91.67,
        precoAnualTotal: 1100.04,
        grupos: gruposHospedagem(
          '5 domínios Blindagem Turbo',
          '50GB SSD NVMe',
          '2 vCPU e 5GB DDR4 por domínio',
        ),
        href: loja('alta-performance/revenda-elite-5'),
      },
    ],
  },
  {
    id: 'container',
    label: 'Container',
    descricao: 'Isolamento total e recursos exclusivos para projetos que não podem oscilar.',
    planos: [
      {
        nome: 'Container 4v50',
        persona: 'Para o projeto que passou do limite da hospedagem compartilhada.',
        precoMensal: 295.0,
        grupos: [
          {
            titulo: 'Infraestrutura',
            itens: [
              '4 vCPU e 6GB RAM DDR4',
              '10 domínios Blindagem Turbo',
              '50GB SSD NVMe Pro',
              'Tráfego ilimitado',
              'Rede de 1GB Ethernet',
            ],
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
        ],
        href: loja('container-especial/special-container-4v50-295'),
      },
      {
        nome: 'Container 4v100',
        persona: 'Para quem precisa do mesmo poder com o dobro de disco.',
        precoMensal: 395.0,
        grupos: [
          {
            titulo: 'Infraestrutura',
            itens: [
              '4 vCPU e 6GB RAM DDR4',
              '15 domínios Blindagem Turbo',
              '100GB SSD NVMe Pro',
              'Tráfego ilimitado',
              'Rede de 1GB Ethernet',
            ],
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
        ],
        href: loja('container-especial/special-container-4v100-395'),
      },
      {
        nome: 'Container 8v100',
        persona: 'Para loja e portal com pico de tráfego constante.',
        precoMensal: 545.0,
        destaque: true,
        selo: 'MAIS ESCOLHIDO',
        grupos: [
          {
            titulo: 'Infraestrutura',
            itens: [
              '8 vCPU e 12GB RAM DDR4',
              '25 domínios Blindagem Turbo',
              '100GB SSD NVMe Pro',
              'Tráfego ilimitado',
              'Rede de 1GB Ethernet',
            ],
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
        ],
        href: loja('container-especial/special-container-8v100-545'),
      },
      {
        nome: 'Container 16v100',
        persona: 'Para operação com dezenas de sites e uso pesado de CPU.',
        precoMensal: 1200.0,
        grupos: [
          {
            titulo: 'Infraestrutura',
            itens: [
              '16 vCPU e 16GB RAM DDR4',
              '50 domínios Blindagem Turbo',
              '100GB SSD NVMe',
              'Tráfego ilimitado',
              'Rede de 1GB Ethernet',
            ],
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
        ],
        href: loja('container-especial/container-especial-16v100'),
      },
    ],
  },
  {
    id: 'vps',
    label: 'Cloud / VPS',
    descricao: 'Acesso root, NVMe 4.0 em RAID10 e servidores na Ascenty em São Paulo.',
    nota: 'VPS e bare metal ainda não têm backup automático — ele é exclusivo dos planos de hospedagem e revenda. Plugins premium também não entram no VPS.',
    planos: [
      {
        nome: 'VPS NVMe Linux',
        persona: 'Para quem quer o servidor do próprio jeito, com root total.',
        precoMensal: 49.9,
        grupos: [
          {
            titulo: 'Infraestrutura',
            itens: [
              'Acesso ROOT completo',
              'Ubuntu, Debian, AlmaLinux, CentOS e mais',
              'NVMe 4.0 em RAID10',
              'Servidores na Ascenty em São Paulo',
            ],
          },
          {
            titulo: 'Segurança e performance',
            itens: ['Recursos dedicados', 'Monitoramento 24h', 'Escalabilidade sob demanda'],
          },
        ],
        href: loja('cloud-vps/vps-nvme-linux'),
      },
      {
        nome: 'VPS com cPanel',
        persona: 'Para quem quer VPS sem abrir mão do painel que já conhece.',
        precoMensal: 64.9,
        destaque: true,
        selo: 'RECOMENDADO',
        grupos: [
          {
            titulo: 'Infraestrutura',
            itens: [
              'Acesso ROOT completo',
              'cPanel TurboCloud pré-configurado',
              'NVMe 4.0 em RAID10',
              'Servidores na Ascenty em São Paulo',
            ],
          },
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
        grupos: [
          {
            titulo: 'Infraestrutura',
            itens: [
              'Acesso ROOT completo',
              'CloudPanel pré-instalado',
              'NVMe 4.0 em RAID10',
              'Servidores na Ascenty em São Paulo',
            ],
          },
          {
            titulo: 'Segurança e performance',
            itens: ['Recursos dedicados', 'Monitoramento 24h', 'Escalabilidade sob demanda'],
          },
        ],
        href: loja('cloud-vps/vps-nvme-com-cloudpanel'),
      },
      {
        nome: 'VPS com Cloudron ou EasyPanel',
        persona: 'Para automação: n8n, Typebot, Chatwoot e Mautic em 1 clique.',
        precoMensal: 82.4,
        grupos: [
          {
            titulo: 'Infraestrutura',
            itens: [
              'Acesso ROOT completo',
              'Instalador automático Cloudron ou EasyPanel',
              'NVMe 4.0 em RAID10',
              'Servidores na Ascenty em São Paulo',
            ],
          },
          {
            titulo: 'Apps em 1 clique',
            itens: ['n8n', 'Typebot', 'Chatwoot', 'Mautic', '+50 aplicações'],
          },
        ],
        href: loja('cloud-vps'),
      },
    ],
  },
]

/** Cabeçalho da seção de planos (padrão do print). */
export const planosCabecalho = {
  selo: 'Você foca no seu negócio. A gente cuida do resto.',
  titulo1: 'Hospedagem de sites com performance',
  titulo2a: 'e suporte que',
  titulo2b: 'fazem a diferença.',
  texto:
    'Preço em real, sem surpresa de câmbio. A migração é feita pela nossa equipe e você tem 7 dias de teste.',
} as const

/** Faixa de garantias abaixo dos cards. Só o que existe: o uptime é o do
 *  datacenter TIER III e o suporte segue a janela real de atendimento. */
export const garantiasPlanos = [
  { icone: 'migracao', linha1: 'Migração grátis', linha2: 'feita pela nossa equipe' },
  { icone: 'uptime', linha1: `${provas.uptimeTier3} de uptime`, linha2: 'no datacenter TIER III' },
  { icone: 'backup', linha1: 'Backups automáticos', linha2: 'a cada 12 horas' },
  { icone: 'ssl', linha1: 'SSL grátis', linha2: 'em todos os planos' },
  { icone: 'suporte', linha1: 'Suporte humano', linha2: 'WhatsApp e ticket' },
] as const

export const notaPlanos =
  'Valores mensais vigentes em turbocloud.com.br. No ciclo anual há 8% de desconto e a cobrança é única. Aceitamos PIX, boleto e cartão.'

/* ------------------------------------------------------------------ */
/* S11 · CTA final                                                     */
/* ------------------------------------------------------------------ */

export const ctaFinal = {
  titulo1: 'Seu site,',
  titulo2: 'em modo Turbo.',
  texto:
    'Contrate em minutos ou deixe a migração com a gente. São 7 dias de teste e garantia de devolução — se não gostar, você não fica no prejuízo.',
  primario: { label: 'Comece agora', href: '#planos' },
  secundario: { label: 'Migrar grátis', href: links.whatsapp },
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
      ],
    },
    {
      titulo: 'Empresa',
      itens: [
        { label: 'Estrutura', href: links.estrutura },
        { label: 'Planos', href: links.planos },
        { label: 'Contato', href: links.contato },
        { label: 'Calculadora de perda de tráfego', href: links.calculadora },
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
    r: 'Os planos de hospedagem de sites e de revenda têm backup automático a cada 12 horas. Planos de VPS e servidores bare metal ainda não contam com backup automatizado.',
  },
  {
    p: 'Quais são as formas de pagamento?',
    r: 'Cartão de crédito, boleto bancário e PIX.',
  },
  {
    p: 'Posso testar antes de contratar?',
    r: 'Sim. São 7 dias de teste grátis e garantia de devolução do dinheiro caso você não fique satisfeito.',
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
] as const
