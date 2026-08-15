/**
 * Todos os links externos do site ficam neste arquivo.
 * Nenhum componente escreve URL na mão — mexeu aqui, mudou no site inteiro.
 */

export const LINKS = {
  /** TODO: trocar pelo número real. Formato: https://wa.me/55DDNNNNNNNNN */
  whatsapp: 'https://wa.me/55XXXXXXXXXXX',
  instagram: 'https://www.instagram.com/renataabreu.2020/',
  siteOficial: 'https://renataabreuoficial.com.br',
} as const;

/**
 * Publicações que aparecem na seção "Acompanhe de perto cada passo do mandato",
 * na ordem em que são exibidas. Para trocar o feed, basta editar esta lista.
 *
 * O `?igsh=…` no fim de cada URL é só o código de compartilhamento do Instagram —
 * pode ser removido sem quebrar o link.
 */
export const POSTS_INSTAGRAM: string[] = [
  'https://www.instagram.com/p/DZxztZRvro1/',
  'https://www.instagram.com/p/DZxzvw1P_NA/',
  'https://www.instagram.com/p/DZxz2nXv3bd/',
  'https://www.instagram.com/reel/DbejkVhvxzT/',
  'https://www.instagram.com/reel/DbVwSySPy9D/',
  'https://www.instagram.com/reel/DbDmGKAPlcn/',
];

/** Reels ganham ícone de play no lugar do ícone do Instagram. */
export const ehReel = (url: string) => url.includes('/reel/');

/** O código do post na URL: .../p/DZxztZRvro1/ -> "DZxztZRvro1". */
export const codigoDoPost = (url: string) => url.match(/\/(?:p|reel)\/([^/?]+)/)?.[1] ?? '';

/**
 * Capas da seção de redes. Para adicionar ou trocar uma, basta soltar o arquivo em
 * `src/assets/img/posts/` com o nome igual ao código do post (ex.: `DZxztZRvro1.webp`) —
 * a associação com o link acontece sozinha, sem mexer em código.
 */
const arquivosDeCapa = import.meta.glob('../assets/img/posts/*.{webp,jpg,jpeg,png}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const capasPorCodigo = new Map(
  Object.entries(arquivosDeCapa).map(([caminho, url]) => [
    caminho.split('/').pop()!.replace(/\.\w+$/, ''),
    url,
  ]),
);

/** `undefined` quando ainda não existe capa para o post — o card cai no visual da marca. */
export const capaDoPost = (url: string) => capasPorCodigo.get(codigoDoPost(url));
