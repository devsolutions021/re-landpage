import { Icon } from './Icon';
import { Reveal } from './ui';
import { LINKS, EMAIL } from '@/data/links';
import { NAV, RODAPE, CTA } from '@/data/site';
import marca from '@/assets/img/marca-horizontal.svg';

const REDES = [
  { href: LINKS.instagram, icone: 'instagram' as const, rotulo: 'Instagram de Renata Abreu' },
  { href: LINKS.whatsapp, icone: 'whatsapp' as const, rotulo: 'WhatsApp de Renata Abreu' },
];

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

      <footer className="bg-roxo-1">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.3fr_0.7fr_1fr]">
          <div>
            <img
              src={marca}
              alt="Deputada Federal Renata Abreu — Vote 2020"
              width={392}
              height={109}
              loading="lazy"
              className="h-10 w-auto"
            />
            <p className="text-lilas/80 mt-5 max-w-xs text-sm leading-relaxed">
              Deputada federal por São Paulo. Trabalho de verdade pela proteção das mulheres, das
              pessoas com deficiência e das vítimas.
            </p>
            <div className="mt-6 flex gap-3">
              {REDES.map((rede) => (
                <a
                  key={rede.rotulo}
                  href={rede.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={rede.rotulo}
                  className="border-lilas/30 text-lilas hover:bg-rosa hover:border-rosa flex size-11 items-center justify-center rounded-full border transition-colors hover:text-white"
                >
                  <Icon name={rede.icone} className="size-5" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="text-rosa text-xs font-extrabold tracking-[0.16em] uppercase">
              Navegação
            </h2>
            <ul className="mt-4 space-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-lilas/85 text-sm font-semibold transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-rosa text-xs font-extrabold tracking-[0.16em] uppercase">Contato</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={LINKS.email}
                  className="text-lilas/85 font-semibold break-all transition-colors hover:text-white"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lilas/85 font-semibold transition-colors hover:text-white"
                >
                  {CTA.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lilas/85 font-semibold transition-colors hover:text-white"
                >
                  @renataabreu.2020
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Identificação obrigatória de propaganda eleitoral — precisa ficar legível. */}
        <div className="border-lilas/15 border-t">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
            <p className="border-lilas/25 text-lilas inline-flex rounded-full border px-3 py-1 text-[0.65rem] font-extrabold tracking-[0.16em] uppercase">
              {RODAPE.selo}
            </p>
            <address className="text-lilas-muted mt-4 space-y-1 text-xs leading-relaxed not-italic">
              <p className="text-lilas/85 font-semibold">
                {RODAPE.eleicao} · {RODAPE.candidata} · {RODAPE.cargo}
              </p>
              <p>
                {RODAPE.partido} · CNPJ {RODAPE.cnpj}
              </p>
              <p>
                {RODAPE.endereco} · {RODAPE.cidade}
              </p>
            </address>
            <p className="text-lilas-muted/80 mt-6 text-xs">
              © {new Date().getFullYear()} Renata Abreu — Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
