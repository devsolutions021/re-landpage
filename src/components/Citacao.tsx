import * as m from 'motion/react-m';
import { Reveal } from './ui';
import { CITACAO } from '@/data/site';

export function Citacao() {
  return (
    <section className="bg-lilas relative overflow-hidden py-16 sm:py-24">
      {/* Aspas gigantes ao fundo, como na abertura de matéria da revista. */}
      <span
        aria-hidden="true"
        className="text-rosa/12 pointer-events-none absolute -top-16 left-2 text-[16rem] leading-none font-black italic select-none sm:left-8 sm:text-[22rem]"
      >
        “
      </span>

      <Reveal className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <blockquote>
          <m.p
            className="text-roxo-1 text-2xl leading-[1.25] font-black italic text-balance sm:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {CITACAO.texto}
          </m.p>
          <footer className="mt-6 flex items-center gap-3">
            <span aria-hidden="true" className="bg-rosa h-1 w-12 rounded-full" />
            <cite className="text-lilas-muted text-sm font-extrabold tracking-[0.14em] uppercase not-italic">
              {CITACAO.autora}
            </cite>
          </footer>
        </blockquote>
      </Reveal>
    </section>
  );
}
