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
