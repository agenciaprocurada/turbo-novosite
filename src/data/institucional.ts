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
  lead: 'Não somos apenas rápidos. Servidores no Brasil, em datacenter TIER III, com recursos dedicados e um time que atende no WhatsApp. Seu site merece a velocidade Turbo.',
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
      titulo: '+150 plugins premium',
      texto:
        'Acesso a uma biblioteca com mais de 25.000 plugins gratuitos e 3 opções premium sem custo adicional, para personalizar e otimizar seu site.',
    },
    {
      icone: 'suporte',
      titulo: 'Suporte premium',
      texto:
        'Time de especialistas no WhatsApp das 8h à 1h, de segunda a sábado, e por ticket todos os dias. Atendimento humano, sem robô no meio.',
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
      { rotulo: 'Monitoramento', valor: '24 horas' },
    ],
  },

  seguranca: {
    eyebrow: 'Segurança e monitoramento',
    titulo1: 'Seu site em boas mãos,',
    titulo2: 'sempre.',
    texto:
      'Monitoramos os servidores 24 horas por dia e mantemos backups automáticos a cada 12 horas. A tecnologia de proteção identifica e resolve vulnerabilidade antes de virar problema.',
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

/* --------------------------------------------------------------------- */
/* /afiliados/                                                            */
/* --------------------------------------------------------------------- */
/*  ATENÇÃO: a tabela de comissões do site atual lista "Plano Elite 40",
 *  que não existe na tabela de planos (são 5, 10, 15, 20, 30 e 50). Mantive
 *  como está publicado, porque inventar não é opção — mas está na lista
 *  PENDENTE para o time confirmar se é o Elite 30 ou o Elite 50. */

const LOJA_AFILIADOS = 'https://app.turbocloud.com.br/affiliates.php'

export const afiliados = {
  titulo: 'Programa de afiliados — comissão recorrente — Turbo Cloud',
  descricao:
    'Indique a Turbo Cloud e receba comissão recorrente todo mês, de R$ 10 a R$ 45 por plano ativo. Painel próprio, gerente de contas e sem limite de indicações.',
  eyebrow: 'Programa de afiliados',
  h1: 'Aumente seu faturamento recorrente',
  h1Verde: 'sendo um Astronauta Turbo.',
  lead: 'Comissão mensal fixa por plano assinado, enquanto o cliente ficar. Quanto mais você indica, maior o ganho recorrente — e não há teto.',
  badges: ['Comissão recorrente', 'Sem limite de indicações', 'Gerente de contas'],
  cta: { label: 'Quero ser um Astronauta Turbo', href: LOJA_AFILIADOS },
  termos: {
    label: 'Termos do programa de afiliação',
    href: 'https://app.turbocloud.com.br/knowledgebase/72/Termos-de-Servicos-do-Programa-de-Afiliados.html',
  },

  comissoes: {
    eyebrow: 'Melhores comissões do mercado',
    titulo1: 'Comissão mensal fixa,',
    titulo2: 'por plano assinado.',
    texto:
      'Você recebe todo mês, enquanto o cliente que você indicou seguir ativo. Não é comissão de primeira venda.',
    tabela: [
      { plano: 'Plano One', valor: 10 },
      { plano: 'Elite 5', valor: 20 },
      { plano: 'Elite 10', valor: 25 },
      { plano: 'Elite 15', valor: 30 },
      { plano: 'Elite 20', valor: 35 },
      { plano: 'Elite 40', valor: 40 },
      { plano: 'Elite 50', valor: 45 },
    ],
    nota: 'Valores por venda, por mês, vigentes em turbocloud.com.br.',
  },

  comoFunciona: {
    eyebrow: 'Como funciona',
    titulo1: 'Três passos',
    titulo2: 'e nada de burocracia.',
    passos: [
      {
        titulo: 'Torne-se um afiliado',
        texto:
          'Se você já é cliente ativo da Turbo Cloud, basta preencher o cadastro gratuito para receber seu link de afiliado.',
      },
      {
        titulo: 'Receba por indicação efetivada',
        texto:
          'Não há limite de quanto você pode ganhar, indicando direto ou através de banners e anúncios.',
      },
      {
        titulo: 'Aumente seu faturamento mensal',
        texto:
          'Use o link para oferecer os planos aos seus clientes. Quanto mais planos vender, mais comissão recebe todo mês.',
      },
    ],
  },

  vantagens: [
    {
      icone: 'monitor',
      titulo: 'Painel Afiliado Astronauta',
      texto:
        'Acompanhe saldo acumulado, solicite saque e veja o panorama da sua carteira de clientes ativos a qualquer momento.',
    },
    {
      icone: 'suporte',
      titulo: 'Gerente sempre por perto',
      texto:
        'Contato direto com seu gerente de contas, com suporte premium e as vantagens do programa.',
    },
    {
      icone: 'velocidade',
      titulo: 'Um produto que se defende',
      texto:
        'Servidores no Brasil, recursos dedicados e suporte humano. Você indica algo que segura a recomendação.',
    },
  ],
} as const

/* --------------------------------------------------------------------- */
/* /legal/                                                                */
/* --------------------------------------------------------------------- */
/*  Os documentos NÃO são copiados para cá de propósito. Eles vivem no
 *  WHMCS, que é onde o time mantém. Duplicar texto jurídico em dois
 *  sistemas é como surgiram as DUAS políticas de privacidade diferentes que
 *  estavam no ar: a do WordPress (genérica, sem citar LGPD, citando Google
 *  AdSense) e a do WHMCS (que cita LGPD). Uma fonte só, sempre. */

const KB = 'https://app.turbocloud.com.br/knowledgebase'

export const legal = {
  titulo: 'Documentos e políticas — Turbo Cloud',
  descricao:
    'Termos de serviço, política de privacidade, tratamento de dados, cookies e demais documentos da Turbo Cloud, na versão oficial e sempre atualizada.',
  eyebrow: 'Documentos',
  h1: 'Termos, políticas',
  h1Verde: 'e tratamento de dados.',
  lead: 'Todo documento abaixo abre a versão oficial, mantida na Central de Ajuda. É uma fonte só — assim nenhuma versão fica para trás.',

  grupos: [
    {
      titulo: 'Contrato e uso do serviço',
      itens: [
        { label: 'Termos de Serviços', href: `${KB}/54/Termos-de-Servicos.html` },
        { label: 'Política de Utilização', href: `${KB}/52/Politica-de-Utilizacao.html` },
        { label: 'Conteúdo Ilegal', href: `${KB}/50/Conteudo-Ilegal.html` },
        { label: 'Política de E-mail e Spam', href: `${KB}/51/Politica-de-E-Mail-Spam.html` },
        { label: 'Termo de Ativação de Plugins', href: `${KB}/58/Termo-de-Ativacao-de-Plugins.html` },
      ],
    },
    {
      titulo: 'Privacidade e dados',
      itens: [
        { label: 'Política de Privacidade', href: `${KB}/56/Politica-de-Privacidade.html` },
        { label: 'Tratamento de Dados', href: `${KB}/55/Tratamento-de-Dados.html` },
        { label: 'Política de Cookies', href: `${KB}/53/Politica-de-Cookies.html` },
        { label: 'Termo de Confidencialidade', href: `${KB}/57/Termo-de-Confidencialidade.html` },
      ],
    },
    {
      titulo: 'Programa de afiliados',
      itens: [
        {
          label: 'Termos de Serviços do Programa de Afiliados',
          href: `${KB}/72/Termos-de-Servicos-do-Programa-de-Afiliados.html`,
        },
      ],
    },
  ],

  rodape: {
    titulo: 'Dúvida sobre algum documento?',
    texto: 'Fale com a gente antes de contratar — a resposta vem de gente, não de robô.',
    cta: { label: 'Chamar no WhatsApp', href: links.whatsapp },
  },
} as const

/* --------------------------------------------------------------------- */
/* /hospedagem/openclaw/                                                  */
/* --------------------------------------------------------------------- */
/*  Não entra em `produtos.ts` de propósito: o template de produto é
 *  "por que escolher → planos → benefícios → segurança → FAQ", e esta página
 *  argumenta de outro jeito — explica o que é o OpenClaw, mostra por que VPS
 *  genérica falha e só então apresenta o plano. Forçar no molde estragaria o
 *  texto, que é o melhor do site atual. */

export const openclaw = {
  titulo: 'OpenClaw VPS — infraestrutura para agentes de IA — Turbo Cloud',
  descricao:
    'VPS dedicada para rodar OpenClaw em produção: CPU e RAM garantidas, SSD NVMe, acesso root e execução contínua. Sem overselling, sem queda silenciosa em tarefa longa.',
  eyebrow: 'OpenClaw VPS',
  h1: 'Infraestrutura para a IA',
  h1Verde: 'que realmente faz.',
  lead: 'Plano exclusivo para quem roda OpenClaw em produção. Não é VPS adaptada nem ambiente genérico: é infraestrutura pensada desde o início para agente autônomo, memória persistente e execução contínua.',
  badges: ['CPU dedicada', 'SSD NVMe', 'Execução 24/7'],
  cta: { label: 'Começar agora', href: 'https://app.turbocloud.com.br/store/cloud-vps/vps-nvme-com-openclaw' },

  oQueE: {
    eyebrow: 'O poder da IA',
    titulo1: 'O que é',
    titulo2: 'o OpenClaw.',
    texto:
      'O OpenClaw é a IA que executa tarefa real. Limpa a caixa de entrada, envia e-mail, cuida da agenda, faz check-in de voo, coleta dado e roda rotina inteira — a partir do chat que você já usa. Nada de painel extra, nada de interface nova para aprender.',
  },

  capacidades: [
    {
      icone: 'plugue',
      titulo: 'Qualquer app de chat',
      texto: 'Funciona no WhatsApp, Telegram, Discord, Slack, Signal ou iMessage.',
    },
    {
      icone: 'caixa',
      titulo: 'Memória persistente',
      texto: 'Lembra de você: preferência, contexto, decisão e histórico.',
    },
    {
      icone: 'seo',
      titulo: 'Controle de navegador',
      texto: 'Navega na web, preenche formulário, extrai dado e interage com qualquer site.',
    },
    {
      icone: 'custom',
      titulo: 'Acesso completo ao sistema',
      texto: 'Lê e grava arquivo, executa comando de shell, roda script e automatiza fluxo.',
    },
    {
      icone: 'ferramentas',
      titulo: 'Skills e plugins',
      texto: 'Use skills da comunidade ou crie as suas. O OpenClaw evolui as próprias extensões.',
    },
  ],

  problema: {
    eyebrow: 'Atenção',
    titulo1: 'Por que VPS comum',
    titulo2: 'falha em produção.',
    texto:
      'OpenClaw não é chatbot. Ele mantém processo contínuo, guarda estado, consome CPU de verdade e exige disco rápido. VPS genérica até inicia — e quebra depois.',
    itens: [
      'Overselling de CPU',
      'Disco lento degradando a memória persistente',
      'Queda silenciosa em tarefa longa',
      'Custo imprevisível ao escalar',
      'Gargalo difícil de diagnosticar',
    ],
    remate: 'Este plano existe porque isso não é aceitável.',
  },

  recebe: {
    eyebrow: 'A solução',
    titulo1: 'O que você recebe',
    titulo2: 'no plano OpenClaw VPS.',
    itens: [
      'VPS Cloud dedicada, sem overselling',
      'CPU e RAM garantidas',
      'SSD NVMe de alta performance',
      'Baixa latência e alta estabilidade',
      'Ideal para múltiplos agentes simultâneos',
      'Execução longa sem degradação',
      'Ambiente limpo com acesso root',
      'Pronto para Docker, Node e Python',
    ],
    remate: 'Você controla tudo. A infraestrutura não vira gargalo.',
  },

  paraQuem: {
    eyebrow: 'Para você',
    titulo1: 'Para quem este plano',
    titulo2: 'faz sentido.',
    itens: [
      'OpenClaw em produção',
      'Automação crítica que não pode parar',
      'Uso contínuo com memória persistente',
      'Múltiplos agentes rodando ao mesmo tempo',
      'Projeto que precisa de previsibilidade',
      'Quem quer escalar sem refazer infra',
    ],
    remate:
      'Se você só quer testar, qualquer hospedagem simples serve. Se você quer operar, este plano é o mínimo.',
  },
} as const
