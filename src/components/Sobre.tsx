import * as m from 'motion/react-m';
import { Icon } from './Icon';
import { Reveal, RevealGroup, itemVariants } from './ui';
import { Contador } from './Contador';
import { SOBRE, NUMEROS } from '@/data/site';

export function Sobre() {
  return (
    <section id="sobre" className="bg-lilas py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <h2 className="title-section text-roxo-1 text-balance">{SOBRE.titulo}</h2>
            <div className="text-roxo-1/85 mt-6 space-y-4 text-base leading-relaxed">
              {SOBRE.paragrafos.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="bg-lilas-muted/20 relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-[2rem] shadow-[var(--shadow-card)] md:max-w-none">
              {/* Recorte 4:5 já gerado com folga acima da cabeça — o card tem a mesma
                  proporção, então object-cover não corta nada. */}
              <img
                src="/img/sobre.v1.webp"
                alt="Renata Abreu em retrato institucional"
                width={720}
                height={900}
                loading="lazy"
                decoding="async"
                className="size-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {NUMEROS.map((n) => (
            <m.div
              key={n.label}
              variants={itemVariants}
              className="h-full rounded-2xl bg-white p-6 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1"
            >
              <Icon name={n.icone} className="text-rosa size-6" />
              <p className="text-rosa mt-4 text-4xl font-black tracking-tight tabular-nums">
                <Contador valor={n.valor} />
              </p>
              <p className="text-lilas-muted mt-1 text-sm leading-snug">{n.label}</p>
            </m.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
