# Astronautas — infraestrutura

Artes dos heros de Container, Cloud/VPS e Servidor de e-mail. Geradas com a ferramenta integrada `image_gen` a partir dos três astronautas existentes como referências de personagem, materiais, cores e composição. O fundo foi removido localmente com autorização do usuário, preservando a composição e o personagem.

## Arquivos finais

Os originais estão em `_uploads-turbonovosite/astronauta-{containers,cloud-vps,email}-gerado.png`; os PNG com transparência real usam o sufixo `-recortado.png`. Essa pasta é matéria-prima local, ignorada pelo Git. Os WebP abaixo são os arquivos versionados e aplicados nas páginas.

## Aplicação no Astro

Os WebP transparentes estão no mapa `artesHero` de `src/pages/hospedagem/[slug].astro`, que entrega cada arte ao componente compartilhado `HeroProduto`. A arte flutua à direita no desktop e entra acima do título no celular. As nuvens continuam em uma camada independente, animada por `FundoNuvens`. As preferências de movimento reduzido são respeitadas pelos componentes existentes.

O script `scripts/gera-astronautas-infra.mjs` verifica o canal alfa, recorta a margem vazia e exporta em 725px de largura, WebP qualidade 85 e alfa 60. Ele rejeita os estudos com quadriculado para evitar sua publicação acidental.

| Página | Arquivo em `src/assets/imagens/` |
| --- | --- |
| `/hospedagem/containers/` | `empresa-de-hospedagem-de-site-astronauta-containers-isolados.webp` |
| `/hospedagem/cloud-vps/` | `empresa-de-hospedagem-de-site-astronauta-cloud-vps.webp` |
| `/hospedagem/servidor-para-e-mail/` | `empresa-de-hospedagem-de-site-astronauta-servidor-email.webp` |

| Arte | Dimensões | WebP de origem | WebP servido pelo Astro |
| --- | --- | --- | --- |
| Container | 725 × 467 | 76,3 KiB | cerca de 61 KiB |
| Cloud/VPS | 725 × 483 | 76,8 KiB | cerca de 60 KiB |
| E-mail | 725 × 439 | 56,7 KiB | cerca de 45 KiB |

## Reprodução do tratamento

O gerador produziu um quadriculado RGB. `recorta-fundo-astronautas-infra.mjs` cria o alfa usando a separação entre o fundo cinza e os materiais lilás/verde, preserva superfícies internas e recupera a cor das trilhas verdes. É um tratamento específico dessas três composições de 1536 × 1024, não um removedor genérico de fundos.

```powershell
node scripts/recorta-fundo-astronautas-infra.mjs _uploads-turbonovosite/astronauta-containers-gerado.png _uploads-turbonovosite/astronauta-containers-recortado.png
node scripts/recorta-fundo-astronautas-infra.mjs _uploads-turbonovosite/astronauta-cloud-vps-gerado.png _uploads-turbonovosite/astronauta-cloud-vps-recortado.png
node scripts/recorta-fundo-astronautas-infra.mjs _uploads-turbonovosite/astronauta-email-gerado.png _uploads-turbonovosite/astronauta-email-recortado.png
node scripts/gera-astronautas-infra.mjs containers _uploads-turbonovosite/astronauta-containers-recortado.png
node scripts/gera-astronautas-infra.mjs cloud-vps _uploads-turbonovosite/astronauta-cloud-vps-recortado.png
node scripts/gera-astronautas-infra.mjs email _uploads-turbonovosite/astronauta-email-recortado.png
```

## Validação

- Canal alfa verificado antes da otimização; revisão dos recortes sobre fundos claro e roxo.
- `npm run check`: 71 arquivos, zero erros e zero warnings; quatro hints preexistentes.
- `npm run build`: concluído, três rotas e imagens geradas.
- Chromium a 1440px e 390px: as três artes carregam, um H1 por página, nenhum overflow horizontal ou erro de console.
- Botões dos heros chegam a `#planos`; duas camadas de nuvem por hero; animação dos astronautas ativa normalmente e desligada com movimento reduzido.

## Referências

Todas em `src/assets/imagens/`:

- `empresa-de-hospedagem-de-site-astronauta-pagespeed-sites-institucionais.webp`
- `empresa-de-hospedagem-de-site-astronauta-loja-virtual-woocommerce.webp`
- `empresa-de-hospedagem-de-site-astronauta-portal-de-conteudo.webp`

Paleta solicitada: roxo institucional `#5C1F85`, verde institucional `#6BDD12`, traje branco e reflexos lilás. Os objetos representam ambientes isolados, servidores Cloud/VPS e correio protegido, respectivamente.

## Tentativa de extração pelo gerador

Foi executada uma chamada por tema, usando o respectivo PNG como alvo. O resultado continuou sem alfa e foi descartado para aplicação.

```text
Use case: background-extraction. Input image 1 is the EDIT TARGET. Remove its entire gray checkerboard background and output an actual transparent PNG cutout with a real alpha channel (background pixels alpha 0), not an RGB picture of a checkerboard. Retain ONLY the full astronaut, the themed floating panels and objects and their thin green connecting trails. Remove checkerboard also from all open gaps, loops, and glass areas. Keep the astronaut identity, pose, objects, lettering, colors, lighting, exact composition and full framing unchanged. The exported file MUST have real transparency; no white or gray or checkerboard replacement background. Clean professional antialiased edges, preserve the white spacesuit. No added clouds or content.
```

## Prompts de geração

Uma chamada da ferramenta integrada por tema, com as três referências acima. Cada prompt é a base abaixo seguida do tema correspondente.

### Base comum

```text
Use case: stylized-concept. Asset type: production transparent raster cutout for a Turbo Cloud Astro hosting website hero, displayed over separately animated pale lilac clouds. The three input images are STYLE AND CHARACTER REFERENCES ONLY, not edit targets. Create a NEW matching member of the same illustration series. Match the highly detailed premium 3D astronaut: white textile spacesuit and backpack, lavender ambient light, institutional purple #5C1F85 accents and glossy deep purple opaque helmet visor with no visible face, vivid green #6BDD12 technical accents, convincing gloves, articulated joints, boots, friendly floating zero-gravity pose. The character must look like the same brand astronaut and maintain its realistic human proportions, materials, rendering, fine seams and subtle rocket emblem as the references.
Landscape composition approximately 3:2, large full-body astronaut plus thematic floating technology objects as ONE coherent isolated composition, clear silhouette and balanced visual weight. Soft polished studio lighting with lilac reflections. True TRANSPARENT background with alpha, including gaps BETWEEN the objects. No solid white, black or colored background, no checkerboard drawn into image, no sky, NO CLOUDS, no star field, no landscape, no floor or rectangular backdrop, no huge glows bleeding into background. Every boot and object completely inside frame with about 4% breathing room; no cropped limbs, no watermark, no NASA or third-party brands. White/lavender UI surfaces, purple framing, green action accents. This is an illustration asset, NOT a complete webpage: no headline, no pricing, no promotional claims, no invented numerical performance metrics. Small interface marks can be simplified lines and icons, not dense tiny text.
```

### containers

```text
Theme: isolated hosting CONTAINERS and dedicated computing resources. Astronaut floats diagonally from lower-left toward upper-right, full body on the left/center, one gloved hand precisely interacting with a green illuminated activation point on the central of THREE clearly SEPARATE transparent glass cuboid computing modules on the right. Each isolated cube contains its own miniature purple server unit or processor, with distinct boundaries and clear small separation gaps communicating independent environments. One small floating green shield/check tile above and one CPU chip tile near the lower-right. A restrained thin green orbital data trail connects the visual without bridging the isolated cubes. High clarity at 725px wide. The only optional readable heading on a modest interface strip is exactly "CONTAINERS". No shipping containers, no cargo, no Docker whale.
```

### cloud-vps

```text
Theme: CLOUD VPS servers, root access and scalable computing. Astronaut full body floats on the right/center, knees gently bent, body oriented to the left, gloved hand operating a floating lavender server-control panel near the center. Three elegant compact server towers or rack modules with white casing, purple front panels and small green status LEDs float on the left at stepped heights. Above them a SMALL purple-and-white cloud technology icon links to the servers with restrained green data lines; this icon is a simple object, NOT a cloudscape/background. A small terminal tile with the prompt glyph ">_" and one microchip tile illustrate root access and dedicated resources. The only optional heading is exactly "CLOUD VPS". Match the references' hero illustration scale, playful orbital motion and premium photoreal 3D finish, not generic flat cloud clipart.
```

### email

```text
Theme: a secure professional E-MAIL SERVER. Astronaut full body floats diagonally on the left/center, facing right and gently reaching toward a large floating email inbox interface on the right: a white/lavender rounded panel with a purple header, clean abstract inbox rows and green selection indicator. A clear large white-and-purple envelope in front of the interface has a green shield with a purple checkmark, representing delivery protection. Two smaller floating envelopes travel along one elegant thin green orbital path, with one small compact purple mail-server module below the panel. The only optional readable heading is exactly "E-MAIL". No personal email addresses, no brand names from mail providers, no sending counts, no numerical security guarantees. Match the same astronaut, material quality, purple visor and white suit of the provided references.
```
