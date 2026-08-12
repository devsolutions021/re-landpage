import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import * as m from 'motion/react-m';
import { Icon } from './Icon';
import { CTA } from '@/data/site';
import { LINKS } from '@/data/links';

export function WhatsappFab() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisivel(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visivel && (
        <m.a
          href={LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={CTA.whatsapp}
          initial={{ opacity: 0, scale: 0.7, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 12 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="bg-rosa fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full text-white shadow-[var(--shadow-rosa)] sm:right-6 sm:bottom-6"
        >
          <span
            aria-hidden="true"
            className="bg-rosa/60 absolute inset-0 animate-ping rounded-full [animation-duration:2.6s]"
          />
          <Icon name="whatsapp" className="relative size-7" />
        </m.a>
      )}
    </AnimatePresence>
  );
}
