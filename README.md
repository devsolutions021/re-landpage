# Renata Abreu 2020 — landing page

Landing de campanha em React + Vite, com a marca oficial (logo, Proxima Nova e fotos) que está
em `assets/`.

## Stack

| Peça       | Escolha                                    | Por quê                                     |
| ---------- | ------------------------------------------ | ------------------------------------------- |
| Build      | Vite 7 + React 19 + TypeScript             | build de ~0,7s, HMR instantâneo              |
| CSS        | Tailwind v4 (plugin nativo do Vite)        | sem PostCSS, tokens da campanha em `@theme`  |
| Animação   | `motion` com `LazyMotion` + `domAnimation` | ~18 kB a menos que importar o pacote inteiro |
| Ícones     | SVG inline em `src/components/Icon.tsx`    | zero dependência de biblioteca de ícones     |
| Roteamento | nenhum                                     | página única — router seria peso morto       |

## Rodando

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

## Seções, na ordem

Herói · Sobre (bio + números) · Mosaico · Citação · Pautas · Leis sancionadas ·
Vem com a gente · Projetos em andamento · Redes · Campanha · Fechamento + rodapé

## Onde mexer

| Quero mudar…                          | Arquivo                                          |
| ------------------------------------- | ------------------------------------------------ |
| Textos, leis, pautas, projetos, números | [`src/data/site.ts`](src/data/site.ts)         |
| WhatsApp, Instagram, e-mail, posts    | [`src/data/links.ts`](src/data/links.ts)         |
| Peças e ordem do mosaico              | [`src/data/mosaico.ts`](src/data/mosaico.ts)     |
| Dados de propaganda eleitoral         | `RODAPE` em [`src/data/site.ts`](src/data/site.ts) |

**Capas do Instagram**: soltar o arquivo em `src/assets/img/posts/` com o nome igual ao código
do post (`DZxztZRvro1.webp`) — a associação com o link acontece sozinha. Sem capa, o card cai
no visual de marca.

**Mosaico**: cada foto é gerada já no recorte exato do seu slot (`1,6:1` para `[2,2]` e `[1,1]`,
`0,78:1` para `[1,2]`). Mudar a altura da linha da grade sem regerar as fotos volta a cortar
cabeça — o comentário no [`Mosaico.tsx`](src/components/Mosaico.tsx) explica.

## Performance

Primeira visita (gzip): **~104 kB de JS** (60 kB são o React), 7 kB de CSS, 85 kB de fontes e
72 kB da foto do herói. Tudo o mais entra com carregamento adiado. `dist` completo: 1,4 MB.

- **Imagens**: os originais (20 MB por foto, em alguns casos) viram WebP recortado no tamanho de
  exibição. A foto do herói é pré-carregada no `index.html` com `fetchpriority="high"` — é o LCP.
- **Fontes**: os OTF de 95 kB viraram WOFF2 subsetados para latim (~17 kB cada). Cinco faces:
  400, 600, 800, 900 e 900 itálico (só a citação usa).
- **`manualChunks`**: React sai num chunk separado, então deploy de conteúdo não invalida o cache dele.
- `prefers-reduced-motion` desliga todas as animações.

## Pendências

- [ ] **Número do WhatsApp**: `LINKS.whatsapp` está com o placeholder `https://wa.me/55XXXXXXXXXXX`.
      É o único dado fictício do site — aparece no header, no herói, no rodapé, no botão flutuante
      e em duas seções.
- [ ] **Conferir os dados de propaganda eleitoral** (CNPJ, endereço) com a assessoria jurídica.
- [ ] **Domínio**: `renataabreu2020.com.br` está no canonical, no `og:url`, no `robots.txt` e no
      `sitemap.xml`. Se mudar, atualizar nos quatro.
- [ ] **Feed do Instagram**: as capas são imagens fixas. Para atualizar sozinho seria preciso
      integrar a API oficial (exige token e um endpoint).
