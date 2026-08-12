import { useId, useState } from 'react';
import * as m from 'motion/react-m';
import { Reveal } from './ui';
import { LEIS } from '@/data/site';

const EASE = [0.16, 1, 0.3, 1] as const;

export function Leis() {
  const [tema, setTema] = useState(0);
  const grupo = LEIS[tema];
  const uid = useId();

  return (
    <section id="leis" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="title-section text-roxo-1">Não é discurso. É lei.</h2>
          <p className="text-lilas-muted mt-4 max-w-2xl text-base leading-relaxed">
            Cada lei abaixo nasceu de um projeto de minha autoria e hoje já está em vigor, mudando a
            vida de milhares de brasileiros.
          </p>
        </Reveal>

        <div className="mt-9 flex flex-wrap gap-2" role="tablist" aria-label="Temas das leis sancionadas">
          {LEIS.map((g, i) => (
            <button
              key={g.tema}
              type="button"
              role="tab"
              id={`${uid}-tab-${i}`}
              aria-selected={i === tema}
              aria-controls={`${uid}-painel`}
              onClick={() => setTema(i)}
              className={`min-h-11 rounded-full px-5 text-sm font-extrabold transition-colors duration-200 ${
                i === tema
                  ? 'bg-roxo-1 text-white'
                  : 'bg-lilas text-roxo-1 hover:bg-lilas-muted/30'
              }`}
            >
              {g.tema}
            </button>
          ))}
        </div>

        <div id={`${uid}-painel`} role="tabpanel" aria-labelledby={`${uid}-tab-${tema}`}>
          {/* A key troca o painel inteiro: React remonta e o motion reanima a entrada. */}
          <m.div
            key={grupo.tema}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, ease: EASE }}
            className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
              {grupo.leis.map((lei, i) => (
                <m.article
                  key={lei.numero}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE, delay: 0.06 * i }}
                  className="border-lilas-muted/25 bg-lilas/40 flex h-full flex-col rounded-2xl border p-6 transition-shadow duration-300 hover:shadow-[var(--shadow-card)]"
                >
                  <span className="bg-rosa w-fit rounded-full px-3 py-1 text-[0.7rem] font-extrabold tracking-wider text-white uppercase">
                    Lei em vigor
                  </span>
                  <p className="text-rosa mt-4 text-lg font-black">{lei.numero}</p>
                  <h3 className="text-roxo-1 mt-1 text-base font-black">{lei.titulo}</h3>
                  <p className="text-roxo-1/75 mt-3 text-sm leading-relaxed">{lei.texto}</p>
                </m.article>
            ))}
          </m.div>
        </div>
      </div>
    </section>
  );
}
