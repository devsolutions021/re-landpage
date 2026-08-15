import { LazyMotion, domAnimation } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Sobre } from './components/Sobre';
import { Mosaico } from './components/Mosaico';
import { Citacao } from './components/Citacao';
import { Pautas } from './components/Pautas';
import { Leis } from './components/Leis';
import { Apoiador } from './components/Apoiador';
import { Projetos } from './components/Projetos';
import { Redes } from './components/Redes';
import { Campanha } from './components/Campanha';
import { Fechamento } from './components/Fechamento';
import { WhatsappFab } from './components/WhatsappFab';

export default function App() {
  return (
    // domAnimation carrega só o essencial do motion (~18kb a menos que o pacote inteiro).
    <LazyMotion features={domAnimation} strict>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Mosaico />
        <Citacao />
        <Pautas />
        <Leis />
        <Apoiador />
        <Projetos />
        <Redes />
        <Campanha />
        <Fechamento />
      </main>
      <WhatsappFab />
    </LazyMotion>
  );
}
