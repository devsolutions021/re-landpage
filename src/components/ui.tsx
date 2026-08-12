import * as m from 'motion/react-m';
import type { ReactNode } from 'react';
import { Icon } from './Icon';
import type { IconName } from '@/data/site';

/* ---------------------------------------------------------------- reveal */

const EASE = [0.16, 1, 0.3, 1] as const;

/** Entrada padrão: sobe 18px e revela, uma única vez, quando entra na viewport. */
export function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'li' | 'article' | 'span';
}) {
  const Tag = m[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.55, ease: EASE, delay }}
    >
      {children}
    </Tag>
  );
}

/** Container de grade que escalona os filhos sem precisar calcular delays. */
export function RevealGroup({
  children,
  className,
  step = 0.07,
}: {
  children: ReactNode;
  className?: string;
  step?: number;
}) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -60px 0px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: step } } }}
    >
      {children}
    </m.div>
  );
}

export const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/* --------------------------------------------------------------- botões */

const baseBtn =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-base font-extrabold transition-transform duration-200 will-change-transform hover:-translate-y-0.5 active:translate-y-0';

export function BotaoRosa({
  href,
  children,
  icon,
  className = '',
}: {
  href: string;
  children: ReactNode;
  icon?: IconName;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseBtn} bg-rosa text-white shadow-[var(--shadow-rosa)] hover:bg-rosa/92 ${className}`}
    >
      {icon && <Icon name={icon} className="size-5 shrink-0" />}
      {children}
    </a>
  );
}

export function BotaoContorno({
  href,
  children,
  icon,
  tone = 'claro',
  className = '',
}: {
  href: string;
  children: ReactNode;
  icon?: IconName;
  /** `claro` = borda clara sobre fundo roxo. `escuro` = borda roxa sobre fundo claro. */
  tone?: 'claro' | 'escuro';
  className?: string;
}) {
  const tones =
    tone === 'claro'
      ? 'border border-lilas/70 text-white hover:bg-lilas/15'
      : 'border border-roxo-1 text-roxo-1 hover:bg-roxo-1 hover:text-white';
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseBtn} ${tones} ${className}`}
    >
      {icon && <Icon name={icon} className="size-5 shrink-0" />}
      {children}
    </a>
  );
}

/* ----------------------------------------------------------------- selo */

export function Selo({
  children,
  icon,
  tone = 'rosa',
}: {
  children: ReactNode;
  icon?: IconName;
  tone?: 'rosa' | 'lilas';
}) {
  const tones = tone === 'rosa' ? 'bg-rosa text-white' : 'bg-lilas text-roxo-1';
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-extrabold tracking-[0.12em] uppercase ${tones}`}
    >
      {icon && <Icon name={icon} className="size-4" />}
      {children}
    </span>
  );
}
