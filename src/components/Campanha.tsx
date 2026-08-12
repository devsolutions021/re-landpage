import * as m from 'motion/react-m';
import { Icon } from './Icon';
import { Reveal, RevealGroup, itemVariants, Selo, BotaoRosa } from './ui';
import { CAMPANHA } from '@/data/site';
import { LINKS } from '@/data/links';

export function Campanha() {
  return (
    <section id="campanha" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Selo icon="handHeart" tone="lilas">
            {CAMPANHA.selo}
          </Selo>
          <h2 className="title-section text-roxo-1 mt-5 text-balance">{CAMPANHA.titulo}</h2>
          <p className="text-lilas-muted mt-4 text-base leading-relaxed">{CAMPANHA.texto}</p>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-4 md:grid-cols-3">
          {CAMPANHA.cards.map((c) => (
            <m.div
              key={c.titulo}
              variants={itemVariants}
              className="bg-lilas/50 h-full rounded-2xl p-6 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1"
            >
              <Icon name={c.icone} className="text-rosa size-6" />
              <h3 className="text-roxo-1 mt-4 text-lg font-black">{c.titulo}</h3>
              <p className="text-roxo-1/75 mt-2 text-sm leading-relaxed">{c.texto}</p>
            </m.div>
          ))}
        </RevealGroup>

        <Reveal delay={0.12} className="mt-10 flex justify-center">
          <BotaoRosa href={LINKS.whatsapp} icon="whatsapp">
            Quero ajudar a campanha
          </BotaoRosa>
        </Reveal>
      </div>
    </section>
  );
}
