/* ====================================================================== */
/* /ferramentas-ia/turbo-deploy/                                          */
/* ====================================================================== */
/*  Turbo Deploy: plataforma de publicação e hospedagem para quem cria com
 *  IA. Rota própria em "Ferramentas IA", irmã do Turbo Builder.
 *
 *  Os recursos vêm de `SALES-ANALYSIS.md` (08/09/2026). Aquele documento é
 *  cauteloso de propósito, e esta página respeita cada limite dele:
 *
 *  - só recurso marcado "Implementado" entra como promessa;
 *  - nada de "zero downtime", "nunca cai", "qualquer linguagem", "ilimitado",
 *    "sem cartão", "24/7", "10x mais rápido" — nenhum número de performance,
 *    porque não existe medição publicada;
 *  - oferta e preços adaptados da HAD Deploy por solicitação do cliente em
 *    10/09/2026: https://hadcloud.com.br/had-deploy;
 *  - sem depoimento, sem cliente e sem caso "real": o que aparece é ilustração
 *    e está rotulado assim.
 *
 *  Os "12 caminhos" são os frameworks/runtimes com contrato no produto:
 *  Next.js, Astro, React estático, Node.js, Express, NestJS, Laravel, Python,
 *  Go, Rust, .NET e Dockerfile próprio. */

import { links, marca, provas } from './site'
import type { IconeBeneficio } from './produtos'


export const turboDeploy = {
  titulo: 'Turbo Deploy — publique o projeto que você criou com IA',
  descricao:
    'Publique sites, aplicações e APIs pelo GitHub, pela CLI ou pelo MCP do Turbo Deploy. Conecte seu agente de IA para publicar, consultar logs e fazer rollback.',
  eyebrow: 'Turbo Deploy · Ferramentas IA',
  h1: 'Seu projeto saiu da IA.',
  h1Verde: 'Agora, coloque no ar.',
  lead:
    'Publique sites, aplicações e APIs sem montar a infraestrutura do zero. O Turbo Deploy tem MCP: conecte seu agente de IA para publicar, consultar logs e fazer rollback. Tudo com um painel em português para acompanhar.',
  cta: { label: 'Escolher meu plano', href: '#planos' },
  ctaSecundario: { label: 'Ver como funciona', href: '#como-funciona' },
  /** Chips do hero: só fato, sem adjetivo. */
  badges: ['MCP para agentes de IA', 'Domínio próprio + HTTPS', 'Histórico e rollback'],
  disponibilidade: 'A partir de R$ 19,90/mês. Cobrança em reais, por plano.',
  atalhos: [
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Formas de publicar', href: '#caminhos' },
    { label: 'Por dentro do painel', href: '#painel' },
    { label: 'Tecnologias', href: '#tecnologias' },
    { label: 'Planos', href: '#planos' },
    { label: 'Dúvidas', href: '#duvidas' },
  ],

  /** As três provas curtas que acompanham cada CTA. */
  provas: [
    { icone: 'cadeado', texto: 'HTTPS no seu domínio' },
    { icone: 'escudo', texto: 'Verificação antes de trocar a versão' },
    { icone: 'bandeira', texto: 'Painel em português' },
  ],

  /** Mockup do hero: o fluxo de uma publicação, passo a passo. */
  demo: {
    projeto: 'meu-app',
    dominio: 'meu-app.com.br',
    origem: 'GitHub · main · a1b2c3d',
    framework: 'Next.js',
    etapas: [
      { rotulo: 'Código recebido', detalhe: 'GitHub · main · a1b2c3d', estado: 'ok' },
      { rotulo: 'Framework detectado', detalhe: 'Next.js · Dockerfile gerado', estado: 'ok' },
      { rotulo: 'Imagem construída', detalhe: 'build concluído', estado: 'ok' },
      { rotulo: 'Verificação de saúde', detalhe: 'respondeu antes da troca de tráfego', estado: 'ok' },
      { rotulo: 'Publicado', detalhe: 'https://meu-app.com.br', estado: 'ativo' },
    ],
    chips: ['HTTPS ativo', 'Rollback disponível'],
    legenda: 'Ilustração do fluxo de publicação. Etapas e tempos variam por projeto.',
  },

  /** Faixa de fatos abaixo do hero. Nenhum número de desempenho: só contagem
   *  do que o produto tem. */
  fatos: [
    { icone: 'ramificacao', valor: '3', unidade: 'formas de publicar', texto: 'GitHub, CLI ou agente de IA conectado' },
    { icone: 'camadas', valor: '11', unidade: 'tecnologias', texto: 'frameworks e runtimes + Dockerfile próprio' },
    { icone: 'cadeado', valor: 'HTTPS', unidade: '', texto: 'no endereço da plataforma ou no seu domínio' },
    { icone: 'brilho', valor: 'MCP', unidade: 'para agentes de IA', texto: 'publicação, logs e rollback pelo seu agente' },
  ],

  comoFunciona: {
    eyebrow: 'Como funciona',
    titulo1: 'Você cuida da ideia.',
    titulo2: 'A gente prepara a publicação.',
    passos: [
      {
        icone: 'enviar',
        titulo: 'Comece em Projetos → Novo projeto',
        texto:
          'Crie seu projeto pelo painel e conecte o repositório. Prefere trabalhar pelo terminal? Use a CLI. Seu agente de IA também pode publicar o Git conectado via MCP.',
      },
      {
        icone: 'engrenagem',
        titulo: 'Configure Variáveis e Domínios',
        texto:
          'Abra o projeto, adicione as variáveis exigidas pela aplicação e configure seu domínio. Você também pode começar pelo endereço da plataforma.',
      },
      {
        icone: 'foguete',
        titulo: 'Publique e acompanhe',
        texto:
          'Clique em Publicar. Veja as etapas e os logs em Publicações, confirme qual versão está no ar e acompanhe a resposta do site em Disponibilidade.',
      },
    ],
  },

  caminhos: {
    eyebrow: 'Três caminhos de entrada',
    titulo1: 'Publique pelo fluxo',
    titulo2: 'que você já usa.',
    texto:
      'Não precisa mudar a forma como você trabalha. O Turbo Deploy entra na etapa em que o projeto já funciona no seu computador e precisa chegar aos usuários.',
    itens: [
      {
        icone: 'github',
        titulo: 'GitHub',
        resumo: 'Conecte repositório e branch. Cada push publica uma nova versão.',
        pontos: ['Deploy automático por push', 'Escolha da branch e da pasta raiz', 'Histórico de versões por commit'],
        requisito: 'Um repositório no GitHub conectado ao projeto.',
      },
      {
        icone: 'terminal',
        titulo: 'CLI',
        resumo: 'Publique a pasta local, sem GitHub. Também roda em CI, sem interação.',
        pontos: ['Publica o diretório atual', 'Arquivos .env ficam de fora do envio', 'Autenticação por variável de ambiente para CI'],
        requisito: 'A CLI instalada e autenticada na sua conta.',
      },
      {
        icone: 'brilho',
        titulo: 'IA via MCP',
        resumo: 'O MCP do Turbo Deploy conecta seu agente de IA à plataforma. Peça para publicar, investigar um erro nos logs ou voltar a uma versão anterior.',
        pontos: [
          'Instruções de projeto para Claude, Codex, Gemini e Cursor',
          'Publicação, logs e rollback em clientes compatíveis com MCP',
          'Você confirma as ações que alteram o projeto',
        ],
        requisito: 'Um cliente de IA compatível com MCP. O MCP publica o Git conectado; para a pasta local, use a CLI.',
      },
    ],
    /** Terminal ilustrativo ao lado do texto. */
    terminal: {
      titulo: 'terminal · meu-app',
      linhas: [
        { tipo: 'cmd', texto: 'turbodeploy agents' },
        { tipo: 'out', texto: '✓ AGENTS.md, CLAUDE.md, GEMINI.md e .cursor/rules gerados' },
        { tipo: 'out', texto: '  com publicação, diagnóstico, rollback e cuidados com credenciais' },
        { tipo: 'cmd', texto: 'turbodeploy deploy' },
        { tipo: 'out', texto: '→ enviando ./ (sem .env)' },
        { tipo: 'out', texto: '→ framework: Next.js · construindo imagem' },
        { tipo: 'out', texto: '→ verificação de saúde: 200 OK' },
        { tipo: 'ok', texto: '✓ publicado em https://meu-app.com.br' },
      ],
      legenda: 'Saída ilustrativa da CLI.',
    },
  },

  operacao: {
    eyebrow: 'Da publicação à operação',
    titulo1: 'O que você recebe',
    titulo2: 'além de um link.',
    texto:
      'Publicar é o começo. O Turbo Deploy cuida do que vem depois: domínio, certificado, arquivos, logs e um caminho de volta quando uma atualização dá errado.',
    itens: [
      {
        icone: 'plugue',
        titulo: 'Domínio próprio e HTTPS',
        texto:
          'Cada projeto nasce com um endereço da plataforma. Aponte seu domínio, comprove a posse e receba o certificado, com renovação e diagnóstico de DNS e SSL no painel.',
      },
      {
        icone: 'escudo',
        titulo: 'Verificação antes da troca',
        texto:
          'A nova versão sobe, responde à verificação de saúde e só então assume o tráfego. Se a publicação falhar, o pipeline preserva a versão anterior quando ela existe.',
      },
      {
        icone: 'backup',
        titulo: 'Rollback sem recompilar',
        texto:
          'Voltou a dar problema? Volte a uma imagem anterior já pronta. Isso não desfaz banco de dados nem arquivos: é a aplicação que volta.',
      },
      {
        icone: 'monitor',
        titulo: 'Logs por etapa',
        texto:
          'Veja em que passo o deploy parou, com o log de cada etapa e diagnóstico quando falta memória. Informação útil para você ou para o seu agente investigar.',
      },
      {
        icone: 'nvme',
        titulo: 'Volume persistente',
        texto:
          'Ative um volume e defina o caminho de montagem. Uploads e arquivos gravados ali permanecem entre publicações e reinícios. Persistência não é backup.',
      },
      {
        icone: 'isolamento',
        titulo: 'Variáveis e acessos protegidos',
        texto:
          'Variáveis criptografadas e fora dos argumentos de build, 2FA, sessões e tokens revogáveis, escopos no MCP. Nada de credencial em arquivo de instrução.',
      },
    ] satisfies readonly { icone: IconeBeneficio; titulo: string; texto: string }[],
  },

  tecnologias: {
    hub: 'Turbo Deploy',
    hubStatus: 'Tecnologias suportadas',
    grupoFrontend: 'Frameworks e runtimes suportados',
    grupoBackend: 'Linguagens e configuração personalizada',
    eyebrow: 'Compatibilidade',
    titulo1: 'Sites, aplicações web e APIs,',
    titulo2: 'nas tecnologias que você já usa.',
    texto:
      'Onze opções de framework e runtime, além de Dockerfile próprio para projetos que precisam de uma configuração personalizada.',
    frameworks: ['Next.js', 'Astro', 'React estático', 'Node.js', 'Express', 'NestJS', 'Laravel', 'Python', 'Go', 'Rust', '.NET', 'Dockerfile próprio'],
    nota:
      'Um Dockerfile amplia as possibilidades, mas não significa suporte a Docker Compose, vários serviços num projeto ou qualquer versão de dependência. Projetos exportados de ferramentas como Lovable ou Bolt são candidatos quando o código e as dependências são compatíveis: o caminho é código ou GitHub → Turbo Deploy.',
    casosTitulo: 'Três projetos típicos',
    casos: [
      {
        icone: 'documento',
        titulo: 'Site institucional criado com IA',
        jornada: 'Projeto React ou Astro → envio → domínio próprio.',
        resultado: 'Site acessível em HTTPS no endereço da marca.',
        depende: 'Build correto e DNS apontado no seu provedor.',
      },
      {
        icone: 'camadas',
        titulo: 'MVP com frontend e API',
        jornada: 'Código compatível → variáveis → deploy → logs.',
        resultado: 'Fluxo web acessível e operação acompanhável no painel.',
        depende: 'Banco, autenticação e serviços externos seguem na sua arquitetura.',
      },
      {
        icone: 'pasta',
        titulo: 'Portal que recebe uploads',
        jornada: 'Ativar volume → configurar caminho → publicar uma atualização.',
        resultado: 'Arquivos preservados no volume entre versões.',
        depende: 'Backup é uma responsabilidade separada da persistência.',
      },
    ],
  },

  painel: {
    eyebrow: 'Por dentro do painel',
    titulo1: 'Cada tarefa tem seu lugar.',
    titulo2: 'Veja onde fazer o quê.',
    texto:
      'A área de disponibilidade acessa o endereço do projeto a cada minuto e registra incidentes. CPU, memória e rede aparecem por projeto, com notificações no painel e reinício automático opcional após falhas consecutivas.',
    itens: [
      'Verificações a cada minuto, com histórico de incidentes',
      'CPU, memória e rede por projeto',
      'Notificações no painel e reinício automático opcional',
      'Versões publicadas com autoria e rollback ao alcance',
    ],
    nota: 'As verificações usam a resposta HTTP do endereço como sinal. Não validam jornadas completas nem substituem analytics.',
    /** Mockup do painel de disponibilidade. */
    mock: {
      projeto: 'meu-app',
      status: 'Saudável',
      ultimaVerificacao: 'há 1 min',
      recursos: [
        { label: 'CPU', valor: '0,3', de: '1 vCPU', pct: 30 },
        { label: 'Memória', valor: '412 MB', de: '1 GB', pct: 41 },
        { label: 'Rede', valor: '18 MB', de: 'hoje', pct: 18 },
      ],
      versoes: [
        { sha: 'a1b2c3d', msg: 'Ajusta formulário de contato', quem: 'ana', quando: 'há 2 h', atual: true },
        { sha: '9f8e7d6', msg: 'Nova página de preços', quem: 'agente · Claude', quando: 'ontem', atual: false },
        { sha: '5c4b3a2', msg: 'Primeira publicação', quem: 'ana', quando: '3 dias', atual: false },
      ],
      rollback: 'Voltar para esta versão',
    },
  },

  interface: {
    guia: 'Comece pela lista de Projetos. Ao abrir uma aplicação, as abas reúnem tudo o que você precisa para configurar, publicar e acompanhar.',
    projetoLabel: 'Dentro de cada projeto',
    contaLabel: 'No menu lateral',
    contaTitulo: 'Sua conta e sua equipe.',
    mcpTitulo: 'MCP para o seu agente',
    mcpTexto: 'Além do painel, conecte um cliente de IA compatível para publicar o Git conectado, consultar logs e fazer rollback com as permissões concedidas.',
    legenda: 'Prévia ilustrativa baseada no painel do Turbo Deploy. Projetos e dados de exemplo.',
    instrucao: 'Explore a prévia: abra um projeto e navegue pelas abas.',
    organizacao: 'Sua organização',
    proprietario: 'Proprietário',
    busca: 'Buscar projetos e ações...',
    grupos: [
      { titulo: 'Seus recursos', itens: ['Projetos', 'Central de ajuda'] },
      { titulo: 'Organização', itens: ['Membros'] },
      { titulo: 'Conta', itens: ['GitHub', 'Tokens da CLI', 'Configurações', 'Segurança'] },
    ],
    projetos: [
      { nome: 'Meu site', tecnologia: 'Astro', endereco: 'meu-site.com.br', descricao: 'Nova página de apresentação' },
      { nome: 'Minha API', tecnologia: 'Node.js', endereco: 'api.meu-site.com.br', descricao: 'Atualiza os serviços da aplicação' },
    ],
    abas: [
      { nome: 'Publicações', titulo: 'Saiba qual versão está no ar.', texto: 'Acompanhe cada publicação, abra os logs para investigar erros e consulte o histórico. Use Publicar para enviar uma nova versão ou faça redeploy de uma publicação.', caminho: 'Projetos → seu projeto → Publicações' },
      { nome: 'Variáveis', titulo: 'Configure o que a aplicação precisa.', texto: 'Cadastre as variáveis de ambiente usadas pelo projeto, como endereços de serviços e credenciais. Mantenha esses valores na configuração, fora do código.', caminho: 'Projetos → seu projeto → Variáveis' },
      { nome: 'Domínios', titulo: 'Coloque o endereço da sua marca.', texto: 'Adicione seu domínio, comprove a posse e aponte o DNS no seu provedor. Acompanhe a configuração e o certificado HTTPS pelo painel.', caminho: 'Projetos → seu projeto → Domínios' },
      { nome: 'Disponibilidade', titulo: 'Acompanhe a resposta do seu site.', texto: 'Consulte as verificações do endereço, o histórico de incidentes e o uso de CPU, memória e rede. Use essas informações para investigar o comportamento da aplicação.', caminho: 'Projetos → seu projeto → Disponibilidade' },
      { nome: 'Configurações', titulo: 'Ajuste a execução do projeto.', texto: 'Revise os detalhes de execução, como porta, pasta raiz e volume persistente, conforme a necessidade da sua aplicação.', caminho: 'Projetos → seu projeto → Configurações' },
    ],
    conta: [
      { nome: 'GitHub', texto: 'Conecte sua conta para publicar a partir de um repositório.' },
      { nome: 'Tokens da CLI', texto: 'Gerencie o acesso usado para publicar pelo terminal.' },
      { nome: 'Membros', texto: 'Convide a equipe e organize os acessos à organização.' },
      { nome: 'Segurança', texto: 'Cuide da proteção da conta, incluindo a autenticação em duas etapas.' },
      { nome: 'Central de ajuda', texto: 'Consulte orientações quando precisar de apoio para usar a plataforma.' },
    ],
  },

  equipes: {
    eyebrow: 'Equipes e agências',
    titulo1: 'Vários projetos, várias pessoas,',
    titulo2: 'tudo organizado.',
    texto:
      'Organizações separam os projetos de cada cliente. Convites e papéis definem quem acessa o quê, e o histórico registra quem publicou cada versão.',
    itens: [
      { icone: 'grupo', titulo: 'Organizações', texto: 'Pessoais e de equipe, para separar clientes e contextos.' },
      { icone: 'convite', titulo: 'Convites e papéis', texto: 'Membros gerenciam os projetos da organização em que estão.' },
      { icone: 'historico', titulo: 'Autoria nas publicações', texto: 'Cada deploy registra quem publicou, pessoa ou agente.' },
      { icone: 'bandeira', titulo: 'Painel em português', texto: 'Busca de projetos e ações, ajuda pesquisável, tema claro e escuro.' },
    ],
    nota: 'Os papéis valem por organização. Para separar o acesso de cada cliente, crie uma organização por cliente.',
  },

  planos: {
    eyebrow: 'Planos Turbo Deploy',
    titulo1: 'Da sua ideia ao próximo deploy.',
    titulo2: 'Escolha o espaço para crescer.',
    texto: 'Hospede suas aplicações com um valor mensal em reais. Você escolhe o plano e cuida do projeto. A infraestrutura fica com a Turbo.',
    periodo: '/mês',
    cobranca: 'Cobrança mensal por plano',
    recursosTitulo: 'Em todos os planos',
    recursos: ['Publicação por GitHub e CLI', 'MCP para agentes de IA', 'Domínio próprio com HTTPS', 'Logs e histórico de publicações', 'Rollback de aplicações', 'Painel em português'],
    itens: [
      {
        key: 'start', nome: 'Start', selo: '',
        persona: 'Para tirar suas primeiras ideias do localhost.',
        preco: '19,90', destaque: false,
        capacidade: 'Até 3 aplicações · 2 projetos',
        recursos: [
          { nome: 'Domínios personalizados', valor: '2' },
          { nome: 'Publicações por mês', valor: '50' },
          { nome: 'CPU', valor: '0,5 vCPU' },
          { nome: 'Memória RAM', valor: '768 MB' },
        ],
        cta: { label: 'Escolher Start', href: links.whatsapp },
      },
      {
        key: 'pro', nome: 'Pro', selo: 'PARA IR ALÉM',
        persona: 'Para publicar mais e evoluir seus projetos.',
        preco: '39,90', destaque: true,
        capacidade: 'Até 5 aplicações · 4 projetos',
        recursos: [
          { nome: 'Domínios personalizados', valor: '5' },
          { nome: 'Publicações por mês', valor: '150' },
          { nome: 'CPU', valor: '1,5 vCPU' },
          { nome: 'Memória RAM', valor: '2 GB' },
        ],
        cta: { label: 'Escolher Pro', href: links.whatsapp },
      },
      {
        key: 'business', nome: 'Business', selo: '',
        persona: 'Para reunir mais aplicações da sua operação.',
        preco: '59,90', destaque: false,
        capacidade: 'Até 8 aplicações · 6 projetos',
        recursos: [
          { nome: 'Domínios personalizados', valor: '10' },
          { nome: 'Publicações por mês', valor: '500' },
          { nome: 'CPU', valor: '3 vCPU' },
          { nome: 'Memória RAM', valor: '4 GB' },
        ],
        cta: { label: 'Escolher Business', href: links.whatsapp },
      },
    ],
    nota: 'Contratação e ativação com a equipe pelo WhatsApp. Registro de domínio, banco de dados gerenciado e créditos de IA são contratados separadamente. O HTTPS depende da configuração e validação do domínio.',
  },

  ecossistema: {
    eyebrow: 'Quem faz',
    titulo1: 'Feito pela equipe da Turbo Cloud,',
    titulo2: `que hospeda sites desde ${marca.desde}.`,
    texto:
      'O Turbo Deploy nasce dentro da Turbo Cloud, com a mesma gente que atende no WhatsApp e mantém a hospedagem de milhares de sites no ar. Uma ferramenta nova, com uma casa conhecida.',
    selos: [
      { icone: 'backup', titulo: `Desde ${marca.desde}`, texto: 'hospedando histórias no Brasil' },
      { icone: 'escudo', titulo: `${provas.notaGoogle} no Google`, texto: `${provas.avaliacoesGoogle.toLocaleString('pt-BR')} avaliações de clientes` },
      { icone: 'suporte', titulo: 'Gente de verdade', texto: 'atendimento humano no WhatsApp' },
      { icone: 'ferramentas', titulo: 'Ecossistema Turbo', texto: 'ao lado do Turbo Builder e da hospedagem' },
    ] satisfies readonly { icone: IconeBeneficio; titulo: string; texto: string }[],
  },

  faq: [
    {
      p: 'O Turbo Deploy tem MCP? O que posso fazer com ele?',
      r: 'Sim. O Turbo Deploy tem MCP (Model Context Protocol), uma conexão que permite ao seu agente de IA interagir com a plataforma em clientes compatíveis. Depois de configurar o acesso, o agente pode listar projetos, consultar logs, publicar o repositório Git conectado, cancelar publicações e fazer rollback. As ações respeitam as permissões concedidas e as alterações pedem sua confirmação. Para publicar uma pasta local, use a CLI.',
    },
    {
      p: 'Preciso saber Docker ou administrar uma VPS?',
      r: 'Nos frameworks suportados, não. O Turbo Deploy gera a configuração de build, constrói a imagem e publica. Você precisa de um projeto que compila e inicia corretamente, com variáveis e dependências configuradas. Casos fora do padrão podem pedir um Dockerfile próprio.',
    },
    {
      p: 'Posso publicar com o agente de IA que uso para programar?',
      r: 'Sim, em clientes compatíveis com MCP. O comando turbodeploy agents gera instruções com o contexto do seu projeto para AGENTS.md, CLAUDE.md, GEMINI.md e Cursor. Depois de configurar acesso e projeto, o agente pode publicar, consultar logs e fazer rollback dentro das permissões que você concedeu.',
    },
    {
      p: 'Preciso colocar o código no GitHub?',
      r: 'Não. A CLI publica a pasta local. O GitHub é o caminho para deploy automático por push e para a ação de publicar via MCP remoto, que lê o repositório conectado.',
    },
    {
      p: 'Funciona com meu projeto criado no Lovable, Bolt ou outra ferramenta?',
      r: 'Depende do código, não da ferramenta. Se você consegue exportar o projeto e ele usa um dos frameworks suportados, o caminho é o mesmo de qualquer outro: código ou GitHub → Turbo Deploy. Banco, autenticação e serviços externos que a ferramenta fornecia precisam ser resolvidos no seu projeto.',
    },
    {
      p: 'Posso usar meu domínio?',
      r: 'Sim. Você comprova a posse, aponta o DNS no seu provedor e o certificado HTTPS é emitido e renovado. O painel mostra o diagnóstico de DNS e SSL. O registro do domínio é uma contratação separada.',
    },
    {
      p: 'O que acontece se uma atualização falhar?',
      r: 'A nova versão é verificada antes de assumir o tráfego. Se a publicação falhar, o pipeline procura preservar a versão anterior quando ela existe. Você também pode voltar a uma imagem anterior a qualquer momento. Isso não desfaz alterações em banco de dados ou arquivos.',
    },
    {
      p: 'Os uploads permanecem depois de atualizar?',
      r: 'Sim, quando gravados no volume persistente ativado e no caminho configurado. O restante do sistema de arquivos do container é recriado a cada publicação.',
    },
    {
      p: 'Banco de dados e créditos de IA estão incluídos?',
      r: 'Não. O Turbo Deploy hospeda a aplicação. Banco de dados gerenciado e créditos de provedores de IA não fazem parte da oferta, e precisam ser contratados e configurados conforme o seu projeto.',
    },
    {
      p: 'Consigo testar uma versão em uma URL separada antes de publicar?',
      r: 'Hoje a prévia revisa a configuração antes do deploy. Um ambiente isolado automático por branch ou pull request não está disponível. Se isso é essencial para você, fale com a gente antes de contratar.',
    },
    {
      p: 'Minha aplicação escala automaticamente?',
      r: 'Não. A aplicação roda com os recursos definidos pelo plano e pela configuração, e você pode solicitar ajustes. Escala horizontal automática não faz parte da oferta atual.',
    },
    {
      p: 'Quanto custa, e qual é o suporte?',
      r: 'O Start custa R$ 19,90/mês para até 3 aplicações e 2 projetos; o Pro, R$ 39,90/mês para até 5 aplicações e 4 projetos; e o Business, R$ 59,90/mês para até 8 aplicações e 6 projetos. A cobrança é mensal por plano, em reais. Fale com a equipe no WhatsApp para contratar, ativar seu plano e consultar as condições de suporte.',
    },
  ],

  ctaFinal: {
    titulo1: 'Seu projeto criado com IA,',
    titulo2: 'pronto para chegar aos usuários.',
    texto: 'Publique pelo GitHub, pela CLI ou conecte seu agente de IA ao MCP do Turbo Deploy. A plataforma prepara, verifica e publica.',
    secundario: { label: 'Falar com a equipe', href: links.whatsapp },
  },
} as const
