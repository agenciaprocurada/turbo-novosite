import { abasPlanos, atendimento, links } from './site'
import { planosEmail } from './produtos'
import type { Faq } from './site'

const precoInicial = (id: string) => Math.min(...abasPlanos.find(aba => aba.id === id)!.planos.map(plano => plano.precoMensal))

/** Proposta editorial /home-n2. Posicionamento fornecido pelo cliente;
 * preços e condições vêm do catálogo. A home em produção permanece independente. */
export const homeN2 = {
  titulo: 'Turbo Cloud — infraestrutura completa para sites, apps e IA',
  descricao: 'Sites, apps, APIs, projetos feitos com IA e automações. Infraestrutura completa no Brasil, com velocidade TURBO, estabilidade e suporte humano para crescer.',
  hero: {
    eyebrow: 'A hospedagem mais rápida do Brasil',
    titulo: 'Publique mais rápido.',
    destaque: 'Cresça sem trocar de cloud.',
    lead: 'Sua próxima ideia, em modo TURBO:',
    texto: 'sites, apps e automações em uma infraestrutura rápida, estável e pronta para crescer. Você cria o próximo projeto. A Turbo cuida da base para ele ir mais longe.',
    principal: 'Encontrar minha solução',
    secundario: 'Falar com especialista',
    beneficios: ['Servidores no Brasil', 'Suporte humano', 'Migração grátis'],
    legenda: 'Sua ideia pode mudar de tamanho. Sua infraestrutura acompanha.',
  },
  projetos: {
    eyebrow: 'Uma cloud. Muitas possibilidades.',
    titulo: 'O que você quer colocar no ar?',
    destaque: 'Tem um caminho Turbo para isso.',
    texto: 'Escolha pela necessidade do projeto. A gente ajuda a encontrar a infraestrutura certa para começar e o próximo passo para crescer.',
    itens: [
      { icone: 'site', titulo: 'Sites e lojas', texto: 'Do institucional ao e-commerce. Uma experiência rápida para quem visita, compra e volta.', exemplos: 'WordPress · WooCommerce · Portais', cta: 'Explorar hospedagem', href: links.hospedagem },
      { icone: 'codigo', titulo: 'Apps e APIs', texto: 'Dê uma base sólida à sua aplicação, com controle do ambiente e recursos de acordo com a demanda.', exemplos: 'Aplicações web · APIs · SaaS', cta: 'Conhecer Cloud e VPS', href: links.produtos.cloudVps },
      { icone: 'ia', titulo: 'Projetos feitos com IA', texto: 'A ideia virou código? Leve seu projeto para a internet e acompanhe as próximas versões.', exemplos: 'Código exportado · GitHub · MCP', cta: 'Conhecer Turbo Deploy', href: links.ferramentasIa.turboDeploy },
      { icone: 'fluxo', titulo: 'Automações e agentes', texto: 'Conecte ferramentas e execute suas rotinas em um ambiente configurado para o seu fluxo.', exemplos: 'Workflows · Integrações · Agentes', cta: 'Escolher minha infraestrutura', href: links.produtos.cloudVps },
    ],
  },
  infra: {
    eyebrow: 'Infraestrutura completa, de verdade',
    titulo: 'Velocidade no acesso.',
    destaque: 'Estabilidade na operação.',
    texto: 'Uma página que abre, uma API que responde, uma automação que executa. Por trás de cada experiência está a infraestrutura — e é nisso que a Turbo trabalha todos os dias.',
    itens: [
      { titulo: 'Perto dos seus usuários', texto: 'Servidores no Brasil, em datacenter TIER III, para aproximar sua aplicação de quem usa.' },
      { titulo: 'Recursos para o seu momento', texto: 'Hospedagem, containers e Cloud/VPS. Escolha o equilíbrio entre gestão, isolamento e controle.' },
      { titulo: 'Uma base para continuar crescendo', texto: 'Armazenamento NVMe e opções de processamento e memória para acompanhar a evolução do projeto.' },
    ],
    cta: 'Conheça nossa estrutura',
  },
  ia: {
    eyebrow: 'Da ideia ao próximo deploy',
    titulo: 'Você cria com IA.',
    destaque: 'Publica com a Turbo.',
    texto: 'Seu projeto não precisa parar no computador. Crie um site com o Turbo Builder ou publique seu código com o Turbo Deploy, pelo GitHub, pela CLI ou com um agente conectado via MCP.',
    passos: [
      { numero: '01', titulo: 'Crie do seu jeito', texto: 'No editor, com IA ou a partir de um projeto que você já tem.' },
      { numero: '02', titulo: 'Coloque no ar', texto: 'Escolha o ambiente e configure o que sua aplicação precisa.' },
      { numero: '03', titulo: 'Continue evoluindo', texto: 'Publique novas versões e acompanhe a operação do projeto.' },
    ],
    ferramentas: [
      { nome: 'Turbo Builder', texto: 'Para criar seu site com IA e partir para a publicação.', cta: 'Conhecer o Builder', href: links.ferramentasIa.turboBuilder },
      { nome: 'Turbo Deploy', texto: 'Para publicar código, consultar logs e gerenciar versões. Com MCP para agentes de IA.', cta: 'Conhecer o Deploy', href: links.ferramentasIa.turboDeploy },
    ],
    nota: 'A infraestrutura e os serviços externos são definidos conforme a tecnologia e as necessidades do seu projeto.',
  },
  planos: {
    eyebrow: 'Escolha a base do seu projeto',
    titulo: 'Comece com o que precisa.',
    destaque: 'Tenha para onde crescer.',
    texto: 'Da hospedagem pronta para usar ao servidor com acesso root. Compare as opções e veja os recursos de cada plano.',
    itens: [
      { nome: 'Hospedagem', para: 'Para sites, lojas e portais', preco: precoInicial('hospedagem'), itens: ['Painel para gerenciar sua hospedagem', 'WordPress e WooCommerce', 'Backup automático a cada 12 horas'], href: links.hospedagem, cta: 'Ver hospedagem', icone: 'site' },
      { nome: 'Cloud / VPS', para: 'Para apps, APIs e automações', preco: precoInicial('vps'), itens: ['Acesso root e controle do ambiente', 'Escolha do sistema operacional', 'Recursos conforme o plano'], href: links.produtos.cloudVps, cta: 'Ver Cloud e VPS', icone: 'codigo' },
      { nome: 'Containers', para: 'Para projetos que precisam de isolamento', preco: precoInicial('container'), itens: ['Ambiente isolado', 'Processamento e memória dedicados', 'Opções para operações com mais demanda'], href: links.produtos.containers, cta: 'Ver containers', icone: 'fluxo' },
      { nome: 'E-mail profissional', para: 'Para a comunicação da sua empresa', preco: Math.min(...planosEmail.map(plano => plano.preco)), itens: ['Endereços com o seu domínio', 'Servidor separado do site', 'Proteção AntiSpam'], href: links.produtos.email, cta: 'Ver planos de e-mail', icone: 'email' },
    ],
    aPartir: 'A partir de',
    periodo: '/mês',
    nota: 'Preços iniciais do catálogo, na contratação mensal. Recursos, limites e serviços de gestão variam por plano; consulte os detalhes de cada solução.',
    ajuda: 'Não sabe qual escolher? Conte o que você está construindo.',
    ctaAjuda: 'Encontrar a infraestrutura ideal',
  },
  social: 'Quem confia na Turbo tem mais tempo para cuidar do próprio negócio. Veja o que nossos clientes contam.',
  apoio: {
    eyebrow: 'Tecnologia com gente por perto',
    titulo: 'Seu projeto cresce.',
    destaque: 'Nossa equipe vai junto.',
    migracao: { titulo: 'Já está em outra hospedagem?', texto: 'A mudança para a Turbo começa com uma conversa. Nossa equipe analisa o ambiente, combina a transferência e orienta a migração do seu site.', cta: 'Quero migrar para a Turbo' },
    suporte: { titulo: 'Vai tirar uma ideia do papel?', texto: 'Conte a tecnologia, o volume de uso e o que você pretende construir. A gente ajuda a escolher a infraestrutura para o seu cenário.', cta: 'Conversar sobre meu projeto' },
    horario: atendimento.resumo,
  },
  faq: [
    { p: 'A Turbo Cloud hospeda apenas WordPress?', r: 'Não. A Turbo oferece hospedagem para sites e lojas, containers, Cloud/VPS e e-mail profissional. Apps, APIs, automações e projetos feitos com IA têm espaço nesse ecossistema. A escolha do ambiente depende da tecnologia e dos recursos que o projeto precisa.' },
    { p: 'Posso hospedar um projeto que criei com IA?', r: 'Sim. Um projeto criado com IA pode ser hospedado conforme a compatibilidade do código, das dependências e dos serviços que utiliza. O Turbo Deploy oferece publicação pelo GitHub, pela CLI ou por um agente conectado via MCP. O Turbo Builder é uma opção para criar sites com IA.' },
    { p: 'Qual é a diferença entre hospedagem, container e VPS?', r: 'A hospedagem reúne um ambiente e ferramentas para gerenciar sites. Os planos de container oferecem isolamento e recursos dedicados. O Cloud/VPS dá acesso root e mais controle para configurar o servidor. Nosso time ajuda a escolher conforme a aplicação e o nível de gestão de que você precisa.' },
    { p: 'Posso rodar automações, agentes e integrações?', r: 'Cloud/VPS oferece controle para instalar e configurar as ferramentas compatíveis com o ambiente escolhido. Memória, processamento, dependências e serviços externos devem ser dimensionados para sua rotina. Fale com a equipe para avaliar o projeto.' },
    { p: 'Minha infraestrutura pode crescer junto com o projeto?', r: 'Você pode avaliar um plano com mais recursos ou outro ambiente dentro da Turbo, conforme a evolução da operação. A equipe orienta a escolha e o planejamento da mudança. A ampliação depende do plano e não significa escala automática para toda aplicação.' },
    { p: 'Todos os produtos incluem backup e administração do servidor?', r: 'Os recursos variam por produto. Hospedagem e revenda contam com backup automático a cada 12 horas. Cloud/VPS não inclui esse mesmo backup automático, e o nível de administração depende da solução escolhida. Confira a página do produto ou converse com a equipe.' },
    { p: 'Como funciona o suporte e a migração?', r: `O atendimento pelo WhatsApp funciona de segunda a sábado, das 8h à 1h, com tickets todos os dias. A migração de sites é gratuita e combinada com a equipe. Para aplicações e ambientes personalizados, o time avalia o escopo da transferência.` },
  ] satisfies readonly Faq[],
  final: { titulo: 'Do próximo clique', destaque: 'à sua próxima grande ideia.', texto: 'Sites, apps, IA e automações. Coloque seu projeto no modo TURBO.', principal: 'Explorar soluções', secundario: 'Falar com a equipe' },
} as const
