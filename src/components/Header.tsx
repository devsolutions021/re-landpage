import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import * as m from 'motion/react-m';
import { Icon } from './Icon';
import { NAV, CTA } from '@/data/site';
import { LINKS } from '@/data/links';
import marca from '@/assets/img/marca-horizontal.svg';

export function Header() {
  const [aberto, setAberto] = useState(false);
  const [compacto, setCompacto] = useState(false);
  const [ativo, setAtivo] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setCompacto(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Marca no menu a seção que está ocupando o topo da tela.
  useEffect(() => {
    const alvos = NAV.map((n) => document.querySelector(n.href)).filter(
      (el): el is Element => el !== null,
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setAtivo(`#${e.target.id}`);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    alvos.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = aberto ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [aberto]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        compacto
          ? 'bg-roxo-1/92 shadow-[0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="flex items-center transition-opacity hover:opacity-80"
          aria-label="Renata Abreu — Deputada Federal"
        >
          <img
            src={marca}
            alt="Deputada Federal Renata Abreu — Vote 2020"
            width={392}
            height={109}
            className={`w-auto transition-all duration-300 ${compacto ? 'h-8' : 'h-9 sm:h-11'}`}
          />
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={ativo === item.href ? 'true' : undefined}
              className={`relative rounded-full px-4 py-2 text-sm font-extrabold tracking-[0.14em] uppercase transition-colors duration-300 ${
                ativo === item.href ? 'bg-rosa text-white' : 'text-lilas hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="border-lilas/50 ml-3 inline-flex min-h-10 items-center gap-2 rounded-full border px-5 text-sm font-extrabold text-white transition-colors hover:bg-white hover:text-roxo-1"
          >
            <Icon name="whatsapp" className="size-4" />
            {CTA.whatsapp}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
          className="text-lilas flex size-11 items-center justify-center rounded-xl transition-colors hover:text-white md:hidden"
        >
          <Icon name={aberto ? 'close' : 'menu'} className="size-6" />
        </button>
      </div>

      <AnimatePresence>
        {aberto && (
          <m.nav
            key="menu-mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="bg-roxo-1 overflow-hidden md:hidden"
            aria-label="Navegação principal"
          >
            <div className="flex flex-col gap-1 px-4 pt-2 pb-6">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setAberto(false)}
                  className="text-lilas rounded-xl px-3 py-3 text-base font-extrabold tracking-widest uppercase hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rosa mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 font-extrabold text-white"
              >
                <Icon name="whatsapp" className="size-5" />
                {CTA.whatsapp}
              </a>
            </div>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
