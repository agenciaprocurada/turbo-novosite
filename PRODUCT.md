# Product

## Register

brand

## Users

Donos de site e loja no Brasil (WordPress e WooCommerce), agências que hospedam clientes e quem está fugindo de hospedagem compartilhada lenta, de VPS "no osso" ou de host gringo. Chegam pelo Google ou por indicação, muitas vezes pelo celular, com um site lento ou fora do ar como dor imediata. O trabalho é decidir em minutos se a Turbo Cloud é confiável e escolher um plano — ou chamar no WhatsApp.

## Product Purpose

Nova home de turbocloud.com.br: landing page única, estática (Astro + Tailwind), que substitui a home do WordPress. Vende hospedagem de alta performance com servidores no Brasil, suporte humano e migração grátis. Sucesso = clique em "Ver planos" / contratação e conversas no WhatsApp; a página em si tem que ser rápida, porque velocidade é o produto.

## Brand Personality

Rápida, direta, brasileira. "Clean SaaS com sangue Turbo": estrutura e respiro no padrão StayCloud, cor e voz no padrão TurboCloud (roxo profundo + verde-limão). Fala como gente daqui — sem script, sem jargão de gringo — e prova o que diz com número real. Tom confiante, sem exagero: honestidade converte melhor que "24/7" genérico.

## Anti-references

- Home de hospedagem genérica: banner de "oferta", contador regressivo, selo falso, foto de stock de datacenter.
- Página pesada: foto raster sem propósito, biblioteca de animação, screenshot de 1 MB.
- Promessa que a Turbo não cumpre: uptime "garantido", "24/7", número redondo de efeito.
- Verde-limão sobre branco como texto (não tem contraste).

## Design Principles

1. **A página é a prova.** Vende velocidade, então carrega em ~30 KB de HTML gzip: ilustração em SVG/CSS ou WebP tratado, nunca foto pesada.
2. **Só entra o que existe.** Todo número saiu do site em produção ou do Trustindex. Nada inventado.
3. **Roxo é a casa, verde é a ação.** Blocos escuros em roxo, botão verde sempre com texto roxo; verde escuro para texto sobre claro.
4. **Mobile é onde o cliente chega.** Cada seção tem que funcionar com o polegar: alvo de toque grande, carrossel com "espiada" no próximo card, imagem recortada para a tela.
5. **Voz de gente daqui.** Copy curta, em português de verdade, com o WhatsApp como porta principal.

## Accessibility & Inclusion

Meta AA. H1 único, foco visível (verde escuro no claro, verde puro nos blocos roxos), `role="tab"`/`aria-selected` nos carrosséis, skip link para `#conteudo`. Tudo respeita `prefers-reduced-motion`. Verde-limão nunca como texto sobre fundo claro (três tokens de verde por contraste). Alvos de toque ≥ 40px no mobile.
