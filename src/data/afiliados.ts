/* ====================================================================== */
/* /afiliados/ — programa de afiliados                                    */
/* ====================================================================== */
/*  Arquivo próprio porque a página tem conteúdo demais para caber junto
 *  com estrutura e legal: sete faixas de comissão, quatro vantagens, seis
 *  perguntas de FAQ e três passos.
 *
 *  Tudo saiu de turbocloud.com.br/afiliados/, com UMA correção:
 *
 *  A página atual diz "backup rotineiro de 6 em 6 horas". O resto do site
 *  inteiro — tabela de planos, FAQ e as seis páginas de produto — diz 12 em
 *  12. Vale o número da tabela de planos, que é o que o cliente contrata.
 *  A divergência está na lista PENDENTE para o time resolver na fonte.
 *
 *  Duas coisas mantidas como estão publicadas, mesmo parecendo estranhas:
 *
 *  1. "Plano Elite 40" aparece na tabela de comissões E na resposta sobre
 *     produtos elegíveis. Não existe Elite 40 na tabela de planos (são 5,
 *     10, 15, 20, 30 e 50). Como aparece duas vezes na mesma página, não é
 *     erro de digitação solto — pode ser nome interno do programa. Está no
 *     PENDENTE.
 *  2. "30x mais rápido que um HD comum" não contradiz o "até 6x maior que
 *     SSDs tradicionais" das páginas de produto: a base de comparação é
 *     outra (HD comum × SSD). Os dois podem ser verdade.
 */

const LOJA_AFILIADOS = 'https://app.turbocloud.com.br/affiliates.php'
const TERMOS_AFILIADOS =
  'https://app.turbocloud.com.br/knowledgebase/72/Termos-de-Servicos-do-Programa-de-Afiliados.html'

export const afiliados = {
  titulo: 'Programa de afiliados — comissão recorrente — Turbo Cloud',
  descricao:
    'Indique a Turbo Cloud e receba comissão recorrente todo mês, de R$ 10 a R$ 45 por plano ativo. Cookie de 90 dias, saque a partir de R$ 50, painel próprio e gerente de contas.',
  eyebrow: 'Programa de afiliados',
  h1: 'Aumente seu faturamento recorrente',
  h1Verde: 'sendo um Astronauta Turbo.',
  lead: 'Comissão mensal fixa por plano assinado, enquanto o cliente ficar. Quanto mais você indica, maior o ganho recorrente — e não há teto.',
  badges: ['Comissão recorrente', 'Sem limite de indicações', 'Gerente de contas'],
  cta: { label: 'Quero ser um Astronauta Turbo', href: LOJA_AFILIADOS },
  termos: { label: 'Termos do programa de afiliação', href: TERMOS_AFILIADOS },

  /* ------------------------------ comissões ------------------------------ */
  comissoes: {
    eyebrow: 'Melhores comissões do mercado',
    titulo1: 'Comissão mensal fixa,',
    titulo2: 'por plano assinado.',
    texto:
      'Você recebe todo mês, enquanto o cliente que você indicou seguir ativo. Não é comissão só da primeira venda: quanto mais indicar, maiores os ganhos recorrentes.',
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

  /* -------------------------------- painel ------------------------------- */
  painel: {
    eyebrow: 'Dashboard',
    titulo1: 'Painel',
    titulo2: 'Afiliado Astronauta.',
    texto:
      'Consulte seus ganhos a qualquer momento. Além do acesso fácil ao seu link, você acompanha o saldo acumulado, solicita ou confere saques e tem o panorama da sua carteira de clientes ativos.',
    itens: [
      'Seu link de afiliado sempre à mão',
      'Saldo acumulado, a qualquer momento',
      'Solicitar e conferir saques',
      'Panorama da carteira de clientes ativos',
    ],
  },

  /* ------------------------------- gerente ------------------------------- */
  gerente: {
    eyebrow: 'Controle de bordo',
    titulo1: 'Seu gerente',
    titulo2: 'sempre perto de você.',
    texto:
      'A sua indicação é muito importante, por isso você tem contato direto com um gerente de contas — para pedir suporte premium e aproveitar todas as vantagens do programa de afiliação.',
  },

  /* ---------------------------- como funciona ---------------------------- */
  comoFunciona: {
    eyebrow: 'Como funciona',
    titulo1: 'Sistema simplificado',
    titulo2: 'de afiliação.',
    passos: [
      {
        titulo: 'Torne-se um afiliado Turbo Cloud',
        texto:
          'Se você já é cliente ativo da Turbo Cloud, basta preencher o cadastro gratuito para receber seu link de afiliado e começar as indicações.',
      },
      {
        titulo: 'Receba por indicação efetivada',
        texto:
          'Não há limite de quanto você pode ganhar indicando nossa hospedagem, diretamente ou através de banners e anúncios.',
      },
      {
        titulo: 'Aumente seu faturamento mensal',
        texto:
          'Use seu link de afiliado para oferecer os planos aos seus clientes. Quanto mais planos vender, mais comissão recebe todo mês.',
      },
    ],
  },

  /* ------------------------------ vantagens ------------------------------ */
  /* Os quatro argumentos de produto que o afiliado usa para vender. */
  vantagens: {
    eyebrow: 'Alta performance',
    titulo1: 'Vantagens da Turbo Cloud',
    titulo2: 'que você leva junto.',
    itens: [
      {
        icone: 'velocidade',
        titulo: 'Otimização Turbo Cache',
        texto:
          'Servidores otimizados pelos melhores profissionais e com as melhores tecnologias, para oferecer a máxima performance.',
      },
      {
        icone: 'backup',
        titulo: 'Projeto sempre seguro',
        texto:
          'Política de backup rotineiro a cada 12 horas, com estrutura robusta de armazenamento que permite recuperar os dados rapidamente.',
      },
      {
        icone: 'nvme',
        titulo: 'Armazenamento 30x mais rápido',
        texto:
          'Todos os servidores têm armazenamento em NVMe, com gravação de dados 30x mais rápida que um HD comum.',
      },
      {
        icone: 'cpu',
        titulo: 'Últimas tecnologias',
        texto:
          'Seu cliente fica num servidor sempre atualizado, com as melhores tecnologias para hospedar o site.',
      },
    ],
  },

  /* --------------------------------- FAQ --------------------------------- */
  faq: [
    {
      p: 'O que devo fazer em caso de dúvidas?',
      r: 'Ao se tornar um afiliado Turbo Cloud, você terá o contato de um gerente de conta para acompanhar e auxiliar em todas as suas dúvidas durante a jornada. Além disso, conta com conteúdos exclusivos no nosso canal do YouTube.',
    },
    {
      p: 'Qualquer pessoa pode se inscrever para ser um afiliado?',
      r: 'O programa é exclusivo para clientes ativos de qualquer plano Turbo Cloud.',
    },
    {
      p: 'Como posso promover meu link de afiliado para fazer vendas?',
      r: 'Você pode enviar o link diretamente para o cliente por mensagem ou e-mail, e também divulgar em site, blog ou redes sociais. Para que uma venda seja rastreada e registrada para você, o clique no link de afiliado é obrigatório.',
    },
    {
      p: 'Como a Turbo Cloud sabe quem compra pela minha indicação?',
      r: 'Quando alguém clica no seu link de afiliado, recebe um cookie de rastreio válido por 90 dias. A compra feita por esse usuário é registrada para você — exceto se ele já for cliente Turbo Cloud ou se tiver desabilitado os cookies no navegador, o que impede o rastreio.',
    },
    {
      p: 'Como funciona o pagamento das comissões?',
      r: 'Você pode solicitar a retirada assim que o saldo atingir o mínimo de R$ 50,00 em comissões aprovadas. Também dá para usar o saldo de comissões para abater faturas de qualquer produto Turbo Cloud vinculado à mesma conta do programa de afiliação.',
    },
    {
      p: 'Quais produtos da Turbo Cloud são elegíveis no programa?',
      r: 'Os planos de hospedagem One, Elite 5, Elite 10, Elite 15, Elite 20, Elite 40 e Elite 50. A compra apenas de produtos adicionais, ou de outros serviços não citados acima, não gera comissão.',
    },
  ],

  /* ------------------------------ fechamento ----------------------------- */
  fechamento: {
    titulo1: 'Vamos decolar juntos?',
    titulo2: 'Venha ser um Astronauta Turbo.',
    texto:
      'Garanta sua renda recorrente de forma segura e mensal, indicando uma hospedagem que se defende sozinha.',
  },
} as const
