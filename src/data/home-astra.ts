import { abasPlanos, links, provas } from './site'
import { planosEmail } from './produtos'

/** Conteúdo exclusivo da proposta /home-astra. Valores vêm do catálogo atual. */
const menorPreco = (categoria: string) =>
  Math.min(...abasPlanos.find((aba) => aba.id === categoria)!.planos.map((plano) => plano.precoMensal))

export const homeAstra = {
  titulo: 'Turbo Cloud — seu site no modo Turbo',
  descricao: 'Hospedagem WordPress e WooCommerce no Brasil, suporte humano e migração grátis. Encontre o plano para o seu projeto na Turbo Cloud.',
  aviso: 'Mudando de hospedagem? A migração é por nossa conta.',
  hero: {
    eyebrow: 'Hospedagem de alta performance no Brasil',
    titulo: 'Seu site rápido.',
    destaque: 'Seu negócio no modo Turbo.',
    texto: 'WordPress ou WooCommerce: seu site rápido, seguro e bem cuidado. Servidores no Brasil e gente de verdade para ajudar.',
    principal: 'Encontre seu plano',
    secundario: 'Falar com especialista',
    beneficios: ['Migração grátis', '7 dias de teste'],
    preco: menorPreco('hospedagem'),
  },
  solucao: {
    eyebrow: 'O próximo passo do seu projeto',
    titulo: 'Cada projeto tem seu jeito.',
    destaque: 'A gente tem a hospedagem.',
    itens: [
      { numero: '01', icone: 'wordpress', titulo: 'Sites e lojas virtuais', texto: 'Do primeiro WordPress ao checkout da sua loja. Com cPanel, backup e plugins premium.', preco: menorPreco('hospedagem'), href: '#planos', cta: 'Ver planos de hospedagem', detalhe: 'WordPress · WooCommerce' },
      { numero: '02', icone: 'servidor', titulo: 'Cloud, VPS e Container', texto: 'Mais controle para projetos que cresceram. Escolha seu ambiente e os recursos que precisa.', preco: Math.min(menorPreco('vps'), menorPreco('container')), href: links.produtos.cloudVps, cta: 'Conhecer Cloud e VPS', detalhe: 'Acesso root · NVMe' },
      { numero: '03', icone: 'email', titulo: 'E-mail profissional', texto: 'A comunicação da empresa em um servidor próprio, independente da hospedagem do site.', preco: Math.min(...planosEmail.map((plano) => plano.preco)), href: links.produtos.email, cta: 'Conhecer e-mail profissional', detalhe: 'Seu domínio · Contas ilimitadas' },
    ],
  },
  planos: {
    eyebrow: 'Planos sem complicação',
    titulo: 'Encontre o espaço',
    destaque: 'para o seu próximo passo.',
    texto: 'Escolha pelo que você precisa hoje. Conte com a gente para acompanhar o crescimento.',
    recursos: {
      One: 'Recursos para o seu site',
      Three: 'CPU e memória compartilhadas entre os 3 sites',
      Duo: 'CPU e memória reservadas por domínio',
      'Revenda Elite 5': 'CPU e memória reservadas por domínio',
    } as Record<string, string>,
    comparacao: 'Three ou Duo? No Three, os três sites dividem CPU e memória. No Duo, cada domínio tem sua própria reserva de recursos.',
    ajuda: 'Ainda em dúvida? A gente ajuda a escolher.',
    nota: 'Valores do catálogo Turbo Cloud. No anual, o valor por mês é equivalente e a cobrança é única. Confira as condições no checkout.',
  },
  infra: {
    eyebrow: 'Por trás de cada site rápido',
    titulo: 'Uma estrutura forte.',
    destaque: 'Uma preocupação a menos.',
    texto: 'Seu projeto perto de quem visita, com servidores no Brasil e uma estrutura preparada para manter tudo em movimento.',
    itens: [
      { numero: '01', titulo: 'Velocidade desde o primeiro clique', texto: 'NVMe, LiteSpeed e cache para o seu WordPress responder rápido.' },
      { numero: '02', titulo: 'Segurança no dia a dia', texto: 'SSL grátis, proteção contra ataques e backup a cada 12 horas nos planos de hospedagem e revenda.' },
      { numero: '03', titulo: 'Gente que entende do seu projeto', texto: 'Atendimento humano no WhatsApp, de segunda a sábado, das 8h à 1h. Nos demais horários, por ticket.' },
    ],
  },
  migracao: {
    eyebrow: 'Pode deixar a mudança com a gente',
    titulo: 'Seu site tem um novo destino.',
    destaque: 'A migração é grátis.',
    texto: 'Arquivos, banco de dados e e-mails. Nosso time cuida da transferência, testa tudo e combina a virada com você.',
    cta: 'Quero migrar meu site',
  },
  social: {
    eyebrow: 'Quem já está no modo Turbo',
    titulo: 'Suporte que faz a diferença.',
    destaque: 'Nas palavras dos clientes.',
    nota: `${provas.notaGoogle} de 5 no Google`,
  },
  final: {
    titulo: 'Pronto para colocar seu site',
    destaque: 'no modo Turbo?',
    texto: 'Escolha seu plano ou converse com a gente. Seu próximo passo começa aqui.',
  },
} as const
