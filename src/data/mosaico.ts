import esporteJovens from '@/assets/img/mosaico/esporte-jovens.webp';
import esporteBasquete from '@/assets/img/mosaico/esporte-basquete.webp';
import esporteTime from '@/assets/img/mosaico/esporte-time.webp';
import idosoAbraco from '@/assets/img/mosaico/idoso-abraco.webp';
import idosoSelfie from '@/assets/img/mosaico/idoso-selfie.webp';
import ctnCasal from '@/assets/img/mosaico/ctn-casal.webp';
import familia from '@/assets/img/mosaico/familia.webp';
import familiaPais from '@/assets/img/mosaico/familia-pais.webp';
import marido from '@/assets/img/mosaico/marido.webp';

/**
 * Peças do mosaico, na diagramação da revista: fotos de tamanhos desiguais
 * intercaladas com blocos chapados da marca, que funcionam como respiro.
 *
 * `span` é quanto a peça ocupa na grade — [colunas, linhas].
 */
export type Peca =
  | { tipo: 'foto'; src: string; alt: string; span: [number, number] }
  | { tipo: 'bloco'; cor: 'rosa' | 'roxo'; span: [number, number] };

export const MOSAICO_TARJA = 'Perto das pessoas';

/**
 * Só existem três formatos de peça — e nenhum é achatado:
 *   [2,2] e [1,1] são paisagem (≈1,6:1) e [1,2] é retrato (≈0,78:1).
 * O antigo [2,1] dava uma fatia de 3,7:1 que decepava as cabeças, e por isso saiu.
 * Cada foto já é gerada no recorte exato do seu formato, então o object-cover
 * na tela não corta mais nada.
 *
 * São 30 células em 6 colunas: 5 linhas cheias, sem buraco na última.
 */
/**
 * A ordem abaixo forma duas faixas de 2 linhas, cada uma somando exatamente as
 * 6 colunas — assim a grade fecha sozinha, sem depender do empacotamento
 * automático (que deixava buracos) e sem sobrar linha pela metade.
 *
 *   faixa 1: [2,2] + [1,2] + [1,2] + ([1,1] sobre [1,1]) + ([1,1] sobre [1,1])
 *   faixa 2: [2,2] + [2,2] + [1,2] + [1,2]
 *
 * `idoso-danca` e `esporte-ginastica` ficaram de fora por repetirem o assunto de
 * `idoso-abraco` e `esporte-time`; os arquivos seguem na pasta para troca.
 */
export const MOSAICO: Peca[] = [
  // faixa 1
  { tipo: 'foto', src: esporteTime, alt: 'Renata Abreu com dois meninos uniformizados de um time', span: [2, 2] },
  { tipo: 'foto', src: familia, alt: 'Renata Abreu com o marido e os três filhos em casa', span: [1, 2] },
  { tipo: 'foto', src: marido, alt: 'Renata Abreu com o marido, Gabriel Abreu', span: [1, 2] },
  { tipo: 'foto', src: idosoSelfie, alt: 'Renata Abreu em selfie com uma senhora', span: [1, 1] },
  { tipo: 'foto', src: esporteBasquete, alt: 'Partida de basquete em um projeto esportivo', span: [1, 1] },
  { tipo: 'bloco', cor: 'rosa', span: [1, 1] },
  { tipo: 'bloco', cor: 'roxo', span: [1, 1] },
  // faixa 2
  { tipo: 'foto', src: familiaPais, alt: 'Renata Abreu com os pais e a irmã', span: [2, 2] },
  { tipo: 'foto', src: ctnCasal, alt: 'Renata Abreu com o marido no Centro de Tradições Nordestinas', span: [2, 2] },
  { tipo: 'foto', src: idosoAbraco, alt: 'Renata Abreu abraçando uma moradora durante uma visita', span: [1, 2] },
  { tipo: 'foto', src: esporteJovens, alt: 'Dois jovens sorrindo em um projeto esportivo', span: [1, 2] },
];
