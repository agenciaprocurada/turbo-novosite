/* ====================================================================== */
/* /ferramentas-ia/turbo-builder/                                         */
/* ====================================================================== */
/*  Turbo Builder: site criado por IA, publicado direto na hospedagem da
 *  Turbo Cloud. Rota própria, fora de `produtos.ts` e do `[slug].astro`,
 *  pelo mesmo motivo do OpenClaw — narrativa de produto específico, não o
 *  molde "por que escolher → planos → benefícios → segurança → FAQ".
 *
 *  Conteúdo e ordem das seções seguem a página do produto em produção
 *  (demo em apps-turbo-pages.uzj3vo.easypanel.host); só o visual muda para
 *  o padrão do site. Duas correções de sempre (regra 1 do CLAUDE.md):
 *  o uptime é o do datacenter TIER III (99,982%), não "99,9% garantido", e
 *  nenhum horário 24/7.
 *
 *  Sem link de checkout ainda: os botões "Assinar" apontam para o WhatsApp
 *  enquanto o produto não tem página de loja própria no WHMCS. Ver
 *  `PENDENTE` em `site.ts`. */

import { links, provas } from './site'
import type { Plano } from './site'

/** Fora do `as const` de propósito: `PricingCard` espera `Plano[]` mutável
 *  (mesmo motivo de `abasPlanos` em `site.ts` não usar `as const`). */
const planosTurboBuilder: Plano[] = [
  {
    nome: 'Starter',
    persona: 'Para colocar suas primeiras páginas no ar.',
    precoMensal: 49.9,
    grupos: [
      {
        titulo: 'Incluso no plano',
        itens: [
          '300 créditos de IA por mês',
          'Aproximadamente 4 landing pages geradas por IA',
          'Host brasileiro Turbo Cloud com SSL',
          'Editor com IA e histórico de versões',
          'Otimização mobile e SEO automática',
        ],
      },
    ],
    href: links.whatsapp,
  },
  {
    nome: 'Agência',
    persona: 'Para agências e alto volume de páginas.',
    precoMensal: 89.9,
    destaque: true,
    selo: 'MAIS POPULAR',
    grupos: [
      {
        titulo: 'Incluso no plano',
        itens: [
          '4.000 créditos de IA por mês',
          'Aproximadamente 57 landing pages geradas por IA',
          'Host brasileiro Turbo Cloud com SSL',
          'Editor com IA e histórico de versões',
          'Ideal para gerenciar páginas de vários clientes',
        ],
      },
    ],
    href: links.whatsapp,
  },
]

export const turboBuilder = {
  titulo: 'Turbo Builder — sites criados por IA, publicados na Turbo Cloud',
  descricao:
    'Descreva seu negócio em uma frase e o Turbo Builder cria um site completo — textos, design e páginas — já publicado na hospedagem de alta performance da Turbo Cloud.',
  eyebrow: 'Turbo Builder · powered by Turbo Cloud',
  h1: 'Seu site no ar em minutos.',
  h1Verde: 'Escrito por você, construído por IA.',
  lead: 'Descreva seu negócio em uma frase e o Turbo Builder cria um site completo, com textos, design e páginas, já publicado na hospedagem de alta performance da Turbo Cloud.',
  cta: { label: 'Criar meu site agora', href: '#planos' },
  ctaSecundario: { label: 'Ver como funciona', href: '#como-funciona' },

  /** As três provas que acompanham cada CTA da página. */
  provas: [
    { icone: 'escudo', texto: 'E-mail profissional incluso' },
    { icone: 'cadeado', texto: 'Ambiente seguro e livre de vírus' },
    { icone: 'bandeira', texto: 'Host brasileiro' },
  ],

  /** Mockup do editor ao lado do H1. */
  demo: {
    dominio: 'cafeteria.turbobuilder.site',
    prompt: 'site para uma cafeteria com cardápio e WhatsApp',
    botaoGerar: 'Gerar',
    negocio: 'Café Aurora',
    slogan: 'Cafés especiais e brunch artesanal',
    botaoSite: 'Chamar no WhatsApp',
    itens: [
      { nome: 'Espresso', preco: 'R$ 8' },
      { nome: 'Croissant', preco: 'R$ 12' },
      { nome: 'Bolo do dia', preco: 'R$ 14' },
    ],
    status: 'Publicado',
    selo: 'ao vivo no editor',
    chips: ['SSL ativo', 'Host brasileiro'],
    nota: 97,
  },

  /** Faixa de quatro métricas logo abaixo do hero. */
  metricas: [
    { icone: 'velocimetro', valor: '-5', unidade: 'min', texto: 'do texto ao site publicado' },
    { icone: 'escudo', valor: '100%', unidade: 'blindado', texto: 'seu site seguro e livre de vírus' },
    { icone: 'codigo', valor: '0', unidade: '', texto: 'linhas de código escritas por você' },
    { icone: 'bandeira', valor: 'Host', unidade: 'brasileiro', texto: 'carregamento em milissegundos' },
  ],

  comoFunciona: {
    eyebrow: 'Como funciona',
    titulo1: 'Três passos entre a sua ideia',
    titulo2: 'e um site no ar.',
    passos: [
      {
        icone: 'documento',
        titulo: 'Descreva seu negócio',
        texto: 'Conte em poucas frases o que você faz: nome, ramo, estilo. A IA entende o contexto e o público.',
      },
      {
        icone: 'brilho',
        titulo: 'A IA monta o site',
        texto:
          'Textos, imagens, cores e páginas gerados na hora, sob medida. Ajuste qualquer detalhe pedindo em português.',
      },
      {
        icone: 'foguete',
        titulo: 'Publique na Turbo Cloud',
        texto:
          'Um clique e o site vai ao ar na hospedagem de alta performance, com SSL, host brasileiro e domínio configurados.',
      },
    ],
  },

  performance: {
    eyebrow: 'Performance',
    titulo1: 'Sites bonitos e',
    titulo2: 'rápidos de carregar.',
    texto:
      'A IA cuida do design, a Turbo Cloud cuida da velocidade. Cada site sai pronto, hospedado no Brasil, chegando ao PageSpeed do Google com notas verdes, sem você precisar otimizar nada.',
    itens: [
      'Nota verde de desempenho no celular, onde seus clientes estão',
      'SEO 100: pronto para ser encontrado no Google',
      'Acessibilidade cuidada em cada página gerada',
    ],
    dominio: 'cafeteria.turbobuilder.site',
    dispositivos: ['Celular', 'Computador'],
    notas: [
      { label: 'Desempenho', valor: 97 },
      { label: 'Acessibilidade', valor: 96 },
      { label: 'Práticas recomendadas', valor: 95 },
      { label: 'SEO', valor: 100 },
    ],
    rodape: 'medido com Google PageSpeed Insights · site criado com Turbo Builder + Turbo Cloud',
  },

  publico: {
    selo: 'Feito para todos os tipos de negócios',
    titulo1: 'O Turbo Builder foi criado',
    titulo2: 'para impulsionar o seu sucesso.',
    texto:
      'O Turbo Builder é a solução completa para você ou seu negócio ter um site profissional no ar, feito em minutos, sem depender de serviços caros.',
    destaque: 'Você no comando, impulsionando o seu próprio sucesso.',
    pilares: [
      { icone: 'nuvem', rotulo: 'Infraestrutura', titulo: 'Turbo Cloud', texto: 'Alta performance e estabilidade' },
      { icone: 'pessoa', rotulo: 'Suporte dedicado', titulo: 'por você', texto: 'Atendimento humano e rápido' },
      { icone: 'raio', rotulo: 'Site', titulo: 'em modo turbo', texto: 'Carregamento em milissegundos' },
    ],
    idealTitulo: 'Ideal para:',
    idealTexto: 'Qualquer negócio que busca mais performance, segurança e resultados.',
    segmentos: [
      { icone: 'talheres', nome: 'Restaurantes' },
      { icone: 'bolo', nome: 'Confeitarias' },
      { icone: 'chapeu', nome: 'Estúdios' },
      { icone: 'livro', nome: 'Academias' },
      { icone: 'balanca', nome: 'Advocacias' },
      { icone: 'maleta', nome: 'Consultorias' },
      { icone: 'predio', nome: 'Imobiliárias' },
      { icone: 'tesoura', nome: 'Salões de beleza' },
      { icone: 'mais', nome: 'E muito mais' },
    ],
    remate: 'E também sites para cafeterias e muitos outros negócios!',
    principal: {
      selo: 'E o principal de tudo…',
      titulo1: 'No Turbo Builder você tem',
      tituloVerde: 'tudo',
      titulo2: 'para o seu negócio ter sucesso no digital, incluindo:',
      itens: [
        { icone: 'arroba', titulo: 'E-mail profissional personalizado', texto: 'com @oseudominio.com.br' },
        { icone: 'enviar', titulo: 'E-mails transacionais', texto: 'para ações de resposta automáticas' },
      ],
    },
  },

  recursos: {
    eyebrow: 'Recursos',
    titulo1: 'Tudo que o seu negócio precisa,',
    titulo2: 'sem complicação.',
    texto: 'Ferramentas poderosas que simplificam sua vida e aceleram seus resultados.',
    itens: [
      {
        icone: 'brilho',
        titulo: 'Criação por IA',
        texto: 'Descreva e pronto: textos, layout e imagens gerados sob medida para o seu negócio, em português.',
      },
      {
        icone: 'raio',
        titulo: 'Velocidade Turbo Cloud',
        texto: 'Hospedagem de alta performance embutida em todos os planos. Seu site carrega em milissegundos.',
      },
      {
        icone: 'codigo',
        titulo: 'Sem código',
        texto: 'Nada de HTML, plugins ou webdesigner. Você foca no negócio, a IA cuida do site.',
      },
      {
        icone: 'cadeado',
        titulo: 'Domínio e SSL',
        texto: 'Conecte seu domínio próprio com certificado SSL grátis e automático, em poucos cliques.',
      },
      {
        icone: 'celular',
        titulo: 'Mobile e SEO',
        texto: 'Sites responsivos e otimizados para o Google automaticamente, em qualquer dispositivo.',
      },
      {
        icone: 'historico',
        titulo: 'Histórico de versões',
        texto: 'Toda alteração fica salva. Não gostou do resultado? Volte para qualquer versão com um clique.',
      },
    ],
  },

  editor: {
    eyebrow: 'Editor com IA',
    titulo1: 'Edite qualquer coisa',
    titulo2: 'conversando.',
    texto:
      '"Deixe o topo mais escuro", "adicione depoimentos", "troque o botão por Chamar no WhatsApp". A IA entende e aplica em segundos, e você mantém o controle total.',
    itens: [
      'Comandos em português, do seu jeito',
      'Visualize em desktop, tablet e celular',
      'Não gostou? Restaure qualquer versão anterior',
    ],
    assistente: 'Assistente IA',
    comando: 'Deixe o topo mais escuro e adicione um botão de WhatsApp',
    resposta: 'Feito! Atualizei o topo e adicionei o botão de WhatsApp.',
    status: 'Página gerada',
    restaurar: 'Restaurar',
    placeholder: 'Peça uma alteração…',
    rodapePreview: 'rodapé · contato · redes sociais',
  },

  funcionalidades: {
    eyebrow: 'Funcionalidades',
    titulo1: 'Tudo o que o Turbo Builder',
    titulo2: 'faz por você.',
    texto: 'Do primeiro rascunho com IA ao lead chegando no seu e-mail: tudo isso já vem incluso.',
    grupos: [
      {
        icone: 'brilho',
        titulo: 'Criação com IA',
        itens: [
          'Assistente guiado ou criação livre por texto',
          'Galeria de modelos com pré-visualização navegável',
          'Sua marca: logotipo, cores e fotos do negócio',
          '3 níveis de geração: Simples, Pro e Avançado',
          'Custo estimado em créditos antes de confirmar',
        ],
      },
      {
        icone: 'lapis',
        titulo: 'Editor visual',
        itens: [
          'Edição por chat em linguagem natural',
          'Clique e edite qualquer elemento da página',
          'Mova, duplique ou exclua seções sem regenerar',
          'Desfazer/refazer e histórico de versões',
          'Pré-visualização em desktop, tablet e celular',
        ],
      },
      {
        icone: 'foguete',
        titulo: 'Publicação e domínios',
        itens: [
          'Publicação em 1 clique',
          'Raiz, subpasta, subdomínio ou domínio próprio',
          'Link de prévia para o cliente aprovar antes',
          'Aviso de links quebrados antes de ir ao ar',
          'DNS assistido, com registro pronto para copiar',
        ],
      },
      {
        icone: 'email',
        titulo: 'Leads no seu e-mail',
        itens: [
          'Formulários que enviam cada lead direto para o seu e-mail',
          'SMTP próprio por página, com teste de envio',
          'Proteção antispam integrada',
          'E-mail de resposta detectado automaticamente',
        ],
      },
      {
        icone: 'paginas',
        titulo: 'Sites com várias páginas',
        itens: [
          'Páginas internas: Sobre, Serviços, Contato…',
          'Menu de navegação gerado automaticamente',
          'Topo e rodapé compartilhados entre as páginas',
          'SEO individual por página',
          'Conteúdo próprio em cada página, sem duplicar',
        ],
      },
      {
        icone: 'codigo',
        titulo: 'Controle total',
        itens: [
          'Painel de uso dos seus créditos de IA',
          'Veja e edite o código-fonte quando quiser',
          'Exporte como HTML',
          'Importe HTML pronto sem gastar créditos',
          'Salvamento automático, sem perder trabalho',
        ],
      },
    ],
  },

  modelos: {
    eyebrow: 'Modelos prontos',
    titulo1: 'Comece de um modelo',
    titulo2: 'ou deixe a IA criar do zero.',
    texto: 'Escolha um modelo pronto e personalize em minutos ou descreva sua ideia e veja a IA criar para você.',
    itens: [
      { icone: 'talheres', nome: 'Cafeteria', tagline: 'cardápio e WhatsApp', categoria: 'alimentação', tom: 'roxo' },
      { icone: 'maleta', nome: 'Estúdio', tagline: 'portfólio e orçamentos', categoria: 'serviços', tom: 'verde' },
      { icone: 'tesoura', nome: 'Barbearia', tagline: 'cortes e preços', categoria: 'beleza', tom: 'escuro' },
      { icone: 'pessoa', nome: 'Consultoria', tagline: 'serviços e contato', categoria: 'profissional', tom: 'lima' },
    ],
  },

  painel: {
    eyebrow: 'Painel de controle',
    titulo1: 'Suas páginas, seus números,',
    titulo2: 'um só painel.',
    texto: 'Publique, acompanhe e edite tudo do mesmo lugar, sem plugins nem planilhas.',
    itens: [
      'Status de cada página: publicada, rascunho e visitas',
      'Nota de performance do Google medida em cada página',
      'Domínios e análises integrados ao painel',
      'Créditos de IA: gere no modo econômico ou alta qualidade',
    ],
    menu: ['Minhas páginas', 'Modelos', 'Domínios', 'Análises'],
    tituloTela: 'Minhas páginas',
    resumo: '2 páginas · 1 publicada · 1 em rascunho',
    stats: [
      { valor: 2, label: 'total de páginas' },
      { valor: 1, label: 'publicada' },
      { valor: 1, label: 'em rascunho' },
    ],
    pagina: { nome: 'Pimpão Festas', status: 'Publicada', nota: 93 },
    creditosRotulo: 'Créditos de IA',
    creditos: '291 créditos',
  },

  planos: {
    eyebrow: 'Planos',
    titulo1: 'Escolha seu plano e',
    titulo2: 'comece a criar.',
    texto: 'Todos os planos incluem host brasileiro da Turbo Cloud e SSL. Cancele quando quiser.',
    nota: {
      titulo: 'Ambiente 100% seguro e confiável',
      texto: 'Seus dados sempre protegidos com SSL e backups diários.',
    },
    itens: planosTurboBuilder,
  },

  infra: {
    eyebrow: 'Por dentro da Turbo Cloud',
    titulo1: 'A performance de quem já hospeda',
    titulo2: 'milhares de sites.',
    texto:
      'O Turbo Builder nasce dentro da Turbo Cloud, referência em hospedagem de alta performance. Seu site já vem com a infraestrutura que mantém tudo rápido e no ar, sem você configurar nada. E, como as páginas são 100% estáticas, não existem plugins desatualizados nem brechas de invasão: sem malware, sem sustos.',
    selos: [
      { icone: 'latencia', titulo: 'Host brasileiro', texto: 'integrado a todos os planos' },
      { icone: 'escudo', titulo: 'SSL grátis', texto: 'emitido e renovado sozinho' },
      { icone: 'backup', titulo: 'Backups diários', texto: 'inclusos, sem configurar' },
      { icone: 'velocidade', titulo: provas.uptimeTier3, texto: 'de uptime no datacenter TIER III' },
    ],
  },

  faq: [
    {
      p: 'Preciso saber programar?',
      r: 'Não. Descreva o que você quer em português e a IA constrói tudo. Se quiser ajustar, é só pedir ou arrastar elementos no editor visual.',
    },
    {
      p: 'O site já vem hospedado?',
      r: 'Sim. Todos os planos incluem a hospedagem de alta performance da Turbo Cloud, com host brasileiro, SSL grátis e backups automáticos.',
    },
    {
      p: 'Posso usar meu próprio domínio?',
      r: 'Sim. Conecte seu domínio em poucos cliques, ou use um subdomínio gratuito do Turbo Builder para começar.',
    },
    {
      p: 'Consigo mudar o site depois de publicado?',
      r: 'Sempre. Edite quando quiser conversando com a IA ou pelo editor visual. As mudanças entram no ar na hora.',
    },
    {
      p: 'Preciso me preocupar com invasões, vírus ou malware?',
      r: 'Não. Sites gerados pelo Turbo Builder são 100% estáticos: sem painel de administração exposto, sem plugins de terceiros para atualizar e sem banco de dados para invadir — as portas de entrada mais comuns de ataque em sites tradicionais. Somado ao SSL e aos backups diários da Turbo Cloud, seu site fica no ar e blindado.',
    },
    {
      p: 'Posso cancelar quando quiser?',
      r: 'Sim. Os planos são flexíveis e você cancela quando quiser, sem multa nem fidelidade.',
    },
  ],

  ctaFinal: {
    titulo1: 'Seu próximo site',
    titulo2: 'começa com uma frase.',
    texto: 'Descreva sua ideia e veja o Turbo Builder construir e publicar o seu site em minutos.',
  },
} as const
