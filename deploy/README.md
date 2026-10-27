# Redirects 301 das URLs do site antigo

O site antigo (WordPress) tinha URLs que continuam circulando em anúncios,
QR code, bio de rede social e no índice do Google: `/whats`, `/blog/`,
`/rd25/`, `/hospedagem/opencloud-ps/`, `/sitemap_index.xml` e outras. Todas
já funcionam no site novo pelo `redirects` do `astro.config.mjs`, mas esse
mecanismo gera uma página HTML com `meta refresh` e responde **200**, não
301. Para o 301 de verdade, aplicar na hospedagem o trecho de
[nginx-redirects.conf](./nginx-redirects.conf), no bloco `server` da
aplicação (não substitui o `try_files $uri $uri/ =404` nem o
`error_page 404`).

| URL antiga | Destino (301) |
| --- | --- |
| `/whats` | `/contato/#falar-com-a-equipe` (chat; o WhatsApp saiu do atendimento) |
| `/blog/` | `/hospedagem/blogs-e-portais-de-conteudo/` |
| `/rd25/` | `/` |
| `/hospedagem/opencloud-ps/` | `/hospedagem/cloud-vps/` |
| `/hospedagem/openclaw/` | `/hospedagem/cloud-vps/` (produto descontinuado) |
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
curl -sI https://turbocloud.com.br/whats | head -3        # 301 + Location do chat
curl -sI https://turbocloud.com.br/blog/ | head -3         # 301
curl -sI https://turbocloud.com.br/sitemap_index.xml | head -3
curl -s  https://turbocloud.com.br/robots.txt              # 200, com a linha Sitemap
```
