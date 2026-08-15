import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import * as m from 'motion/react-m';
import { Icon } from './Icon';
import { Reveal, RevealGroup, itemVariants } from './ui';
import { PROJETOS, PROJETOS_TEMA } from '@/data/site';
import fotoEscuta from '@/assets/img/secoes/escuta.webp';

const VISIVEIS = 4;
const EASE = [0.16, 1, 0.3, 1] as const;

export function Projetos() {
  const [aberto, setAberto] = useState(false);
  const extras = PROJETOS.length - VISIVEIS;

  return (
    <section id="projetos" className="bg-roxo-1 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Foto ao lado do título: a seção é uma parede de texto e o lado direito
            do cabeçalho estava vazio. */}
        <div className="grid items-center gap-8 md:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <h2 className="title-section text-balance text-white">
              O que ainda está em construção, e não vai parar.
            </h2>
            <p className="text-rosa mt-4 text-sm font-extrabold tracking-[0.14em] uppercase">
              {PROJETOS_TEMA}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <img
              src={fotoEscuta}
              alt="Renata Abreu conversando de perto com uma eleitora"
              width={492}
              height={545}
              loading="lazy"
              decoding="async"
              className="aspect-[5/4] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
            />
          </Reveal>
        </div>

        <RevealGroup className="mt-8 grid gap-4 md:grid-cols-2" step={0.06}>
          {PROJETOS.slice(0, VISIVEIS).map((p) => (
            <m.article
              key={p.titulo}
              variants={itemVariants}
              className="border-lilas/15 bg-lilas/10 hover:border-rosa/50 hover:bg-lilas/16 h-full rounded-2xl border p-5 transition-colors duration-300"
            >
              <h3 className="text-base font-black text-white">{p.titulo}</h3>
              <p className="text-lilas/85 mt-2 text-sm leading-relaxed">{p.texto}</p>
            </m.article>
          ))}

          <AnimatePresence initial={false}>
            {aberto &&
              PROJETOS.slice(VISIVEIS).map((p, i) => (
                <m.article
                  key={p.titulo}
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: EASE, delay: aberto ? 0.05 * i : 0 }}
                  className="border-lilas/15 bg-lilas/10 hover:border-rosa/50 hover:bg-lilas/16 h-full rounded-2xl border p-5 transition-colors duration-300"
                >
                  <h3 className="text-base font-black text-white">{p.titulo}</h3>
                  <p className="text-lilas/85 mt-2 text-sm leading-relaxed">{p.texto}</p>
                </m.article>
              ))}
          </AnimatePresence>
        </RevealGroup>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          className="border-lilas/70 text-lilas hover:bg-lilas/15 mt-8 inline-flex min-h-12 items-center gap-2 rounded-full border px-6 text-sm font-extrabold transition-colors hover:text-white"
        >
          {aberto ? 'Mostrar menos' : `Mostrar mais (${extras})`}
          <Icon
            name="chevronDown"
            className={`size-4 transition-transform duration-300 ${aberto ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
    </section>
  );
}
