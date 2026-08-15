import * as m from 'motion/react-m';
import { RevealGroup, itemVariants } from './ui';
import { MOSAICO, MOSAICO_TARJA } from '@/data/mosaico';

/** O Tailwind precisa enxergar a classe inteira, então o span vira tabela. */
const COLUNAS: Record<number, string> = { 1: 'sm:col-span-1', 2: 'sm:col-span-2' };
const LINHAS: Record<number, string> = { 1: 'sm:row-span-1', 2: 'sm:row-span-2' };

/** No celular a diagramação da revista não fecha: vira uma grade quadrada e enxuta. */
const FOTOS_NO_CELULAR = 9;

export function Mosaico() {
  let fotos = 0;

  return (
    <section className="bg-roxo-1 relative overflow-hidden" aria-label="Mosaico de fotos do mandato">
      {/* Sangria total, sem max-width: o mosaico é uma divisória entre seções.
          As linhas de 10vw contra colunas de ~16vw dão a célula de ≈1,6:1 em que as
          fotos foram recortadas — mexer aqui sem regerar as fotos volta a cortar cabeça. */}
      <RevealGroup
        className="grid grid-cols-3 gap-1.5 [grid-auto-rows:clamp(6.5rem,32vw,9rem)] sm:grid-cols-6 sm:gap-2 sm:[grid-auto-rows:clamp(5rem,10vw,10rem)]"
        step={0.04}
      >
        {MOSAICO.map((peca, i) => {
          const span = `col-span-1 row-span-1 ${COLUNAS[peca.span[0]]} ${LINHAS[peca.span[1]]}`;

          if (peca.tipo === 'bloco') {
            return (
              <m.div
                key={`bloco-${i}`}
                variants={itemVariants}
                aria-hidden="true"
                className={`hidden sm:block ${span} ${peca.cor === 'rosa' ? 'bg-rosa' : 'bg-roxo-2'}`}
              />
            );
          }

          fotos += 1;
          const soNoDesktop = fotos > FOTOS_NO_CELULAR ? 'hidden sm:block' : '';

          return (
            <m.div
              key={peca.src}
              variants={itemVariants}
              className={`group overflow-hidden ${soNoDesktop} ${span}`}
            >
              <img
                src={peca.src}
                alt={peca.alt}
                loading="lazy"
                decoding="async"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </m.div>
          );
        })}
      </RevealGroup>

      {/* Tarja atravessando o mosaico, como nas páginas da revista. */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2">
        <m.div
          initial={{ opacity: 0, scaleX: 0.9 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-rosa origin-left py-3 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] sm:py-4"
        >
          {/* Alinhada à esquerda, como as tarjas de abertura de matéria da revista. */}
          <p className="mx-auto max-w-6xl px-4 text-sm font-black tracking-[0.22em] text-white uppercase sm:px-6 sm:text-xl">
            {MOSAICO_TARJA}
          </p>
        </m.div>
      </div>
    </section>
  );
}
