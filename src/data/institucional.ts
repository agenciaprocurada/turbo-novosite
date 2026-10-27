/* ====================================================================== */
/* Páginas institucionais — /estrutura/, /afiliados/, /legal/             */
/* ====================================================================== */
/*  Texto tirado das páginas atuais de turbocloud.com.br, com as mesmas
 *  correções de sempre: "suporte 24/7" vira a janela real (8h–1h, seg–sáb,
 *  + ticket) e o uptime é o do datacenter TIER III.
 *
 *  Duas coisas do site atual que NÃO foram trazidas, de propósito:
 *
 *  1. A tabela "Comparativo com Concorrentes". Ela afirma uptime, backup e
 *     suporte de dois concorrentes anônimos, sem fonte e sem data. Não dá
 *     para verificar e é a Turbo afirmando coisa sobre terceiro — vai contra
 *     a regra 1 do CLAUDE.md e é risco à toa. Se quiserem retomar, precisa
 *     nomear os concorrentes e datar a coleta.
 *  2. O "Uptime Garantido 99,9%" que aparecia nessa tabela. Contradiz o
 *     99,982% do TIER III que o resto do site publica.
 */

import { provas, links, marca } from './site'

/* --------------------------------------------------------------------- */
/* /estrutura/                                                            */
/* --------------------------------------------------------------------- */

export const estrutura = {
  titulo: 'Estrutura e datacenter — quem é a Turbo Cloud',
  descricao: `Datacenter TIER III no Brasil, no mesmo prédio de grandes players. Servidores monitorados, backup a cada 12 horas e ${provas.uptimeTier3} de disponibilidade. Conheça a estrutura da Turbo Cloud.`,
  eyebrow: 'Estrutura',
  h1: 'Chega de site lento,',
  h1Verde: 'somos a Turbo Cloud.',
  lead: 'Não somos apenas rápidos. Servidores no Brasil, em datacenter TIER III, com recursos dedicados e um time que atende de verdade. Seu site merece a velocidade Turbo.',
  badges: [`Desde ${marca.desde}`, 'Datacenter TIER III', 'Servidores no Brasil'],

  proposito: {
    eyebrow: 'Compromisso',
    titulo: 'Por que existimos',
    texto:
      'Missão, visão e valores guiam cada passo que damos para entregar o melhor serviço de hospedagem do Brasil.',
    itens: [
      {
        rotulo: 'Missão',
        texto:
          'Elevar a experiência de hospedagem, proporcionando alta performance, segurança e suporte incomparável para nossos clientes.',
      },
      {
        rotulo: 'Visão',
        texto:
          'Ser referência em hospedagem no Brasil, reconhecida por excelência técnica, inovação e impacto positivo no mercado digital.',
      },
      {
        rotulo: 'Valores',
        texto:
          'Compromisso com a qualidade, suporte, transparência, inovação contínua e respeito pelos nossos clientes.',
      },
    ],
  },

  diferenciais: [
    {
      icone: 'latencia',
      titulo: 'Servidores no Brasil',
      texto:
        'Hospedagem mais rápida e estável, com tempo de resposta menor para quem visita o seu site. E seus dados ficam dentro das fronteiras nacionais.',
    },
    {
      icone: 'ferramentas',
      titulo: 'Plugins premium grátis',
      texto:
        'Acesso a uma biblioteca com mais de 25.000 plugins gratuitos e 3 plugins premium originais, à sua escolha, sem custo adicional, para personalizar e otimizar seu site.',
    },
    {
      icone: 'suporte',
      titulo: 'Suporte premium',
      texto:
        'Time de especialistas das 8h à 1h, de segunda a sábado, e por ticket todos os dias. Atendimento humano pela equipe.',
    },
    {
      icone: 'seo',
      titulo: 'Mais visibilidade e conversão',
      texto:
        'Reduza o tempo de carregamento do site e potencialize o resultado das suas campanhas de marketing digital.',
    },
  ],

  datacenter: {
    eyebrow: 'Estabilidade e alta performance',
    titulo1: 'Brasil, EUA e Europa.',
    titulo2: 'Só escolher o local.',
    texto:
      'Infraestrutura posicionada em pontos estratégicos, com links de altíssima qualidade. A estrutura no Brasil fica no mesmo datacenter de grandes players como o Microsoft Azure — certificação TIER III, com redundância, segurança física e estabilidade.',
    selos: [
      { rotulo: 'Certificação', valor: 'TIER III' },
      { rotulo: 'Disponibilidade', valor: provas.uptimeTier3 },
      { rotulo: 'Backup', valor: 'a cada 12h' },
      { rotulo: 'Monitoramento', valor: 'Contínuo' },
    ],
  },

  seguranca: {
    eyebrow: 'Segurança e monitoramento',
    titulo1: 'Seu site em boas mãos,',
    titulo2: 'sempre.',
    texto:
      'Monitoramos os servidores continuamente e mantemos backups automáticos a cada 12 horas. A tecnologia de proteção identifica e resolve vulnerabilidade antes de virar problema.',
  },

  painel: {
    eyebrow: 'Gerenciamento',
    titulo1: 'Painel fácil',
    titulo2: 'e intuitivo.',
    texto: 'Administrar sua hospedagem e seus sites é simples com o painel da Turbo Cloud.',
    itens: [
      {
        icone: 'custom',
        titulo: 'Painel intuitivo',
        texto: 'Todas as ferramentas que você precisa num lugar só.',
      },
      {
        icone: 'velocidade',
        titulo: 'Gerenciamento simplificado',
        texto: 'Instale aplicações com um clique e acompanhe o desempenho do site com facilidade.',
      },
      {
        icone: 'cpu',
        titulo: 'Personalização avançada',
        texto: 'Controle total sobre as configurações do seu ambiente.',
      },
    ],
  },

  garantia: {
    eyebrow: 'Sem risco',
    titulo1: 'Teste sem risco,',
    titulo2: 'com garantia de satisfação.',
    itens: [
      { titulo: '7 dias de teste grátis', texto: 'Experimente a hospedagem sem compromisso.' },
      {
        titulo: 'Garantia de devolução',
        texto: 'Não ficou satisfeito? Você recebe o dinheiro de volta.',
      },
    ],
    remate: 'Com a Turbo Cloud, você não fica no prejuízo.',
  },
} as const

/* O conteúdo de /afiliados/ mora em `src/data/afiliados.ts` — é grande
   demais para caber aqui junto com estrutura e legal. */

/* --------------------------------------------------------------------- */
/* /legal/                                                                */
/* --------------------------------------------------------------------- */
/*  Os textos dos dez documentos vivem em `src/data/legal/<slug>.html` e a página
 *  /legal/ os renderiza inteiros. Origem: Central de Ajuda (WHMCS), categoria
 *  "Contratos TurboCloud" — https://app.turbocloud.com.br/knowledgebase/17/Contratos-TurboCloud
 *  Copiados literalmente em 21/10/2026 por `scripts/importa-legal.mjs` (que
 *  documenta o que muda na marcação). Para atualizar um texto, rodar o script
 *  e conferir o `git diff` — a fonte oficial continua sendo o WHMCS, e cada
 *  documento na página traz o link para ela.
 *
 *  Por que a política de privacidade é a do WHMCS e não a do WordPress: havia
 *  DUAS no ar. A do WordPress (turbocloud.com.br/politica-de-privacidade/, de
 *  17/07/2025) é genérica, não cita LGPD e fala de Google AdSense/DoubleClick,
 *  que este site não usa. A do WHMCS cita a LGPD, os direitos do titular e o
 *  canal de privacidade. Esta página mostra só a do WHMCS. */

const KB = 'https://app.turbocloud.com.br/knowledgebase'

/** Data da cópia dos textos (mostrada na página). */
export const legalCopiadoEm = '21/10/2026'

export const legal = {
  titulo: 'Documentos e políticas — Turbo Cloud',
  descricao:
    'Termos de serviço, política de privacidade, tratamento de dados, cookies e demais documentos da Turbo Cloud, com o texto completo.',
  eyebrow: 'Documentos',
  h1: 'Termos, políticas',
  h1Verde: 'e tratamento de dados.',
  lead: 'O texto completo de cada documento está nesta página, com índice. Cada um traz o link da versão oficial na Central de Ajuda.',

  grupos: [
    {
      titulo: 'Contrato e uso do serviço',
      itens: [
        { label: 'Termos de Serviços', slug: 'termos-de-servicos', fonte: `${KB}/54/Termos-de-Servicos.html` },
        { label: 'Política de Utilização', slug: 'politica-de-utilizacao', fonte: `${KB}/52/Politica-de-Utilizacao.html` },
        { label: 'Conteúdo Ilegal', slug: 'conteudo-ilegal', fonte: `${KB}/50/Conteudo-Ilegal.html` },
        { label: 'Política de E-mail e Spam', slug: 'politica-de-email-e-spam', fonte: `${KB}/51/Politica-de-E-Mail-Spam.html` },
        { label: 'Termo de Ativação de Plugins', slug: 'termo-de-ativacao-de-plugins', fonte: `${KB}/58/Termo-de-Ativacao-de-Plugins.html` },
      ],
    },
    {
      titulo: 'Privacidade e dados',
      itens: [
        { label: 'Política de Privacidade', slug: 'politica-de-privacidade', fonte: `${KB}/56/Politica-de-Privacidade.html` },
        { label: 'Tratamento de Dados', slug: 'tratamento-de-dados', fonte: `${KB}/55/Tratamento-de-Dados.html` },
        { label: 'Política de Cookies', slug: 'politica-de-cookies', fonte: `${KB}/53/Politica-de-Cookies.html` },
        { label: 'Termo de Confidencialidade', slug: 'termo-de-confidencialidade', fonte: `${KB}/57/Termo-de-Confidencialidade.html` },
      ],
    },
    {
      titulo: 'Programa de afiliados',
      itens: [
        {
          label: 'Termos de Serviços do Programa de Afiliados',
          slug: 'termos-do-programa-de-afiliados',
          fonte: `${KB}/72/Termos-de-Servicos-do-Programa-de-Afiliados.html`,
        },
      ],
    },
  ],

  rodape: {
    titulo: 'Dúvida sobre algum documento?',
    texto: 'Fale com a gente antes de contratar — a resposta vem da equipe.',
    cta: { label: 'Falar com a equipe', href: links.equipe },
  },
} as const
