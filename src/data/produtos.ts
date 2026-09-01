/* ====================================================================== */
/* Páginas de produto — /hospedagem/<slug>/                               */
/* ====================================================================== */
/*  Todo o texto daqui saiu das páginas atuais de turbocloud.com.br
 *  (coleta de 31/08/2026), com três correções deliberadas:
 *
 *  1. "Suporte 24/7" virou a janela real: 8h–1h no WhatsApp, seg–sáb,
 *     + ticket. O site atual se contradiz; vale o FAQ. Ver regra 1 do
 *     CLAUDE.md.
 *  2. "uptime garantido de 99,99%" saiu. O número que a Turbo publica e
 *     sustenta é o do datacenter TIER III: 99,982%.
 *  3. A página de lojas virtuais hoje usa, palavra por palavra, o texto da
 *     página de blogs ("Por que a TurboCloud é a escolha certa para o seu
 *     Blog ou Portal de Conteúdo?"). É erro de copiar-colar do site atual.
 *     Aqui o texto de e-commerce foi escrito do zero — é o único bloco
 *     desta lista que NÃO veio do site. Está marcado com TEXTO NOVO.
 */

import { provas } from './site'
import type { Faq } from './site'

export type Beneficio = {
  icone: IconeBeneficio
  titulo: string
  texto: string
}

export type IconeBeneficio =
  | 'velocidade'
  | 'latencia'
  | 'wordpress'
  | 'suporte'
  | 'escudo'
  | 'nvme'
  | 'escalar'
  | 'backup'
  | 'ferramentas'
  | 'isolamento'
  | 'cpu'
  | 'custom'
  | 'monitor'
  | 'entrega'
  | 'caixa'
  | 'plugue'
  | 'seo'
  | 'carrinho'
  | 'carregamento'

export type Produto = {
  slug: string
  /** rótulo curto, usado no menu, na trilha e nos cards do hub */
  nome: string
  titulo: string
  descricao: string
  eyebrow: string
  /** primeira parte do H1, em text-ink */
  h1: string
  /** segunda parte do H1, em verde — mesmo par de duas cores do hero da home */
  h1Verde: string
  lead: string
  /** selos ao lado do CTA — só o que a Turbo entrega de fato */
  badges: readonly string[]
  aPartirDe: number
  /** id da aba em `abasPlanos` que esta página mostra */
  abaPlanos: 'hospedagem' | 'container' | 'vps' | null
  planosTitulo1: string
  planosTitulo2a: string
  planosTitulo2b: string
  planosTexto: string
  /** os 4 motivos, logo abaixo do hero */
  porque: readonly Beneficio[]
  /** o bloco de benefícios, depois dos planos */
  beneficios: readonly Beneficio[]
  faq: readonly Faq[]
  /** resumo usado no hub /hospedagem/ */
  resumoHub: string
}

/* --------------------------------------------------------------------- */
/* FAQ que se repete em toda página de produto                            */
/* --------------------------------------------------------------------- */

const faqTier3: Faq = {
  p: 'O que significa hospedagem em um datacenter TIER III?',
  r: `Significa que o datacenter possui alta redundância, disponibilidade de ${provas.uptimeTier3} e sistemas avançados de segurança, garantindo máxima confiabilidade.`,
}
const faqSuporte: Faq = {
  p: 'A TurboCloud oferece suporte técnico?',
  r: 'Sim. O suporte atende das 8h à 1h pelo WhatsApp, de segunda a sábado. Aos domingos e fora desse horário, por ticket.',
}
const faqTecnologias: Faq = {
  p: 'Quais tecnologias estão disponíveis em todos os planos?',
  r: 'Nossos planos incluem ferramentas como LiteSpeed, cPanel, Redis e muito mais, otimizando desempenho e segurança.',
}
const faqMigracao: Faq = {
  p: 'Como funciona a migração gratuita?',
  r: 'Nosso time de especialistas cuida de todo o processo de transferência dos seus dados e arquivos para nossos servidores, garantindo uma transição suave e sem interrupções.',
}
const faqBrasil: Faq = {
  p: 'Os servidores da TurboCloud estão no Brasil?',
  r: 'Sim, nossos servidores estão localizados no Brasil, proporcionando melhor desempenho e conformidade com as leis locais.',
}
const faqPagamento: Faq = {
  p: 'Quais são as formas de pagamento disponíveis?',
  r: 'Aceitamos cartões de crédito, boleto bancário e PIX, proporcionando flexibilidade e conveniência para você.',
}
const faqBackupSim: Faq = {
  p: 'Os planos incluem backups automáticos?',
  r: 'Todos os nossos planos de hospedagem e revenda contam com backups automáticos realizados a cada 12 horas, assegurando a integridade e segurança dos seus dados.',
}
const faqBackupNao: Faq = {
  p: 'Os planos incluem backups automáticos?',
  r: 'Ainda não. O backup automatizado não está implantado para planos de VPS, Container e servidores bare metal — só para hospedagem de sites e revenda.',
}
const faqEscalar: Faq = {
  p: 'É possível escalar os recursos conforme meu site cresce?',
  r: 'Nossa infraestrutura é altamente escalável, permitindo que você ajuste os recursos conforme a demanda do seu projeto, sem complicações.',
}

/* --------------------------------------------------------------------- */
/* Benefícios que se repetem                                              */
/* --------------------------------------------------------------------- */

const benefBackup: Beneficio = {
  icone: 'backup',
  titulo: 'Backups automáticos',
  texto: 'Segurança adicional com backups realizados a cada 12 horas, protegendo seus dados de imprevistos.',
}
const benefEscalar: Beneficio = {
  icone: 'escalar',
  titulo: 'Escalabilidade sob demanda',
  texto: 'Ajuste os recursos do seu plano à medida que sua empresa cresce, sem comprometer a performance.',
}

/* --------------------------------------------------------------------- */
/* Os seis produtos                                                       */
/* --------------------------------------------------------------------- */

export const produtos: readonly Produto[] = [
  {
    slug: 'sites-institucionais',
    nome: 'Sites institucionais',
    titulo: 'Hospedagem para sites institucionais em WordPress — Turbo Cloud',
    descricao:
      'Hospedagem otimizada para sites institucionais em WordPress: CPU e memória dedicadas, servidores no Brasil, backup a cada 12 horas e suporte por WhatsApp. A partir de R$ 35,90/mês.',
    eyebrow: 'Sites institucionais',
    h1: 'Estabilidade, segurança e desempenho',
    h1Verde: 'para o seu site institucional.',
    lead: 'Transforme a presença online da sua empresa com uma hospedagem otimizada para sites institucionais. A Turbo Cloud entrega alta performance, suporte dedicado e segurança de nível empresarial para projetos que não podem parar.',
    badges: ['Migração grátis', 'Otimizada para WordPress', '7 dias de teste'],
    aPartirDe: 35.9,
    abaPlanos: 'hospedagem',
    planosTitulo1: 'Planos otimizados',
    planosTitulo2a: 'para sites',
    planosTitulo2b: 'institucionais.',
    planosTexto: 'Assine um dos planos e mantenha o site da sua empresa no modo Turbo.',
    porque: [
      {
        icone: 'latencia',
        titulo: 'Latência ultrarrápida',
        texto: 'Com servidores no Brasil, o tempo de resposta fica entre 20 e 60 ms — o site abre rápido para quem está aqui.',
      },
      {
        icone: 'velocidade',
        titulo: 'Foco em performance',
        texto: 'Nossos servidores são otimizados para WordPress e configurados para oferecer máxima velocidade e estabilidade.',
      },
      {
        icone: 'escudo',
        titulo: 'Proteção contra invasão',
        texto: 'Sistemas avançados como AntiBrute Force e AntiMalware protegem seus dados contra invasões e ataques cibernéticos.',
      },
      {
        icone: 'suporte',
        titulo: 'Suporte via WhatsApp',
        texto: 'Atendimento rápido e direto com quem entende do servidor, das 8h à 1h, de segunda a sábado.',
      },
    ],
    beneficios: [
      {
        icone: 'nvme',
        titulo: 'Armazenamento NVMe',
        texto: 'Velocidade até 6x maior que SSDs tradicionais, ideal para carregar páginas rapidamente e impressionar visitantes.',
      },
      {
        icone: 'ferramentas',
        titulo: 'Ferramentas premium inclusas',
        texto: 'Plugins como Elementor Pro, TurboCache e RankMath já vêm inclusos para personalizar e otimizar seu site sem custo extra.',
      },
      benefBackup,
      benefEscalar,
    ],
    faq: [
      {
        p: 'A hospedagem é adequada para sites institucionais?',
        r: 'Sim, nossos servidores são otimizados para oferecer alta performance e estabilidade para sites institucionais.',
      },
      faqTier3,
      faqSuporte,
      faqTecnologias,
      faqMigracao,
      faqBrasil,
      faqPagamento,
      faqBackupSim,
      faqEscalar,
    ],
    resumoHub:
      'Ideal para empresas e profissionais que precisam de uma presença online sólida. Hospedagem otimizada para WordPress, com desempenho superior, segurança robusta e painel fácil de gerenciar.',
  },

  {
    slug: 'lojas-virtuais-woocommerce',
    nome: 'Lojas virtuais',
    titulo: 'Hospedagem para loja virtual WooCommerce — Turbo Cloud',
    descricao:
      'Hospedagem para WooCommerce com CPU e memória dedicadas, servidores no Brasil e backup a cada 12 horas. Checkout que não trava no pico. A partir de R$ 35,90/mês.',
    eyebrow: 'Lojas virtuais (WooCommerce)',
    h1: 'A hospedagem ideal para sua loja virtual',
    h1Verde: 'crescer sem travar no pico.',
    lead: 'WooCommerce é uma loja e um banco de dados rodando ao mesmo tempo. Com CPU e memória dedicadas, o carrinho e o checkout continuam respondendo mesmo quando a campanha dá certo.',
    badges: ['Migração grátis', 'Otimizada para WooCommerce', '7 dias de teste'],
    aPartirDe: 35.9,
    abaPlanos: 'hospedagem',
    planosTitulo1: 'Planos otimizados',
    planosTitulo2a: 'para',
    planosTitulo2b: 'e-commerce.',
    planosTexto: 'Assine um dos planos e mantenha sua loja no modo Turbo, do catálogo ao checkout.',
    /* TEXTO NOVO — a página atual repete, palavra por palavra, o texto da
       página de blogs. Estes quatro cards foram escritos para e-commerce. */
    porque: [
      {
        icone: 'carrinho',
        titulo: 'Checkout que não trava',
        texto: 'Recursos dedicados por domínio: o pico de acesso de uma campanha não derruba a finalização da compra.',
      },
      {
        icone: 'latencia',
        titulo: 'Latência ultrabaixa',
        texto: 'Servidores no Brasil deixam a navegação entre produtos rápida para quem compra daqui.',
      },
      {
        icone: 'wordpress',
        titulo: 'Preparada para WooCommerce',
        texto: 'LiteSpeed, Redis e CloudLinux configurados para o que uma loja WordPress realmente exige do servidor.',
      },
      {
        icone: 'suporte',
        titulo: 'Suporte via WhatsApp',
        texto: 'Loja parada é venda perdida. O atendimento é humano e direto, das 8h à 1h, de segunda a sábado.',
      },
    ],
    beneficios: [
      benefEscalar,
      {
        icone: 'nvme',
        titulo: 'Armazenamento NVMe',
        texto: 'Velocidade de leitura e gravação até 6x maior que SSDs tradicionais, ideal para carregamento rápido de páginas.',
      },
      {
        icone: 'ferramentas',
        titulo: 'Ferramentas premium inclusas',
        texto: 'Plugins como WooCommerce Extra Checkout Fields, WP Rocket e RankMath já estão inclusos para personalizar e otimizar sua loja sem custo adicional.',
      },
      {
        icone: 'backup',
        titulo: 'Backups automáticos',
        texto: 'Backups a cada 12 horas: pedido, cliente e catálogo têm sempre uma cópia recente.',
      },
    ],
    faq: [
      {
        p: 'A hospedagem é adequada para lojas virtuais grandes?',
        r: 'Sim, nossa infraestrutura é preparada para lidar com alto tráfego e grandes volumes de vendas.',
      },
      faqTier3,
      faqSuporte,
      faqTecnologias,
      faqMigracao,
      faqBrasil,
      faqPagamento,
      faqBackupSim,
      faqEscalar,
    ],
    resumoHub:
      'Para quem vende online e não pode perder pedido por lentidão. Recursos dedicados por domínio, backup a cada 12 horas e plugins premium de e-commerce inclusos.',
  },

  {
    slug: 'blogs-e-portais-de-conteudo',
    nome: 'Blogs e portais',
    titulo: 'Hospedagem para blogs e portais de conteúdo — Turbo Cloud',
    descricao:
      'Hospedagem para blogs e portais de notícias com servidores no Brasil, NVMe, RankMath e WP Rocket inclusos e backup a cada 12 horas. A partir de R$ 35,90/mês.',
    eyebrow: 'Blogs e portais de conteúdo',
    h1: 'Performance e estabilidade',
    h1Verde: 'para o seu blog ou portal.',
    lead: 'Conteúdo só rende quando abre rápido. Servidores no Brasil, cache LiteSpeed e disco NVMe para segurar pico de acesso sem derrubar a leitura.',
    badges: ['Migração grátis', 'SEO otimizado', '7 dias de teste'],
    aPartirDe: 35.9,
    abaPlanos: 'hospedagem',
    planosTitulo1: 'Planos otimizados',
    planosTitulo2a: 'para blogs',
    planosTitulo2b: 'e portais.',
    planosTexto: 'Assine um dos planos e mantenha seu conteúdo no modo Turbo.',
    porque: [
      {
        icone: 'carregamento',
        titulo: 'Carregamento rápido',
        texto: 'Reduza o tempo de carregamento das páginas e melhore a experiência do usuário, mantendo seus leitores engajados.',
      },
      {
        icone: 'latencia',
        titulo: 'Latência ultrabaixa',
        texto: 'Servidores localizados no Brasil garantem tempos de resposta rápidos, reduzindo a taxa de rejeição.',
      },
      {
        icone: 'wordpress',
        titulo: 'Compatibilidade com WordPress',
        texto: 'Nossos servidores são configurados para oferecer o melhor desempenho para blogs e portais.',
      },
      {
        icone: 'suporte',
        titulo: 'Suporte otimizado',
        texto: 'Especialistas disponíveis das 8h à 1h, de segunda a sábado, para ajudar com configurações e problemas técnicos.',
      },
    ],
    beneficios: [
      {
        icone: 'nvme',
        titulo: 'Armazenamento NVMe',
        texto: 'Velocidade até 6x maior que SSDs tradicionais, garantindo carregamento rápido de artigos, imagens e vídeos.',
      },
      {
        icone: 'seo',
        titulo: 'SEO otimizado',
        texto: 'Ferramentas exclusivas como RankMath e WP Rocket para otimizar a visibilidade do seu conteúdo nos motores de busca.',
      },
      {
        icone: 'escalar',
        titulo: 'Escalabilidade sob demanda',
        texto: 'À medida que seu blog cresce, nossos servidores acompanham o aumento do tráfego sem comprometer a performance.',
      },
      {
        icone: 'backup',
        titulo: 'Backups automáticos',
        texto: 'Garantia de segurança com backups realizados a cada 12 horas, protegendo todo o seu conteúdo.',
      },
    ],
    faq: [
      {
        p: 'A hospedagem é adequada para blogs com alto tráfego?',
        r: 'Sim, nossa infraestrutura é preparada para lidar com picos de acessos em blogs e portais de grande porte.',
      },
      faqTier3,
      faqSuporte,
      faqTecnologias,
      faqMigracao,
      faqBrasil,
      faqPagamento,
      faqBackupSim,
      faqEscalar,
    ],
    resumoHub:
      'Para quem publica com frequência e depende de busca orgânica. Carregamento rápido, alta disponibilidade e RankMath e WP Rocket já inclusos.',
  },

  {
    slug: 'containers',
    nome: 'Container',
    titulo: 'Hospedagem em Container — isolamento e CPU dedicada — Turbo Cloud',
    descricao:
      'Container com ambiente isolado, CPU e memória exclusivas e configuração sob medida, em datacenter TIER III no Brasil. Para projetos que exigem desempenho constante.',
    eyebrow: 'Container',
    h1: 'Desempenho dedicado e isolamento total',
    h1Verde: 'para o seu projeto.',
    lead: 'Cada container roda sozinho: o consumo de outro cliente não chega até você. Recursos exclusivos, ambiente customizável e a mesma estrutura TIER III.',
    badges: ['Ambiente isolado', 'Recursos dedicados', 'Migração grátis'],
    aPartirDe: 200,
    abaPlanos: 'container',
    planosTitulo1: 'Planos de Container',
    planosTitulo2a: 'para o seu',
    planosTitulo2b: 'projeto.',
    planosTexto: 'Recursos exclusivos, isolamento total e liberdade para configurar o ambiente.',
    porque: [
      {
        icone: 'isolamento',
        titulo: 'Isolamento total',
        texto: 'Cada ambiente funciona de forma independente, eliminando o impacto de outros usuários no desempenho.',
      },
      {
        icone: 'cpu',
        titulo: 'Recursos dedicados',
        texto: 'Memória, CPU e armazenamento configurados exclusivamente para o seu projeto.',
      },
      {
        icone: 'escalar',
        titulo: 'Escalabilidade sob demanda',
        texto: 'Ajuste os recursos do seu ambiente conforme suas necessidades crescem, sem interrupções.',
      },
      {
        icone: 'custom',
        titulo: 'Ambiente customizado',
        texto: 'Instale bibliotecas, aplicativos e configurações específicas para atender às demandas do seu projeto.',
      },
    ],
    beneficios: [
      {
        icone: 'custom',
        titulo: 'Configuração personalizada',
        texto: 'Crie ambientes sob medida para as necessidades do seu projeto, com controle total sobre as tecnologias utilizadas.',
      },
      {
        icone: 'velocidade',
        titulo: 'Performance superior',
        texto: 'O isolamento garante recursos dedicados, resultando em estabilidade e alta performance constante.',
      },
      {
        icone: 'monitor',
        titulo: 'Alta disponibilidade',
        texto: `Mantenha seu projeto no ar mesmo em situações de pico, na estrutura TIER III com ${provas.uptimeTier3} de disponibilidade.`,
      },
      {
        icone: 'nvme',
        titulo: 'Armazenamento NVMe',
        texto: 'Velocidade até 6x maior que SSDs tradicionais para tempos de resposta mais rápidos.',
      },
    ],
    faq: [
      {
        p: 'O que diferencia a hospedagem Container da compartilhada?',
        r: 'A hospedagem Container oferece recursos dedicados e ambientes isolados, garantindo maior performance, segurança e flexibilidade.',
      },
      {
        p: 'Os Containers são indicados para projetos críticos?',
        r: 'Sim, os Containers são ideais para aplicações que exigem estabilidade, alta disponibilidade e desempenho constante.',
      },
      faqTier3,
      {
        p: 'É possível personalizar o ambiente Container?',
        r: 'Sim, você pode configurar bibliotecas, aplicativos e tecnologias de acordo com suas necessidades específicas.',
      },
      faqSuporte,
      faqTecnologias,
      faqMigracao,
      faqBrasil,
      faqPagamento,
      faqBackupNao,
      faqEscalar,
    ],
    resumoHub:
      'Solução robusta para quem precisa de ambiente isolado e escalável. Infraestrutura flexível, recursos exclusivos e gerenciamento simplificado.',
  },

  {
    slug: 'cloud-vps',
    nome: 'Cloud / VPS',
    titulo: 'Cloud VPS com acesso root no Brasil — Turbo Cloud',
    descricao:
      'VPS com CPU, RAM e disco NVMe exclusivos, acesso root e monitoramento contínuo, em datacenter TIER III no Brasil. Para projetos de alta demanda de acessos.',
    eyebrow: 'Cloud / VPS',
    h1: 'Flexibilidade e performance',
    h1Verde: 'para projetos de alta demanda.',
    lead: 'Acesso root, ambiente isolado e recursos garantidos. Você monta o servidor do jeito que o projeto pede, sem dividir CPU com ninguém.',
    badges: ['Acesso root', 'Recursos dedicados', 'Monitoramento contínuo'],
    aPartirDe: 200,
    abaPlanos: 'vps',
    planosTitulo1: 'Planos VPS',
    planosTitulo2a: 'para a sua',
    planosTitulo2b: 'empresa.',
    planosTexto: 'Recursos garantidos, liberdade total de configuração e estrutura TIER III no Brasil.',
    porque: [
      {
        icone: 'custom',
        titulo: 'Flexibilidade total',
        texto: 'Configure o ambiente conforme suas necessidades específicas, com liberdade para instalar aplicações e ajustar recursos.',
      },
      {
        icone: 'cpu',
        titulo: 'Recursos dedicados',
        texto: 'Garantia de CPU, RAM e armazenamento exclusivos para o seu projeto.',
      },
      {
        icone: 'escalar',
        titulo: 'Escalabilidade sob demanda',
        texto: 'Expanda ou reduza os recursos do servidor conforme o crescimento do seu projeto.',
      },
      {
        icone: 'suporte',
        titulo: 'Suporte especializado',
        texto: 'Disponível no WhatsApp das 8h à 1h, de segunda a sábado, e por ticket nos demais horários.',
      },
    ],
    beneficios: [
      {
        icone: 'custom',
        titulo: 'Configuração personalizada',
        texto: 'Monte seu ambiente conforme as necessidades específicas do seu projeto, com total liberdade para ajustes e otimizações.',
      },
      {
        icone: 'velocidade',
        titulo: 'Performance de alto nível',
        texto: 'Recursos dedicados garantem estabilidade e eficiência, mesmo em picos de tráfego.',
      },
      {
        icone: 'nvme',
        titulo: 'Armazenamento NVMe',
        texto: 'Velocidade de leitura e gravação até 6x maior que SSDs tradicionais.',
      },
      {
        icone: 'monitor',
        titulo: 'Monitoramento contínuo',
        texto: 'Sistema de monitoramento acompanha o servidor 24 horas por dia, para agir antes que o problema chegue no seu projeto.',
      },
    ],
    faq: [
      {
        p: 'O que diferencia o VPS da hospedagem compartilhada?',
        r: 'O VPS oferece recursos dedicados, ambiente isolado e controle total, garantindo maior performance e segurança.',
      },
      {
        p: 'Posso personalizar o ambiente VPS?',
        r: 'Sim, você pode configurar o servidor de acordo com as necessidades específicas do seu projeto.',
      },
      {
        p: 'Tenho acesso aos plugins premium na VPS?',
        r: 'Não. O serviço de VPS não inclui o fornecimento ou o acesso a licenças de plugins premium do WordPress. Como o ambiente é totalmente seu, você tem liberdade para instalar qualquer ferramenta, mas a compra e o gerenciamento de licenças pagas de terceiros ficam sob sua responsabilidade.',
      },
      {
        p: 'O VPS é adequado para projetos críticos?',
        r: 'Sim, nossa infraestrutura é projetada para lidar com alta demanda e tráfego intenso.',
      },
      faqTier3,
      faqSuporte,
      faqMigracao,
      faqBrasil,
      faqPagamento,
      faqBackupNao,
    ],
    resumoHub:
      'Para projetos que demandam recursos dedicados e personalização. Servidores virtuais com controle total, acesso root e escalabilidade.',
  },

  {
    slug: 'servidor-para-e-mail',
    nome: 'Servidor de e-mail',
    titulo: 'Servidor de e-mail profissional para empresas — Turbo Cloud',
    descricao:
      'Servidor exclusivo para e-mail corporativo, com contas ilimitadas, SMTP profissional e proteção contra spam. Planos de 20GB a 320GB, a partir de R$ 20/mês.',
    eyebrow: 'Servidor para e-mail',
    h1: 'Confiabilidade e segurança',
    h1Verde: 'para seus e-mails corporativos.',
    lead: 'E-mail separado do site: se a hospedagem cair ou o site for atacado, a comunicação da empresa continua de pé. Contas ilimitadas e SMTP profissional em todos os planos.',
    badges: ['Contas ilimitadas', 'Servidor exclusivo', 'Migração grátis'],
    aPartirDe: 20,
    abaPlanos: null,
    planosTitulo1: 'Planos de e-mail',
    planosTitulo2a: 'para a sua',
    planosTitulo2b: 'empresa.',
    planosTexto:
      'Todos os planos têm servidor exclusivo para e-mail, contas ilimitadas e SMTP profissional. O que muda é o espaço total.',
    porque: [
      {
        icone: 'entrega',
        titulo: 'Alta taxa de entrega',
        texto: 'Garanta que seus e-mails cheguem ao destino sem cair em caixas de spam.',
      },
      {
        icone: 'escudo',
        titulo: 'Proteção robusta',
        texto: 'Bloqueio avançado contra spam, phishing e ataques cibernéticos.',
      },
      {
        icone: 'caixa',
        titulo: 'Armazenamento seguro',
        texto: 'Salve e-mails e anexos com total proteção em servidores dedicados.',
      },
      {
        icone: 'plugue',
        titulo: 'Compatibilidade universal',
        texto: 'Configure facilmente com os principais clientes de e-mail, como Outlook e Gmail.',
      },
    ],
    beneficios: [],
    faq: [
      {
        p: 'Como funciona o servidor de e-mail da TurboCloud?',
        r: 'Nossos servidores são otimizados para garantir alta taxa de entrega, proteção contra spam e armazenamento seguro.',
      },
      {
        p: 'É possível migrar minhas contas de e-mail atuais?',
        r: 'Sim, nossa equipe realiza a migração de forma gratuita e sem complicações.',
      },
      {
        p: 'O servidor de e-mail é compatível com Outlook e Gmail?',
        r: 'Sim, você pode integrar facilmente nossas configurações aos principais clientes de e-mail.',
      },
      {
        p: 'Qual é a capacidade de armazenamento dos planos?',
        r: 'Os planos vão de 20GB a 320GB de espaço total, com contas ilimitadas em todos eles.',
      },
      faqTier3,
      faqSuporte,
      faqMigracao,
      faqBrasil,
      faqPagamento,
      faqBackupNao,
    ],
    resumoHub:
      'Serviço dedicado para a comunicação da empresa. Alta entregabilidade, proteção contra spam e contas ilimitadas, sem depender do servidor do site.',
  },
] as const

/* --------------------------------------------------------------------- */
/* Planos de e-mail — grade própria, não cabe no card de 4 colunas        */
/* --------------------------------------------------------------------- */
/*  Preços e links conferidos em /hospedagem/servidor-para-e-mail/.
 *  O slug do plano de 150GB é mesmo `email-130gb-3` no WHMCS — é assim que
 *  o site atual linka. Não é erro de digitação daqui. */

const LOJA_EMAIL = 'https://app.turbocloud.com.br/store/servidor-de-email'

export const planosEmail = [
  { gb: 20, preco: 20, slug: 'email-20gb' },
  { gb: 30, preco: 30, slug: 'email-30gb' },
  { gb: 50, preco: 50, slug: 'email-50gb' },
  { gb: 75, preco: 75, slug: 'email-75gb', destaque: true },
  { gb: 100, preco: 100, slug: 'email-100gb' },
  { gb: 130, preco: 130, slug: 'email-130gb' },
  { gb: 150, preco: 150, slug: 'email-130gb-3' },
  { gb: 200, preco: 200, slug: 'email-200gb' },
  { gb: 320, preco: 320, slug: 'email-320gb' },
].map((p) => ({ ...p, href: `${LOJA_EMAIL}/${p.slug}` }))

export const recursosEmail = [
  'Servidor exclusivo para e-mails',
  'E-mail profissional no seu domínio',
  'Contas ilimitadas',
  'SMTP profissional',
  'AntiSpam Pro',
] as const

/* --------------------------------------------------------------------- */
/* Bloco de segurança — igual em toda página de produto                   */
/* --------------------------------------------------------------------- */

export const seguranca = {
  texto:
    'Cansado de lidar com invasão, vírus e dor de cabeça? Aqui a história é outra: além do suporte por WhatsApp e ticket, você conta com proteção em várias camadas e um time que resolve o problema em vez de abrir chamado.',
  itens: [
    {
      icone: 'escudo',
      titulo: 'AntiBrute Force',
      texto:
        'Sistema avançado de proteção para WordPress e demais CMS. Barra tentativa de invasão por força bruta no painel administrativo.',
    },
    {
      icone: 'monitor',
      titulo: 'AntiVírus em tempo real',
      texto:
        'Usamos o Malware Expert, um dos melhores antimalware do mercado. O escaneamento acontece em tempo real, não uma vez por dia.',
    },
    {
      icone: 'backup',
      titulo: 'Servidores de contingência',
      texto:
        'Serviço adicional que espelha seu site em outro datacenter, de forma automática, para o caso de precisar do projeto no ar de qualquer jeito.',
    },
  ],
} as const satisfies { texto: string; itens: readonly Beneficio[] }

/* --------------------------------------------------------------------- */
/* Hub /hospedagem/                                                       */
/* --------------------------------------------------------------------- */

export const hub = {
  titulo: 'Hospedagem de sites, Container, VPS e e-mail — Turbo Cloud',
  descricao:
    'Todas as soluções de nuvem da Turbo Cloud num lugar só: hospedagem WordPress e WooCommerce, blogs e portais, Container, Cloud VPS e servidor de e-mail. Servidores no Brasil.',
  eyebrow: 'Soluções de nuvem',
  h1: 'Uma solução para cada projeto',
  h1Verde: 'que precisa ficar no ar.',
  lead: 'Do site institucional ao servidor com acesso root. Todos rodam na mesma estrutura TIER III, com migração grátis feita pela nossa equipe.',
} as const

export const produtoPorSlug = (slug: string) => produtos.find((p) => p.slug === slug)

/** Usado no rodapé, no menu e na trilha. */
export const urlProduto = (slug: string) => `/hospedagem/${slug}/`
