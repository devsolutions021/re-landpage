import * as m from 'motion/react-m';
import { BotaoRosa, BotaoContorno } from './ui';
import { HERO, CTA } from '@/data/site';
import { LINKS } from '@/data/links';
import marcaStacked from '@/assets/img/marca-stacked.svg';

const EASE = [0.16, 1, 0.3, 1] as const;

const sobe = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay },
});

export function Hero() {
  return (
    <section id="top" className="bg-gradient-roxo relative overflow-hidden pt-24 sm:pt-28">
      {/* Halos de cor — puro decorativo, atrás de tudo. */}
      <m.div
        aria-hidden="true"
        className="bg-rosa/30 pointer-events-none absolute -top-10 -right-32 size-[30rem] rounded-full blur-[90px]"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: EASE }}
      />
      <div
        aria-hidden="true"
        className="bg-lilas/12 pointer-events-none absolute -bottom-40 -left-24 size-[26rem] rounded-full blur-[90px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-end gap-6 px-4 pt-4 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:pt-10">
        <div className="pb-2 md:pb-24">
          <h1 className="max-w-md">
            <span className="sr-only">
              Vote 2020 — Renata Abreu, deputada federal por São Paulo
            </span>
            <m.img
              src={marcaStacked}
              alt=""
              width={1497}
              height={1336}
              fetchPriority="high"
              className="h-auto w-full max-w-[15rem] sm:max-w-[17rem] lg:max-w-[19rem]"
              initial={{ opacity: 0, y: 26, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: EASE }}
            />
          </h1>

          <div className="mt-7 max-w-xl space-y-3">
            <m.p
              className="text-lilas text-lg leading-snug font-extrabold text-balance sm:text-xl"
              {...sobe(0.15)}
            >
              {HERO.linhas[0]}
            </m.p>
            <m.p className="text-lilas/85 text-base leading-relaxed" {...sobe(0.24)}>
              {HERO.linhas[1]}
            </m.p>
          </div>

          <m.div className="mt-8 flex flex-col gap-3 sm:flex-row" {...sobe(0.34)}>
            <BotaoRosa href={LINKS.whatsapp} icon="whatsapp">
              {CTA.whatsapp}
            </BotaoRosa>
            <BotaoContorno href={LINKS.instagram} icon="instagram">
              {CTA.instagram}
            </BotaoContorno>
          </m.div>
        </div>

        <div className="relative mx-auto w-full max-w-[15rem] md:max-w-[21rem] lg:max-w-[23rem]">
          <div
            aria-hidden="true"
            className="bg-lilas/25 absolute inset-x-4 top-10 bottom-6 rounded-full blur-3xl"
          />
          <m.img
            src="/img/renata-900.v1.webp"
            srcSet="/img/renata-560.v1.webp 560w, /img/renata-900.v1.webp 900w"
            sizes="(min-width: 768px) 23rem, 15rem"
            alt="Retrato da deputada federal Renata Abreu"
            width={900}
            height={1683}
            fetchPriority="high"
            decoding="async"
            className="relative z-10 w-full object-contain drop-shadow-2xl [mask-image:linear-gradient(to_bottom,black_84%,transparent_100%)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.05 }}
          />
        </div>
      </div>
    </section>
  );
}
