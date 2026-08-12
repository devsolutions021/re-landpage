import * as m from 'motion/react-m';
import { Icon } from './Icon';
import { Reveal, RevealGroup, itemVariants } from './ui';
import { PAUTAS, PAUTAS_TITULO } from '@/data/site';

export function Pautas() {
  return (
    <section id="pautas" className="bg-roxo-2 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="title-section max-w-2xl text-balance text-white">{PAUTAS_TITULO}</h2>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PAUTAS.map((p) => (
            <m.article
              key={p.titulo}
              variants={itemVariants}
              className="bg-lilas group h-full rounded-2xl p-6 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="bg-rosa/12 text-rosa inline-flex size-11 items-center justify-center rounded-xl transition-colors duration-300 group-hover:bg-rosa group-hover:text-white">
                <Icon name={p.icone} className="size-6" />
              </span>
              <h3 className="text-roxo-1 mt-4 text-lg font-black">{p.titulo}</h3>
              <p className="text-roxo-1/75 mt-2 text-sm leading-relaxed">{p.texto}</p>
            </m.article>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
