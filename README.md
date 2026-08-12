# Renata Abreu 2020 — landing page

Réplica melhorada da landing de campanha, reconstruída em React + Vite com a marca oficial
(logo, tipografia Proxima Nova e foto) que está em `assets/`.

## Stack

| Peça       | Escolha                                   | Por quê                                              |
| ---------- | ----------------------------------------- | ---------------------------------------------------- |
| Build      | Vite 7 + React 19 + TypeScript             | build de ~0,6s, HMR instantâneo                       |
| CSS        | Tailwind v4 (plugin nativo do Vite)        | sem PostCSS, tokens da campanha em `@theme`           |
| Animação   | `motion` com `LazyMotion` + `domAnimation` | ~18 kB a menos que importar o pacote inteiro          |
| Ícones     | SVG inline em `src/components/Icon.tsx`    | zero dependência de biblioteca de ícones              |
| Roteamento | nenhum                                     | página única — router seria peso morto                |

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

## Performance

Peso da primeira visita (gzip): **~101 kB de JS** (60 kB são o React), 7 kB de CSS,
68 kB de fontes e 72 kB da foto do herói.

O que foi feito para chegar nesse número:

- **Foto do herói**: PNG original de 20 MB → WebP de 72 kB (900px) e 34 kB (560px), servidos
  por `srcset`. Ficam em `public/img/` com nome versionado para poderem ser pré-carregados
  direto no `index.html` com `fetchpriority="high"` — é o elemento LCP.
- **Fontes**: os OTF de 95 kB viraram WOFF2 subsetados para latim (~17 kB cada). Só 4 pesos
  são carregados: 400, 600, 800 e 900.
- **`manualChunks`**: React sai num chunk separado, então deploys que mexem só no conteúdo
  não invalidam o cache dele.
- **Sem biblioteca de ícones**: os traçados ficam em um único arquivo.
- `prefers-reduced-motion` desliga todas as animações.

## Estrutura

```
src/
  data/site.ts        # TODO o conteúdo (textos, leis, projetos, links) num lugar só
  components/         # uma seção por arquivo
    ui.tsx            # Reveal, RevealGroup, botões e selo compartilhados
    Icon.tsx          # ícones SVG inline
  assets/
    fonts/            # Proxima Nova em WOFF2 subsetado
    img/              # marca da campanha em SVG
public/img/           # foto do herói em WebP (pré-carregada)
assets/               # originais entregues pelo cliente (não entram no build)
```

Para trocar textos, leis, projetos ou links, mexa só em [`src/data/site.ts`](src/data/site.ts).

## Pendências de conteúdo

- **Número do WhatsApp**: `LINKS.whatsapp` ainda está com o placeholder
  `https://wa.me/55XXXXXXXXXXX` (veio assim da referência). Trocar pelo número real.
- **Feed do Instagram**: a seção "Redes" usa seis cards de marca-d'água linkando o perfil.
  Quando houver as imagens dos posts, é só substituir o conteúdo dos cards em `Redes.tsx`.
- **Domínio**: `index.html` usa `renataabreu2020.com.br` no canonical e o link "Saiba mais"
  aponta para `renataabreuoficial.com.br`.
