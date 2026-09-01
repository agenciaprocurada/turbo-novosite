// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://turbocloud.com.br',
  output: 'static',

  /* A antiga /politica-de-privacidade/ tinha um texto genérico, sem citar
     LGPD, diferente da política real mantida no WHMCS. Em vez de recriar o
     documento errado, a URL passa a apontar para o índice de documentos.
     Em build estático o Astro gera um HTML com meta refresh e canonical,
     então funciona sem depender de config de servidor. */
  redirects: {
    '/politica-de-privacidade': '/legal/',
  },
  build: {
    // CSS inteiro num arquivo só: a home é uma página, não vale a pena fragmentar
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
