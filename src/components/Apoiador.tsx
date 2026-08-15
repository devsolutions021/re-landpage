import * as m from 'motion/react-m';
import { Icon } from './Icon';
import { Reveal, RevealGroup, itemVariants, BotaoRosa, BotaoContorno } from './ui';
import { APOIADOR, CTA } from '@/data/site';
import { LINKS } from '@/data/links';
import fotoComunidade from '@/assets/img/secoes/comunidade.webp';

export function Apoiador() {
  return (
    <section id="apoiador" className="bg-roxo-2 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-8 md:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <h2 className="title-section text-balance text-white">{APOIADOR.titulo}</h2>
            <p className="text-lilas mt-4 text-base leading-relaxed">{APOIADOR.texto}</p>
          </Reveal>

          <Reveal delay={0.12}>
            <img
              src={fotoComunidade}
              alt="Renata Abreu cercada por crianças em uma ação na comunidade"
              width={640}
              height={529}
              loading="lazy"
              decoding="async"
              className="aspect-[5/4] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
            />
          </Reveal>
        </div>

        <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {APOIADOR.cards.map((c) => (
            <m.div
              key={c.titulo}
              variants={itemVariants}
              className="border-lilas/20 bg-lilas/10 h-full rounded-2xl border p-6 transition-colors duration-300 hover:bg-lilas/16"
            >
              <Icon name={c.icone} className="text-rosa size-6" />
              <h3 className="mt-4 text-lg font-black text-white">{c.titulo}</h3>
              <p className="text-lilas mt-2 text-sm leading-relaxed">{c.texto}</p>
            </m.div>
          ))}
        </RevealGroup>

        <Reveal delay={0.12} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <BotaoRosa href={LINKS.whatsapp} icon="whatsapp">
            {CTA.whatsapp}
          </BotaoRosa>
          <BotaoContorno href={LINKS.instagram} icon="instagram">
            {CTA.instagram}
          </BotaoContorno>
        </Reveal>
      </div>
    </section>
  );
}
