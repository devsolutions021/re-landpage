import { useEffect, useMemo, useRef, useState } from 'react';
import { useInView } from 'motion/react';

/**
 * Anima "+700" de 0 até 700 mantendo prefixo e sufixo ("+", "x", "ª").
 * Se o valor não tiver dígitos, é renderizado como está.
 */
export function Contador({ valor, className }: { valor: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const visivel = useInView(ref, { once: true, amount: 0.6 });

  // Precisa ser memoizado: `match` devolve um array novo a cada render e, como dependência
  // do efeito, reiniciaria a animação em todo frame — o número nunca chegava ao alvo.
  const { prefixo, alvo, sufixo } = useMemo(() => {
    const p = valor.match(/^(\D*)(\d+)(\D*)$/);
    return p
      ? { prefixo: p[1], alvo: Number(p[2]), sufixo: p[3] }
      : { prefixo: valor, alvo: null, sufixo: '' };
  }, [valor]);

  // Contar até 3 ou até 7 não impressiona ninguém — só vale a pena a partir de dois dígitos.
  const animar = alvo !== null && alvo >= 10;
  const [n, setN] = useState(animar ? 0 : (alvo ?? 0));

  useEffect(() => {
    if (!visivel || !animar || alvo === null) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(alvo);
      return;
    }
    const duracao = 900;
    const inicio = performance.now();
    let raf = 0;
    const passo = (agora: number) => {
      const t = Math.min(1, (agora - inicio) / duracao);
      // easeOutExpo: rápido no começo, assenta no fim.
      const e = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setN(Math.round(alvo * e));
      if (t < 1) raf = requestAnimationFrame(passo);
    };
    raf = requestAnimationFrame(passo);
    return () => cancelAnimationFrame(raf);
  }, [visivel, animar, alvo]);

  if (alvo === null) return <span className={className}>{valor}</span>;

  return (
    <span ref={ref} className={className}>
      {prefixo}
      {n}
      {sufixo}
    </span>
  );
}
