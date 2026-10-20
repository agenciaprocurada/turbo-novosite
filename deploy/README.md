# Acesso a /home-astra

O Nginx da hospedagem responde a `/home-astra` com um redirecionamento 301
para `http://turbocloud-novo-site.up.turbo.cloud:4321/home-astra/`.
A porta 4321 é interna. A página Astro já está publicada, mas esse
redirecionamento impede o acesso pelo endereço curto.

## Correção na hospedagem

Adicionar o conteúdo de [nginx-home-astra.conf](./nginx-home-astra.conf)
ao bloco `server` da aplicação no preset Astro da plataforma. O trecho
reescreve a rota internamente, preservando `/home-astra` no navegador,
e usa a configuração existente que já serve `/home-astra/index.html`.

Validar a configuração com `nginx -t` e recarregar o Nginx pelo mecanismo
da plataforma. Manter a regra existente de páginas não encontradas.

**Este arquivo não é aplicado automaticamente por `npm run build` ou por
um push.** É necessário integrá-lo à configuração Nginx da hospedagem.
Não adicionar Dockerfile para forçar a troca do preset de publicação.

## Verificação após aplicar

```sh
curl -I https://turbocloud-novo-site.up.turbo.cloud/home-astra
```

A resposta esperada é `200 OK`, `Content-Type: text/html` e nenhum
cabeçalho `Location`. Conferir também a home original, os arquivos CSS,
a página com barra final e uma rota inexistente, que deve continuar 404.

O navegador pode ter guardado o redirecionamento 301 anterior. Depois de
corrigir o servidor, validar também numa sessão nova do navegador.

Referência: [reescrita interna com last no Nginx](https://nginx.org/en/docs/http/ngx_http_rewrite_module.html#rewrite).

---

# Redirects 301 das URLs do site antigo

O site antigo (WordPress) tinha URLs que continuam circulando em anúncios,
QR code, bio de rede social e no índice do Google: `/whats`, `/blog/`,
`/rd25/`, `/hospedagem/opencloud-ps/`, `/sitemap_index.xml` e outras. Todas
já funcionam no site novo pelo `redirects` do `astro.config.mjs`, mas esse
mecanismo gera uma página HTML com `meta refresh` e responde **200**, não
301. Para o 301 de verdade, aplicar na hospedagem o trecho de
[nginx-redirects.conf](./nginx-redirects.conf), no mesmo bloco `server` do
`nginx-home-astra.conf` (não substitui o `try_files $uri $uri/ =404` nem o
`error_page 404`).

| URL antiga | Destino (301) |
| --- | --- |
| `/whats` | `https://wa.me/5511948600000` |
| `/blog/` | `/hospedagem/blogs-e-portais-de-conteudo/` |
| `/rd25/` | `/` |
| `/hospedagem/opencloud-ps/` | `/hospedagem/cloud-vps/` |
| `/planos/` | `/#planos` |
| `/calculadora-perda-de-trafego/` | `/calculadora/` |
| `/politica-de-privacidade/` | `/legal/` |
| `/sitemap_index.xml`, `/page-sitemap.xml`, `/ep_megamenu_content-sitemap.xml` | `/sitemap.xml` |
| `/bdt-ep-megamenu-content/*` | `/hospedagem/` |

Fora deste arquivo, ainda a confirmar com a plataforma: o redirecionamento de
`http://` para `https://` e de `www.` para o domínio sem `www`, que o site
antigo fazia com 301 e que depende da configuração do domínio na
virada de DNS.

Verificação depois de aplicar:

```sh
curl -sI https://turbocloud.com.br/whats | head -3        # 301 + Location do WhatsApp
curl -sI https://turbocloud.com.br/blog/ | head -3         # 301
curl -sI https://turbocloud.com.br/sitemap_index.xml | head -3
curl -s  https://turbocloud.com.br/robots.txt              # 200, com a linha Sitemap
```
