// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://turbocloud.com.br',
  output: 'static',
  build: {
    // CSS inteiro num arquivo só: a home é uma página, não vale a pena fragmentar
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
