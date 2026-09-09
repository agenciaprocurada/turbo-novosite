# TurboDeploy — análise de valor e base para a página de vendas

Data: 08/09/2026. Público: desenvolvedores que criam sites e aplicações com auxílio de IA e precisam publicá-los e operá-los.

**Natureza do documento:** análise do produto existente e proposta de posicionamento. As mensagens, a estrutura da página, os testes de marketing e as provas a produzir são **propostos**, não entregas já implementadas. Não há alteração funcional nem nova homologação de produção associada a este documento.

**Critério de evidência:** “Implementado” significa encontrado no código e na documentação consultados; não certifica a configuração atual de cada ambiente. “Parcial” indica uma capacidade incompleta ou dependente de ativação/homologação. “Planejado” indica evolução explicitamente documentada. Informações comerciais ausentes ficam como “A confirmar”. As hipóteses sobre compradores precisam ser validadas em entrevistas e dados de uso.

## 1. Conclusão estratégica

O principal valor do TurboDeploy é dar continuidade ao desenvolvimento com IA: receber o projeto, preparar sua execução, publicar um endereço e oferecer meios de acompanhar e atualizar a aplicação.

Para esse público, o resultado desejado é transformar código em algo que clientes e usuários possam acessar. A oportunidade comercial está na combinação de publicação pelo fluxo que o desenvolvedor já utiliza, automação da infraestrutura e controle sobre o que acontece depois do deploy.

**Posicionamento proposto:**

> TurboDeploy é a plataforma de publicação e hospedagem para quem desenvolve com IA: envie seu projeto pelo GitHub, pela CLI ou por um agente conectado e acompanhe suas versões, domínios e disponibilidade em um painel em português.

**Ideia principal da comunicação:** “Crie com IA. Publique com TurboDeploy.”

Os argumentos mais fortes, em ordem sugerida, são:

1. Continuidade entre criação com IA e publicação, com CLI, instruções para agentes e MCP.
2. Menos configuração de infraestrutura para os frameworks suportados.
3. Atualizações com verificação da aplicação e possibilidade de voltar a uma imagem anterior.
4. Domínio próprio, HTTPS e armazenamento persistente para projetos com usuários reais.
5. Visibilidade de publicações, disponibilidade e consumo de recursos.
6. Organização de projetos e equipes em uma experiência em português.

“Alta performance” é uma direção de posicionamento que ainda exige provas específicas. O repositório demonstra mecanismos de execução e gestão de recursos, mas não comprova superioridade de latência, capacidade de tráfego ou disponibilidade contratual.

## 2. Público prioritário e situações de compra

Os segmentos abaixo são hipóteses de trabalho, inferidas dos fluxos existentes e do público definido para esta análise.

| Segmento | Situação de compra | Benefício de maior interesse | Mensagem sugerida |
| --- | --- | --- | --- |
| Desenvolvedor independente que usa agentes de código | O projeto funciona localmente e precisa receber usuários | Publicar a partir do próprio fluxo de desenvolvimento | “Leve para a web o projeto que você construiu com IA.” |
| Freelancer de sites e aplicações | Precisa entregar, atualizar e acompanhar projetos de clientes | Repetir o processo de entrega com domínio próprio, histórico e organização | “Da aprovação do cliente à publicação, com um processo que você pode repetir.” |
| Criador de MVP ou micro-SaaS | Quer validar uma solução sem montar toda a infraestrutura | Hospedar frontend/API e acompanhar falhas e versões | “Publique seu MVP e acompanhe sua evolução em um só lugar.” |
| Pequena agência ou equipe | Várias pessoas e projetos exigem organização | Organizações, convites, papéis e autoria de publicações | “Organize projetos e acessos da equipe para manter as entregas em dia.” |
| Desenvolvedor migrando um projeto gerado em uma ferramenta de IA | Já possui código exportável e quer outra hospedagem | Usar GitHub ou arquivos locais, conforme a compatibilidade da aplicação | “Seu código pode seguir para uma hospedagem que acompanha o seu fluxo.” |

**Perfil com melhor encaixe inicial:** pessoa que já tem um projeto executável, compreende ou consegue revisar com seu agente os comandos de build, variáveis e dependências, e quer reduzir o trabalho de infraestrutura. O benefício também alcança iniciantes, mas a promessa de “nenhum conhecimento técnico” excede a experiência atual.

**Limites do público:** a plataforma hospeda sites, aplicações web e APIs. Pode hospedar o backend de um aplicativo móvel; publicação em App Store ou Google Play não foi identificada como recurso. Criar software com IA também não implica hospedagem de modelos: GPU, treinamento e inferência de modelos grandes não fazem parte da oferta comprovada.

## 3. Dores, transformação e valor percebido

| Dor provável | Resposta do produto | Transformação percebida |
| --- | --- | --- |
| “A IA fez o projeto, mas ele só roda no meu computador.” | Envio por CLI ou conexão do GitHub, build e publicação | Ter um endereço que pode ser compartilhado e usado |
| “Não quero administrar Docker, proxy e certificados.” | Geração de Dockerfile nos presets, execução e integração de domínio/SSL | Concentrar esforço na aplicação e em seus usuários |
| “Toda atualização exige repetir procedimentos.” | Deploy por push e comandos reaproveitáveis | Transformar publicação em uma rotina |
| “Tenho receio de publicar uma versão com problema.” | Health check antes da troca de tráfego, histórico e rollback | Ter mecanismos concretos para reduzir o risco da atualização |
| “Não sei em qual etapa o deploy falhou.” | Logs por etapa, status e diagnóstico de falha de memória | Investigar a causa com informação útil para a pessoa ou o agente |
| “Meu projeto precisa guardar uploads.” | Volume persistente configurável | Preservar os arquivos gravados no volume entre publicações |
| “Quero entregar com o domínio do cliente.” | Domínios próprios, diagnóstico DNS e HTTPS | Apresentar o projeto no endereço da marca |
| “Tenho vários projetos e pessoas acessando.” | Organizações, papéis, convites e autoria | Manter contexto e acesso organizados |
| “Quero saber quando o aplicativo apresenta problemas.” | Verificações periódicas, incidentes e notificações no painel | Acompanhar a operação após a publicação |

O ganho emocional proposto é a confiança de conseguir publicar, entender o estado da aplicação e agir quando necessário. O ganho econômico potencial vem de reduzir trabalho repetitivo, retrabalho de entrega e tempo dedicado à infraestrutura; esses resultados ainda precisam de casos reais para serem quantificados.

## 4. Vantagens comprovadas e sua tradução comercial

### 4.1. Publicação no fluxo de trabalho com IA

**Implementado.** A CLI publica o diretório local. O comando `turbodeploy agents` gera instruções específicas do projeto em arquivos usados por agentes, incluindo `AGENTS.md`, `CLAUDE.md`, `GEMINI.md` e regra para Cursor. Essas instruções cobrem publicação, diagnóstico, rollback e cuidados com credenciais.

O conector MCP permite listar projetos, consultar deployments e seus logs, solicitar deploy do repositório conectado, cancelar e fazer rollback, conforme os escopos autorizados. Usa OAuth e permite revogar a conexão no painel. As ferramentas de escrita exigem confirmação na chamada e instruem o agente a obter autorização da pessoa.

**Benefício:** o desenvolvedor pode pedir ao agente que participe da entrega com contexto real do projeto, reduzindo a necessidade de ensinar os mesmos procedimentos a cada sessão.

**Mensagem proposta:** “Continue no seu fluxo com IA, da alteração do código ao acompanhamento da publicação.”

**Limite que precisa ficar claro:** MCP remoto publica o Git já conectado; não lê alterações locais ainda não enviadas. Para o diretório local, o caminho é a CLI. A conexão e a autenticação precisam ser configuradas, e a compatibilidade depende do cliente de IA utilizado. Não há evidência de uma IA própria que programe ou corrija autonomamente toda a aplicação.

Fontes: [MCP](MCP.md), [agentes](AI-AGENTS.md), [CLI](CLI.md).

### 4.2. Automação da infraestrutura de publicação

**Implementado.** O pipeline obtém o código, detecta o framework, gera Dockerfile quando necessário, constrói a imagem, inicia o container e configura a rota pública. O cliente pode fornecer seu próprio Dockerfile.

**Benefício:** elimina etapas manuais comuns de preparar o ambiente de hospedagem para projetos compatíveis. A pessoa continua responsável por uma aplicação que compila, inicia corretamente e tem suas dependências configuradas.

**Mensagem proposta:** “Envie o código. O TurboDeploy prepara a execução e publica sua aplicação.”

A detecção automática pode ser ajustada pelo painel. Porta, diretório raiz e variáveis continuam sendo configurações relevantes, especialmente em monorepos ou projetos com estrutura personalizada.

Fontes: [arquitetura](ARCHITECTURE.md), [detector](../apps/worker/src/detector.ts), [pipeline](../apps/worker/src/pipeline.ts).

### 4.3. Flexibilidade de tecnologias e origem do código

**Implementado.** Há 12 caminhos de framework/runtime: Next.js, Astro, React estático, Node.js, Express, NestJS, Laravel, Python, Go, Rust, .NET e Dockerfile próprio.

**Benefício:** atende diferentes projetos que uma pessoa ou agência pode desenvolver com IA, incluindo sites, interfaces, aplicações com servidor e APIs. GitHub e envio local oferecem caminhos distintos de publicação.

**Mensagem proposta:** “Publique sites, aplicações web e APIs com as tecnologias que você já usa.”

“12 caminhos suportados” é mais preciso que “qualquer linguagem, qualquer projeto”. Um Dockerfile amplia a flexibilidade, mas não equivale a suporte automático a Docker Compose, vários serviços, qualquer versão de framework ou dependência de infraestrutura.

Projetos exportados de ferramentas de criação com IA são candidatos quando o código e as dependências são compatíveis. Por exemplo, Lovable documenta exportação/sincronização com GitHub e publicação externa; isso permite avaliar o caminho Lovable → GitHub → TurboDeploy, mas não comprova uma integração nativa nem migração completa do backend. [Documentação oficial do Lovable](https://docs.lovable.dev/integrations/github).

Fonte interna: [contratos de frameworks](../packages/shared/src/index.ts). A [bateria de 03/08/2026](superpowers/reports/2026-08-03-bateria-frameworks.md) registra publicação pelos 12 caminhos, com ajustes em alguns casos; é evidência histórica de compatibilidade, não uma garantia universal.

### 4.4. Atualizações repetíveis pelo GitHub ou pela CLI

**Implementado.** Repositório e branch podem ser conectados para deploy automático por push. A CLI também aceita autenticação por variável de ambiente e execução sem interação para uso em CI.

**Benefício:** depois da configuração inicial, publicar deixa de exigir remontar manualmente o procedimento. Isso é especialmente útil para quem itera frequentemente com agentes de código.

**Mensagem proposta:** “Configure seu fluxo uma vez e publique as próximas versões pelo GitHub ou pela CLI.”

Há apenas um deploy em andamento por projeto. Prioridade de fila não significa interromper um build que já começou nem publicação instantânea.

Fontes: [visão geral](../README.md), [CLI](CLI.md), [fila](../apps/api/src/queue/queue.service.ts).

### 4.5. Verificação antes da troca de versão e recuperação

**Implementado.** O pipeline inicia o candidato e verifica sua resposta antes de trocar o tráfego. Em falha de publicação, tenta preservar/restabelecer a versão anterior quando ela existe. Também há cancelamento, redeploy e rollback reutilizando uma imagem disponível, sem recompilar o código.

**Benefício:** oferece proteção durante a atualização e um caminho de recuperação para quem publica com frequência.

**Mensagem proposta:** “Verifique a nova versão antes da troca de tráfego e volte a uma imagem anterior quando precisar.”

Não usar “zero downtime garantido” ou “a IA nunca derruba seu site”. O mecanismo não comprova drenagem de todas as conexões, continuidade em qualquer falha, validação de regras de negócio ou reversão de incidentes surgidos depois do deploy. Rollback de imagem não desfaz banco, arquivos persistentes ou mudanças de configuração; exige imagem retida e compatibilidade da aplicação com o estado atual dos dados.

Fontes: [pipeline](../apps/worker/src/pipeline.ts), [arquitetura](ARCHITECTURE.md), [CLI: rollback](CLI.md).

### 4.6. Endereço próprio e HTTPS

**Implementado, dependente da configuração operacional de DNS/SSL.** Cada projeto recebe um endereço da plataforma. Domínios próprios entram no proxy após comprovação de posse, com emissão de certificado e rotina de renovação. Há diagnóstico de DNS e SSL.

**Benefício:** o projeto pode ser entregue no domínio da marca, com conexão HTTPS e orientações de configuração.

**Mensagem proposta:** “Publique no seu domínio, com HTTPS e diagnóstico da configuração.”

Isso não inclui compra/registro de domínio, DNS instantâneo ou dispensa de acesso ao provedor DNS. A emissão do certificado depende da configuração correta e da infraestrutura em operação.

Fontes: [operação](OPERATIONS.md), [segurança](SECURITY.md).

### 4.7. Armazenamento persistente

**Implementado.** O projeto pode ativar volume e definir seu caminho de montagem. Os arquivos gravados nesse volume permanecem entre publicações e reinicializações. A organização acompanha consumo, histórico e alertas de armazenamento.

**Benefício:** viabiliza projetos que precisam conservar uploads e outros arquivos locais entre versões.

**Mensagem proposta:** “Preserve os arquivos da aplicação entre publicações com um volume persistente.”

O restante do filesystem do container é efêmero. O recurso exige ativação e uso do caminho correto. O driver local mede e controla admissões de volume, mas não impõe uma quota física de escrita. Persistência não equivale a backup, banco gerenciado ou replicação; SQLite e outros usos com escrita precisam de validação de concorrência, consistência e recuperação para a aplicação específica.

Fontes: [armazenamento na arquitetura](ARCHITECTURE.md), [runtime Docker](../apps/worker/src/docker.ts), [plano e uso](../apps/dashboard/components/org/PlanSection.tsx).

### 4.8. Visibilidade do deploy e da aplicação publicada

**Implementado.** O painel acompanha etapas e logs de deployment; a CLI acompanha a publicação. A área de disponibilidade mostra verificações, incidentes e métricas de CPU, memória e rede por projeto. Há notificações no painel e opção de reinício automático após falhas consecutivas.

**Benefício:** permite saber em que etapa ocorreu um problema e acompanhar sinais de saúde e consumo depois da entrega.

**Mensagem proposta:** “Acompanhe publicações, disponibilidade e recursos da aplicação no mesmo painel.”

Os checks periódicos acessam o endereço do projeto a cada minuto e usam resposta HTTP como sinal. Não validam jornadas completas, pagamentos, consultas ao banco ou todos os domínios externos. Reinício automático tenta recuperar a execução, mas não corrige código defeituoso. Métricas de rede não são analytics de visitantes ou prova de conversão.

O painel global de operações, filas, workers e backups é administrativo. Não apresentá-lo como acesso incluído para todo cliente. Logs de deploy também não equivalem a uma solução completa de APM e rastreamento distribuído.

Fontes: [arquitetura](ARCHITECTURE.md), [disponibilidade no painel](../apps/dashboard/components/project/AvailabilityTab.tsx), [acesso às métricas](../apps/api/src/operations/operations.controller.ts).

### 4.9. Recursos e prioridade conforme o plano

**Implementado no produto; configuração efetiva a confirmar por ambiente.** Há valores de CPU, memória e armazenamento por plano, limites ajustáveis e prioridade de fila para o Turbo. Builders específicos aplicam tetos aos recursos de compilação quando provisionados.

**Benefício:** tornar visível a capacidade disponível e oferecer um caminho para aplicações que precisam de mais recursos.

**Mensagem proposta:** “Escolha os recursos para publicar e executar seu projeto, com limites visíveis no painel.”

Não confundir teto com CPU física dedicada ou desempenho reservado. Os builders são compartilhados por plano e, quando ausentes no host, o worker usa um builder padrão com aviso. A afirmação “build mais rápido” precisa considerar fila, código, cache e concorrência; recursos maiores não garantem uma proporção fixa de redução do tempo.

Fontes: [limites de referência](../packages/shared/src/index.ts), [builders](../infra/builders.sh), [seleção do builder](../apps/worker/src/pipeline.ts).

### 4.10. Organizações, equipes e experiência em português

**Implementado.** Organizações pessoais e de equipe, convites e papéis organizam o acesso. O histórico registra autoria das publicações. O painel tem textos em português, busca de projetos e ações, ajuda pesquisável, temas claro/escuro e adaptação a telas pequenas.

**Benefício:** freelancers e equipes podem organizar a operação de vários projetos sem depender de uma única pessoa para cada publicação. A interface em português reduz a barreira de uso para parte do público brasileiro.

**Mensagem proposta:** “Organize os projetos da equipe e acompanhe as entregas em um painel em português.”

Papéis são concedidos por organização; membros podem gerenciar projetos da organização. Para separar acesso de clientes, a organização precisa refletir essa separação. Não prometer permissão granular por projeto, revenda com marca própria ou suporte humano 24 horas com base apenas nesses recursos.

Fontes: [tenancy](ARCHITECTURE.md), [papéis](../packages/shared/src/index.ts), [interface](UI-UX.md).

### 4.11. Proteção de credenciais e controle de acesso

**Implementado.** Há criptografia de variáveis, tratamento de segredos, 2FA, sessões revogáveis, tokens revogáveis e escopos no MCP. Variáveis sensíveis são excluídas dos argumentos de build; a CLI exclui arquivos `.env` do envio.

**Benefício:** oferece controles para publicar sem colocar credenciais nos arquivos de instrução dos agentes e para retirar acessos quando necessário.

**Mensagem proposta:** “Gerencie variáveis e acessos com controles próprios para a operação dos seus projetos.”

A proteção depende também de como o aplicativo e o agente tratam os dados. Não equivale a auditoria automática do código gerado, remoção de todo segredo dos logs, certificação de conformidade ou segurança absoluta. Isolamento em containers no mesmo daemon não deve ser vendido como máquina virtual dedicada.

Fontes: [segurança](SECURITY.md), [agentes](AI-AGENTS.md), [MCP](MCP.md).

### 4.12. Integrações operacionais e ecossistema Turbo

**Implementado com dependências de ativação.** Há webhooks de conclusão de deploy, notificações por e-mail quando configuradas, entrada pelo Painel Turbo via SSO e base de integração comercial com WHMCS.

**Benefício potencial:** conectar publicações a automações externas e facilitar o acesso de quem já utiliza o ecossistema Turbo.

A integração SSO tem implementação documentada mais recente que o registro de pendências comerciais. Ela não comprova que compra, cobrança e upgrade estejam homologados de ponta a ponta. Conforme o último registro operacional consultado, ativação dos e-mails e homologação comercial final permanecem pendentes; seu estado atual deve ser confirmado antes de entrar na oferta.

Fontes: [SSO](PANEL-SSO.md), [WHMCS](../integrations/whmcs/README.md), [pendências registradas em 01/09](NEXT-STEPS.md).

## 5. Como sustentar o posicionamento de alta performance

É necessário separar três resultados, pois cada um exige uma prova diferente:

| Dimensão | O que já sustenta um benefício | O que ainda deve ser medido |
| --- | --- | --- |
| Agilidade do trabalho | CLI, agentes, GitHub e pipeline automático | Tempo e etapas do primeiro deploy; taxa de sucesso de novos usuários |
| Velocidade de publicação | Builders, prioridade por plano, reutilização de imagem no rollback | Tempo de fila, build e publicação por framework, com cache frio/quente e concorrência |
| Desempenho da aplicação | Execução em container, limites de recursos, proxy e métricas; gzip no preset Astro estático | Latência p50/p95/p99, vazão, erros e consumo sob carga representativa |

Os mecanismos existentes permitem falar em automação, recursos configuráveis e acompanhamento. Não demonstram que a hospedagem é “a mais rápida”, “10 vezes superior” ou capaz de receber tráfego ilimitado.

A bateria histórica dos 12 frameworks é uma prova de execução dos caminhos de publicação. Seus tempos variam por projeto e ambiente; ela não mede desempenho comparativo de aplicações em produção nem representa a capacidade atual de todos os planos. [Relatório da bateria](superpowers/reports/2026-08-03-bateria-frameworks.md).

**Provas propostas antes de usar números na campanha:**

1. Testar um site estático, um app SSR e uma API com projetos reproduzíveis, plano e versões declarados.
2. Medir latência, erros e vazão a partir das regiões onde estão os compradores; registrar banco, cache e tamanho das respostas.
3. Separar os tempos de fila, build, subida e preparação de HTTPS no primeiro deploy e nas atualizações.
4. Repetir medições sob concorrência e registrar hardware, limites, data e metodologia.
5. Medir atualizações sob tráfego para avaliar falhas e conexões interrompidas.
6. Usar histórico observado de disponibilidade e termos aprovados para qualquer SLA.

CPU, NVMe, localização do datacenter, rede, CDN, proteção DDoS, banda, suporte e SLA estão **a confirmar** como condições comerciais. Especificações de cluster ou infraestrutura futura não são prova de infraestrutura entregue ao cliente.

**Formulação utilizável com a evidência atual:** “Hospedagem com publicação automatizada, recursos definidos e acompanhamento da aplicação.” Uma headline específica de alta performance deve ser acompanhada de evidência verificável e escopo de plano.

## 6. Estado real dos recursos que exigem cuidado na oferta

| Recurso/afirmação | Estado encontrado | Tratamento recomendado |
| --- | --- | --- |
| CLI, GitHub, instruções para agentes e MCP | Implementado | Demonstrar o fluxo e informar os pré-requisitos |
| Health check, preservação da versão anterior e rollback de imagem | Implementado | Explicar o mecanismo; evitar disponibilidade absoluta |
| Prévia de configuração e variáveis `PRODUCTION`/`PREVIEW` | Parcial como ambiente de testes | Não anunciar URL isolada por branch/PR; a API revisa configuração e o fluxo atual publica no destino do projeto |
| Backups manuais/agendados de banco da plataforma e volumes | Implementado; proteção externa parcial | Benefício operacional condicionado à política; destino externo ainda pendente no último registro |
| Restauração | Procedimento documentado; validação registrada no estado do projeto | Não prometer restauração instantânea ou botão de restauração por cliente |
| Alertas por e-mail | Implementado; ativação pendente no último registro | Prometer o canal somente após confirmar remetente, credenciais e envio real |
| Métricas e incidentes por projeto | Implementado | Mostrar a visão disponível ao cliente |
| Grafana/alertas externos | Parcial; coletor preparado | Não anunciar como serviço externo ativo |
| Execução em múltiplos servidores e isolamento por microVM | Planejado | Não anunciar cluster ativo, failover ou escala horizontal automática |
| Planos e solicitação de upgrade | Implementado | Apresentar limites efetivos; o painel registra solicitação |
| Compra e cobrança WHMCS completas | Parcial na operação comercial registrada | Confirmar homologação antes de prometer ativação automática após pagamento |
| SSO do Painel Turbo | Implementado; ativação depende da integração | Usar como conveniência de acesso, sem presumir cobrança unificada concluída |
| Scanner de imagens/dependências | Planejado | Não prometer revisão automática do código gerado por IA |
| GPU, bancos gerenciados, CDN global, autoscaling | Não demonstrados como oferta implementada | Não incluir como benefícios contratados |

O arquivo [NEXT-STEPS.md](NEXT-STEPS.md) chama parte do trabalho de “preview” e “publicação sem indisponibilidade”. A análise usa o escopo mais restrito confirmado na [API de prévia](../apps/api/src/deployments/deployments.service.ts) e no [pipeline](../apps/worker/src/pipeline.ts). A revisão de configuração não é um ambiente de homologação isolado.

## 7. Diferenciação competitiva defensável

MCP é relevante para o público, mas não deve ser apresentado como exclusividade. Vercel documenta MCP remoto para acesso a projetos, deployments e logs; Railway também documenta um servidor MCP. [Documentação da Vercel](https://vercel.com/docs/agent-resources/vercel-mcp), [documentação da Railway](https://docs.railway.com/ai/mcp-server). Consulta em 08/09/2026; este recorte não é uma auditoria completa de concorrentes ou preços.

**Inferência de posicionamento:** a diferenciação do TurboDeploy deve ser demonstrada pelo conjunto da experiência: instruções de agente com contexto do projeto, publicação por CLI/GitHub/MCP, tecnologias variadas, volumes e acompanhamento em português, com continuidade no ecossistema Turbo quando ativada.

| Alternativa considerada pelo comprador | Critério de decisão | Argumento para demonstrar no TurboDeploy |
| --- | --- | --- |
| Operar uma VPS por conta própria | Quanto trabalho a pessoa quer assumir | Mostrar as etapas de build, execução, proxy e certificados automatizadas |
| Permanecer na hospedagem da ferramenta de criação | Código exportável, dependências e autonomia desejada | Demonstrar a publicação de um projeto compatível e explicar o que continua em serviços externos |
| Escolher outra PaaS | Adequação ao projeto, experiência, limites, preço e suporte | Mostrar o fluxo completo e comparar condições reais, sem alegar exclusividade de recursos comuns |
| Adiar a publicação | Dificuldade e risco percebidos do primeiro deploy | Exibir uma primeira publicação real e o caminho de diagnóstico |

Evitar comparar caricaturas: existem VPS gerenciadas e outras plataformas com automação, persistência, suporte e agentes. “Melhor para este fluxo e este público” é uma hipótese para validar; superioridade geral não está demonstrada.

Acesso ao código e uso de containers podem facilitar portabilidade, mas migração também envolve dados, volumes, segredos, DNS e serviços externos. Não usar “zero dependência” ou “migração em um clique”.

## 8. Planos, oferta e valor econômico

O código define dois planos de referência. A tabela abaixo registra a configuração encontrada e **não constitui uma oferta comercial homologada**:

| Referência no produto | Grátis | Turbo | Escopo |
| --- | --- | --- | --- |
| CPU do builder | 2 vCPUs | 3 vCPUs | Teto do builder compartilhado do plano, quando configurado |
| Memória do builder | 3 GB | 4 GB | Recurso de compilação; não é memória da aplicação |
| Fila | Normal | Prioritária | Ordenação de jobs pendentes |
| CPU da aplicação | 0,5 vCPU | 1 vCPU | Referência do plano; conferir limites efetivos/overrides |
| Memória da aplicação | 512 MB | 1 GB | Referência do plano; conferir limites efetivos/overrides |
| Volume persistente total | 1 GB | 20 GB | Cota compartilhada pelos projetos da organização |

Fonte: [PLAN_LIMITS](../packages/shared/src/index.ts). A execução usa também valores da organização, do projeto e do ambiente. O [painel de plano](../apps/dashboard/components/org/PlanSection.tsx) apresenta solicitação de upgrade com ativação pela equipe, sem cobrança automática nesse fluxo.

**Função proposta de cada plano:** Grátis como entrada para experimentar a publicação; Turbo para quem precisa de mais recursos, prioridade e armazenamento. Confirmar elegibilidade, política de uso e limites antes de transformar essa função em promessa pública.

**Oferta ainda precisa definir:** preço e moeda, ciclo de cobrança, número de projetos e membros, domínio próprio por plano, banda/egress, limites de build/upload, retenção de imagens e backups, suporte, política de uso e condições de cancelamento. Não assumir “ilimitado”, “sem cartão”, “sem taxas extras” ou “grátis para sempre”.

**Valor econômico a investigar:** tempo operacional poupado por projeto, frequência de atualização, tempo de recuperação e número de entregas que a pessoa consegue manter. Comparar esses ganhos observados com a assinatura e os serviços externos necessários. Não prometer economia percentual, aumento de receita ou margem sem dados de clientes.

Suspensão de cobrança bloqueia novas operações e preserva aplicações/volumes no comportamento implementado. Isso é um cuidado operacional, não uma promessa comercial de hospedagem gratuita indefinida após cancelamento; a política pública de retenção precisa ser definida.

## 9. Casos de uso para exemplificar na página

| Caso | Jornada a demonstrar | Resultado verificável | Dependência a explicar |
| --- | --- | --- | --- |
| Site institucional criado com IA | Projeto React/Astro → envio → domínio próprio | Site acessível em HTTPS | Build e DNS corretos |
| MVP com frontend e API | Código compatível → variáveis → deploy → logs | Fluxo web acessível e operação acompanhável | Banco, autenticação e serviços externos conforme a arquitetura |
| Aplicação que consome uma API de IA | Aplicação web → credencial sensível → publicação | Interface/API hospedada chamando o provedor configurado | Conta, custos e limites do provedor de IA não estão incluídos |
| Portal que recebe uploads | Ativar volume → configurar caminho → publicar uma atualização | Arquivo de demonstração preservado no volume | Persistência e backup são responsabilidades distintas |
| Agência com vários clientes | Organizações apropriadas → projetos → membros → histórico | Acessos e entregas organizados | Permissões valem por organização |

Selecionar dois ou três casos reais para a página principal. Exemplos, vídeos e capturas devem identificar claramente o que é demonstração. Não inventar clientes, depoimentos ou resultados.

## 10. Objeções e respostas propostas para o FAQ

**Preciso saber Docker ou administrar uma VPS?** Nos frameworks suportados, o TurboDeploy gera a configuração de build e executa a publicação. Você precisa fornecer um projeto compatível e configurar suas variáveis e dependências; casos personalizados podem exigir Dockerfile.

**Posso publicar com o agente de IA que uso para programar?** Há instruções para agentes e conexão MCP para clientes compatíveis. Após configurar acesso e projeto, o agente pode participar da publicação e consultar os logs dentro das permissões concedidas.

**Preciso colocar o código no GitHub?** Não para o envio local pela CLI. GitHub é o caminho para deploy automático por push e para a ação de publicação do MCP remoto.

**Funciona com meu projeto criado no Lovable, Bolt ou outra ferramenta?** A origem da criação não basta para garantir compatibilidade. É necessário ter código exportável e verificar framework, build, variáveis, banco e serviços externos. O caminho genérico é código/GitHub → TurboDeploy; não anunciar conector nativo sem implementação e teste.

**Posso usar meu domínio?** Sim, com comprovação de posse e configuração DNS. O HTTPS depende da configuração e emissão do certificado. O registro do domínio é uma contratação separada, salvo oferta comercial explícita.

**O que acontece se uma atualização falhar?** A nova execução é verificada antes de assumir o tráfego. O pipeline procura preservar a versão anterior quando ela existe; também há rollback para uma imagem disponível. Isso não desfaz alterações nos dados.

**Os uploads permanecem depois de atualizar?** Sim, quando gravados no volume persistente ativado e no caminho configurado. Arquivos fora dele continuam sujeitos ao ciclo de vida do container.

**Banco de dados e créditos de IA estão incluídos?** A documentação não comprova banco gerenciado para clientes nem créditos de provedores de IA na oferta. Dependências da aplicação precisam ser identificadas e contratadas/configuradas conforme o projeto.

**Consigo testar uma versão em uma URL separada antes de publicar?** A prévia atual revisa a configuração. Não foi comprovado um ambiente isolado automático por branch ou pull request; não anunciar esse recurso como entregue.

**Minha aplicação escala automaticamente?** A execução documentada ocorre no nó local, com recursos definidos e possíveis ajustes de plano/configuração. Escala horizontal automática não é uma capacidade comprovada da oferta atual.

**Qual é o suporte, preço e SLA?** Essas respostas devem receber as condições comerciais aprovadas. Interface em português e central de ajuda não comprovam atendimento humano 24 horas nem um nível contratual de disponibilidade.

## 11. Mensagens e hierarquia propostas para a página

**Headline principal:**

> Crie com IA. Publique com TurboDeploy.

**Subheadline:**

> Leve seus sites, aplicações web e APIs para a internet pelo GitHub, pela CLI ou com um agente conectado. Publique no seu domínio e acompanhe versões, logs e disponibilidade em um painel em português.

**Alternativas para testar:**

- “Seu projeto criado com IA, pronto para chegar aos usuários.”
- “Da criação com IA à aplicação publicada.”
- Para agências: “Publique e acompanhe os projetos dos seus clientes em um só lugar.”

**Mensagens de apoio, por ordem de leitura:**

1. Publique pelo fluxo que você já utiliza.
2. Automatize build e configuração da hospedagem nos frameworks suportados.
3. Use domínio próprio, HTTPS e arquivos persistentes quando seu projeto precisar.
4. Acompanhe as versões e tenha um caminho de rollback.
5. Veja o consumo e a disponibilidade da aplicação.

**CTA proposto:** “Publicar meu projeto”, direcionado ao fluxo de cadastro/projeto disponível. “Começar grátis” depende de confirmar as condições públicas do plano gratuito. Para o upgrade atual, “Solicitar plano Turbo” descreve melhor o comportamento do que um botão que prometa compra e ativação imediatas.

Evitar “cole um prompt e tudo estará resolvido”, “qualquer app sem configuração”, “sem limite”, “nunca cai” e promessas de receita. A redação deve apresentar resultados concretos antes dos nomes de protocolos e componentes.

## 12. Sequência proposta da página de vendas

| Ordem | Bloco | Pergunta que resolve | Conteúdo/prova |
| --- | --- | --- | --- |
| 1 | Promessa inicial e CTA | “Isso serve para o que eu construo?” | Headline, público, tipos de projeto e ação principal |
| 2 | Demonstração de publicação | “Como funciona na prática?” | Captura/vídeo real: projeto → deploy → URL acessível |
| 3 | Três caminhos de entrada | “Preciso mudar meu fluxo?” | GitHub, CLI e agente conectado, com pré-requisitos claros |
| 4 | Benefícios da operação | “O que recebo além do endereço?” | Domínio, HTTPS, logs, volumes, disponibilidade e rollback |
| 5 | Tecnologias e casos | “Meu projeto é compatível?” | Frameworks e exemplos reais, com links para requisitos |
| 6 | Evidências de desempenho | “Por que confiar na hospedagem?” | Testes reproduzíveis; até existirem, mostrar recursos e comportamento observável |
| 7 | Equipes e continuidade | “Consigo manter meus projetos aqui?” | Organizações, acessos, histórico e métricas |
| 8 | Planos e condições | “Quanto custa e quais são os limites?” | Preço aprovado, recursos, escopo e forma de ativação |
| 9 | Prova social | “Outras pessoas tiveram esse resultado?” | Casos e depoimentos autorizados, quando disponíveis |
| 10 | FAQ e CTA final | “O que ainda impede meu primeiro deploy?” | Respostas às objeções e retorno à ação principal |

**Demonstração principal sugerida:** um projeto pequeno real, publicado pela CLI/agente ou pelo GitHub, seguido de acesso público, uma atualização e visualização dos logs. Identificar tempo de vídeo editado; não usar corte para insinuar que o tempo total de deploy foi menor. Uma demonstração complementar pode mostrar arquivo persistente e rollback de imagem.

## 13. Provas e decisões necessárias para fechar a oferta

| Item | Evidência/decisão necessária | Finalidade |
| --- | --- | --- |
| Compatibilidade | Homologação atual dos frameworks anunciados e exemplos com dependências reais | Reduzir promessas amplas demais |
| Agentes | Gravação do fluxo de conexão, confirmação, deploy e diagnóstico | Mostrar continuidade com IA |
| Performance | Resultados reproduzíveis, hardware/plano, região e método | Sustentar adjetivos e números de velocidade |
| Atualização | Teste sob tráfego e explicação do escopo de rollback | Demonstrar recuperação sem garantia absoluta |
| Persistência | Arquivo preservado entre deploys e teste de restauração | Demonstrar o comportamento dos dados |
| Backup externo | Destino fora do host, retenção e restauração documentados | Definir proteção e recuperação oferecidas |
| Oferta | Preço, elegibilidade, limites, contratação e ativação | Permitir que o CTA corresponda ao fluxo real |
| Suporte | Canal, horário, escopo e prazo de resposta | Transformar suporte em benefício verificável |
| Credibilidade | Casos reais e autorização de uso | Produzir prova social sem números fictícios |

Esses itens são preparação proposta para a página. Não foram executados benchmarks, disparos de e-mail, compras, novas publicações ou testes de restauração nesta análise.

## 14. Validação comercial proposta

Testar primeiro a mensagem centrada em “publicar o projeto criado com IA” e uma variante centrada em “manter aplicações de clientes”. A motivação de um criador solo pode diferir da de uma agência; o uso de IA, por si só, não define a compra.

Medir o caminho entre visita, clique no CTA, cadastro, projeto criado, primeiro deploy e primeiro acesso confirmado à aplicação. Complementar com tempo até o primeiro sucesso, motivo das falhas, segundo deploy, retenção e solicitações/ativações do Turbo. Esses indicadores são propostos, não analytics já implementados.

Entrevistas devem investigar o último projeto publicado, onde houve dificuldade, qual hospedagem foi considerada, quais custos e dependências permaneceram e o que levou à confiança para entregar a um cliente. Usar relatos concretos para revisar a linguagem da página.

## 15. Fontes e manutenção

A análise prioriza fontes do próprio produto: [visão geral](../README.md), [arquitetura](ARCHITECTURE.md), [API](API.md), [CLI](CLI.md), [agentes](AI-AGENTS.md), [MCP](MCP.md), [segurança](SECURITY.md), [operações](OPERATIONS.md), [observabilidade](OBSERVABILITY.md), [pendências](NEXT-STEPS.md), [SSO](PANEL-SSO.md), [WHMCS](../integrations/whmcs/README.md) e os arquivos de implementação citados junto aos argumentos.

As referências externas são um recorte de documentação oficial sobre MCP e portabilidade, citadas nas seções correspondentes. Não foram usados depoimentos inventados, dados de mercado, preços de concorrentes ou suposições sobre infraestrutura como prova de resultado.

Antes de usar este documento em uma campanha, atualizar as condições comerciais e conferir a ativação dos recursos dependentes de ambiente. Mudanças no produto devem atualizar o argumento correspondente e seu estado de implementação.
