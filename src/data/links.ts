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
  'https://www.instagram.com/p/DbitMhtPgAX/',
  'https://www.instagram.com/reel/DbVwSySPy9D/',
  'https://www.instagram.com/reel/DbDmGKAPlcn/',
];

/** Reels ganham ícone de play no lugar do ícone do Instagram. */
export const ehReel = (url: string) => url.includes('/reel/');
