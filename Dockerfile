# Build do site + nginx configurado à mão.
#
# Por que Dockerfile em vez do preset "Astro" da plataforma: o preset aplica
# fallback de SPA (`try_files $uri $uri/ /index.html`), e aí nenhum endereço
# inexistente chega a dar 404 — /asaaaaa devolvia 200 com a home. Fallback de
# SPA é o certo para app React de página única; este site é o oposto, cada
# página é um arquivo HTML de verdade. Nenhuma outra opção do seletor de
# framework resolve: "React (estático)" tem o mesmo fallback, e os demais são
# de aplicação com processo rodando.
#
# Com Dockerfile a config do nginx é nossa: deploy/nginx.conf.
#
# Na plataforma: FRAMEWORK = Dockerfile, PORTA DA APLICAÇÃO = 80.

# ---------------------------------------------------------------- build ----
# Debian e não Alpine de propósito: o sharp, que o Astro usa para tratar as
# imagens no build, tem binário pronto para glibc. No musl do Alpine ele às
# vezes precisa compilar do zero e o build fica lento ou quebra.
FROM node:22-slim AS build

WORKDIR /app

# package.json e lock primeiro: enquanto as dependências não mudarem, esta
# camada fica em cache e o deploy só refaz o build do site.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---------------------------------------------------------------- serve ----
FROM nginx:1.27-alpine

# Substitui o default.conf da imagem, que serve /usr/share/nginx/html sem
# error_page e sem gzip.
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# Health check da plataforma bate na raiz; 200 aqui significa site no ar.
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
