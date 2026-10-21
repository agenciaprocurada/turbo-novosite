# CAPI Worker — rastreamento server-side do Meta (Turbo Cloud)

Este Worker recebe os eventos que o `/tracking.js` dispara no navegador e os
reenvia ao Meta **pelo servidor**, com o mesmo `event_id`. O Meta deduplica:

- os dois chegaram → conta **uma** conversão;
- o navegador foi bloqueado (adblock, iOS, aba fechada) → o servidor garante.

Herdado do projeto `sapabap` (infoproduto, validado em produção) e adaptado ao
funil de hospedagem — ver `CLAUDE.md`, seção "Rastreamento".

## Variáveis

| Nome | Onde | Valor |
| --- | --- | --- |
| `PIXEL_ID` | `wrangler.toml` | `647050360453621` (o pixel das campanhas) |
| `ALLOWED_ORIGINS` | `wrangler.toml` | domínios do site, separados por vírgula |
| `GRAPH_VERSION` | `wrangler.toml` | `v21.0` |
| `CAPI_TOKEN` | **secret** | Gerenciador de Eventos → pixel → Configurações → Conversions API |
| `TEST_EVENT_CODE` | **secret**, temporário | só durante o teste; apagar depois |

O token vive localmente em `worker/.dev.vars` (ignorado pelo git) e como
Secret no Cloudflare. **Nunca** entra no repositório nem em log.

## Publicar

```bash
cd worker
npx wrangler whoami                      # conta agenciaprocurada@gmail.com
npx wrangler secret put CAPI_TOKEN       # cole o token
npx wrangler deploy                      # imprime a URL *.workers.dev
```

A URL impressa vai na constante `ENDPOINT_CAPI` no topo de `public/tracking.js`.
Vazia, o CAPI fica desligado e só o Pixel do navegador roda — o site não quebra.

## Testar

1. Gerenciador de Eventos → **Testar eventos** → copie o código `TESTxxxxx`
2. `npx wrangler secret put TEST_EVENT_CODE` e cole o código
3. Abra o site, navegue até os planos, clique em "Quero contratar" e num botão de WhatsApp
4. Devem aparecer, em pares Navegador + Servidor marcados **Deduplicado**:
   `PageView`, `ViewContent`, `AddToCart`, `Lead`
5. Terminado: `npx wrangler secret delete TEST_EVENT_CODE`

> Com `TEST_EVENT_CODE` cadastrado, os eventos reais vão para a aba de teste e
> **não** contam como conversão. Sempre apague ao terminar.

## Quando o site novo assumir turbocloud.com.br

O domínio já está no Cloudflare. Crie uma rota `turbocloud.com.br/api/capi*` para
este Worker e troque `ENDPOINT_CAPI` para `https://turbocloud.com.br/api/capi`.
Vira first-party: menos bloqueio de adblock e EMQ melhor.

## Checar pelo terminal

```bash
# origem válida → 200 com events_received: 1
curl -s -X POST "$URL" -H "Origin: https://turbocloud.com.br" -H "Content-Type: text/plain" \
  -d '{"event_name":"PageView","event_id":"teste-1","event_source_url":"https://turbocloud.com.br/"}'
# origem estranha → 403 · sem event_id → 400
```
