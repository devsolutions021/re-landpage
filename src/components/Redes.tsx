import * as m from 'motion/react-m';
import { Icon } from './Icon';
import { Reveal, RevealGroup, itemVariants, BotaoContorno } from './ui';
import { LINKS, POSTS_INSTAGRAM, ehReel, capaDoPost } from '@/data/links';
import marca from '@/assets/img/marca-stacked.svg';

export function Redes() {
  return (
    <section id="redes" className="bg-lilas py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="title-section text-roxo-1 max-w-2xl text-balance">
            Acompanhe de perto cada passo do mandato.
          </h2>
          <p className="text-lilas-muted mt-3 text-sm font-semibold">@renataabreu.2020</p>
        </Reveal>

        <RevealGroup className="mt-9 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3" step={0.06}>
          {POSTS_INSTAGRAM.map((url, i) => {
            const reel = ehReel(url);
            const capa = capaDoPost(url);
            return (
              <m.a
                key={url}
                variants={itemVariants}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-roxo group text-lilas/70 relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl shadow-[var(--shadow-card)]"
              >
                {capa ? (
                  <>
                    <img
                      src={capa}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Escurece o topo para o selo de Instagram/reel não sumir na foto. */}
                    <span
                      aria-hidden="true"
                      className="from-roxo-1/55 absolute inset-0 bg-gradient-to-b to-transparent to-28% transition-opacity duration-300 group-hover:opacity-70"
                    />
                  </>
                ) : (
                  <>
                    <span
                      aria-hidden="true"
                      className="bg-rosa/40 absolute -right-8 -bottom-8 size-32 rounded-full blur-2xl transition-transform duration-500 group-hover:scale-150"
                    />
                    <img
                      src={marca}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="absolute inset-0 m-auto w-1/2 opacity-15 transition-transform duration-500 group-hover:scale-105"
                    />
                  </>
                )}
                <span className="border-lilas/25 bg-roxo-1/40 group-hover:bg-rosa absolute top-3 right-3 flex size-9 items-center justify-center rounded-full border backdrop-blur-sm transition-colors duration-300 group-hover:text-white">
                  <Icon name={reel ? 'play' : 'instagram'} className="size-4" />
                </span>
                <span className="sr-only">
                  {reel ? 'Reel' : 'Publicação'} {i + 1} no Instagram de Renata Abreu
                </span>
              </m.a>
            );
          })}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-9 flex justify-center">
          <BotaoContorno href={LINKS.instagram} icon="instagram" tone="escuro">
            Ver mais no Instagram
          </BotaoContorno>
        </Reveal>
      </div>
    </section>
  );
}
