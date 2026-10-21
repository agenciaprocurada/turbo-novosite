// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://turbocloud.com.br',
  output: 'static',

  /* A antiga /politica-de-privacidade/ tinha um texto genérico, sem citar
     LGPD, diferente da política real mantida no WHMCS. Em vez de recriar o
     documento errado, a URL passa a apontar para a política real, que agora
     está na página de documentos (/legal/).
     Em build estático o Astro gera um HTML com meta refresh e canonical,
     então funciona sem depender de config de servidor. */
  redirects: {
    '/calculadora-perda-de-trafego': '/calculadora/',
    '/politica-de-privacidade': '/legal/#politica-de-privacidade',
    /* A /planos/ deixou de existir. A tabela completa já vive na home, na
       seção #planos, e os planos de e-mail vivem na página do produto —
       então nenhum conteúdo se perdeu, só a URL. */
    '/planos': '/#planos',

    /* URLs do site antigo (WordPress) que ainda circulam em anúncios, QR code,
       bio de rede social e índice do Google. Aqui o redirect é meta refresh
       (HTTP 200); o 301 de verdade está em deploy/README.md, para o Nginx. */
    '/whats': 'https://wa.me/5511948600000',
    '/blog': '/hospedagem/blogs-e-portais-de-conteudo/',
    '/rd25': '/',
    '/hospedagem/opencloud-ps': '/hospedagem/cloud-vps/',

    /* Sitemaps do Yoast. O novo é /sitemap.xml (src/pages/sitemap.xml.ts). */
    '/sitemap_index.xml': '/sitemap.xml',
    '/page-sitemap.xml': '/sitemap.xml',
    '/ep_megamenu_content-sitemap.xml': '/sitemap.xml',

    /* Conteúdo interno do mega-menu do Elementor, que o Yoast indexou. Não
       tem equivalente aqui; a hospedagem é o destino mais próximo. */
    '/bdt-ep-megamenu-content/bdt-ep-megamenu-content-818': '/hospedagem/',
    '/bdt-ep-megamenu-content/bdt-ep-megamenu-content-2392': '/hospedagem/',
    '/bdt-ep-megamenu-content/bdt-ep-megamenu-content-2392-2': '/hospedagem/',
    '/bdt-ep-megamenu-content/bdt-ep-megamenu-content-2392-3': '/hospedagem/',
    '/bdt-ep-megamenu-content/bdt-ep-megamenu-content-2392-4': '/hospedagem/',
    '/bdt-ep-megamenu-content/bdt-ep-megamenu-content-2392-5': '/hospedagem/',
    '/bdt-ep-megamenu-content/bdt-ep-megamenu-content-2392-6': '/hospedagem/',
  },
  build: {
    // CSS inteiro num arquivo só: a home é uma página, não vale a pena fragmentar
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
