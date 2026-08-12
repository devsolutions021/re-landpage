import { Icon } from './Icon';
import { Reveal } from './ui';
import { LINKS } from '@/data/links';
import marca from '@/assets/img/marca-horizontal.svg';

export function Fechamento() {
  return (
    <>
      <section className="bg-gradient-roxo py-20 text-center sm:py-28">
        <Reveal className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="title-section text-balance text-white">
            Quer conhecer toda a minha trajetória?
          </h2>
          <a
            href={LINKS.siteOficial}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rosa mt-8 inline-flex min-h-14 items-center gap-2 rounded-full px-9 text-lg font-extrabold text-white shadow-[var(--shadow-rosa)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Saiba mais
            <Icon name="arrowUpRight" className="size-5" />
          </a>
        </Reveal>
      </section>

      <footer className="bg-roxo-1 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:px-6">
          <img
            src={marca}
            alt="Deputada Federal Renata Abreu — Vote 2020"
            width={392}
            height={109}
            loading="lazy"
            className="h-9 w-auto"
          />
          <div className="flex gap-3">
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Renata Abreu"
              className="border-lilas/30 text-lilas hover:bg-rosa flex size-11 items-center justify-center rounded-full border transition-colors hover:border-rosa hover:text-white"
            >
              <Icon name="instagram" className="size-5" />
            </a>
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de Renata Abreu"
              className="border-lilas/30 text-lilas hover:bg-rosa flex size-11 items-center justify-center rounded-full border transition-colors hover:border-rosa hover:text-white"
            >
              <Icon name="whatsapp" className="size-5" />
            </a>
          </div>
          <p className="text-lilas-muted text-center text-xs">
            © {new Date().getFullYear()} Renata Abreu — Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
