// Os links externos ficam em `./links.ts` — este arquivo cuida só do conteúdo.

export const CTA = {
  whatsapp: 'Mande um zap pra Rê!',
  instagram: 'Siga a Rê no insta!',
} as const;

export const NAV = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#pautas', label: 'Pautas' },
  { href: '#leis', label: 'Projetos' },
  { href: '#redes', label: 'Redes' },
] as const;

export const HERO = {
  linhas: [
    'Deputada federal por São Paulo, eleita três vezes para representar você em Brasília.',
    'São mais de 700 propostas legislativas e 7 leis federais sancionadas, com trabalho de verdade pela proteção das mulheres, das pessoas com deficiência e das vítimas, além da saúde e educação.',
  ],
} as const;

export const SOBRE = {
  titulo: 'Uma trajetória de trabalho, não de promessas.',
  paragrafos: [
    'Eu sou a Renata Abreu. Nasci em São Paulo, sou advogada e empresária e, em 2015, cheguei à Câmara dos Deputados com uma certeza: a política só faz sentido quando melhora a vida das pessoas.',
    'Sou mãe do Fê, Rafa e José, casada com Gabriel Abreu e filha do deputado José Masci de Abreu e da dona Cristina, que, juntos, fundaram o Centro de Tradições Nordestinas (CTN), em São Paulo. Cresci acompanhando de perto a trajetória do meu pai na política e o trabalho dos meus pais à frente do CTN. Foi ali que aprendi, desde cedo, que fazer política é estar perto das pessoas, ouvir suas histórias e trabalhar para transformar suas vidas.',
    'Segui esse caminho e fundei o Podemos, um dos partidos que mais crescem no país. E tenho muito orgulho de ser a única mulher a presidir um partido político no Brasil.',
    'Hoje, estou no terceiro mandato como deputada federal, eleita com mais de 180 mil votos. Já apresentei mais de 700 propostas e 7 delas viraram leis federais.',
    'E é isso que me move todos os dias: transformar boas ideias em ações que protegem as mulheres, as pessoas com deficiência e as vítimas, fortalecem a saúde e a educação e defendem a vida e os direitos de quem mais precisa.',
  ],
} as const;

import fotoEleita from '@/assets/img/numeros/eleita.webp';
import fotoPropostas from '@/assets/img/numeros/propostas.webp';
import fotoLeis from '@/assets/img/numeros/leis.webp';
import fotoPresidente from '@/assets/img/numeros/presidente.webp';

export type Numero = { icone: IconName; valor: string; label: string; foto: string; alt: string };

export const NUMEROS: Numero[] = [
  {
    icone: 'vote',
    valor: '3x',
    label: 'Eleita deputada federal por SP',
    foto: fotoEleita,
    alt: 'Renata Abreu discursando em um evento de campanha',
  },
  {
    icone: 'file',
    valor: '+700',
    label: 'Propostas legislativas apresentadas',
    foto: fotoPropostas,
    alt: 'Renata Abreu reunida com deputados no Congresso Nacional',
  },
  {
    icone: 'check',
    valor: '7',
    label: 'Leis federais sancionadas',
    foto: fotoLeis,
    alt: 'Renata Abreu com crianças em uma atividade no CTN',
  },
  {
    icone: 'landmark',
    valor: '1ª',
    label: 'Única mulher a presidir um partido político no Brasil!',
    foto: fotoPresidente,
    alt: 'Renata Abreu cercada de crianças em ação social no CTN',
  },
];

export type IconName =
  | 'vote'
  | 'file'
  | 'check'
  | 'landmark'
  | 'shield'
  | 'heart'
  | 'graduation'
  | 'paw'
  | 'eye'
  | 'accessibility'
  | 'users'
  | 'share'
  | 'megaphone'
  | 'usersRound'
  | 'messageHeart'
  | 'handHeart'
  | 'instagram'
  | 'play'
  | 'whatsapp'
  | 'arrowUpRight'
  | 'chevronDown'
  | 'menu'
  | 'close';

export type Pauta = { icone: IconName; titulo: string; texto: string };

/** Fala dela publicada na revista da campanha (página 03). */
export const CITACAO = {
  texto:
    'A política é a grande ferramenta de transformação social. Que Deus abençoe nosso Brasil para que as pessoas nunca desistam da política. Se os bons não participarem da política, os ruins participarão.',
  autora: 'Renata Abreu',
} as const;

export const PAUTAS_TITULO = 'As causas que guiam o nosso trabalho';

export const PAUTAS: Pauta[] = [
  {
    icone: 'shield',
    titulo: 'Combate à violência contra a mulher',
    texto:
      'Leis mais firmes, respostas mais rápidas e proteção de verdade para mulheres que enfrentam violência dentro ou fora de casa, seja ela física, psicológica ou sexual.',
  },
  {
    icone: 'heart',
    titulo: 'Saúde e atenção humanizada',
    texto:
      'Um SUS mais humano e acessível, com mais acesso a tratamentos, atendimento digno e cuidado para quem depende da saúde pública.',
  },
  {
    icone: 'graduation',
    titulo: 'Educação cidadã e política nas escolas',
    texto:
      'Uma educação que prepare para a vida. Queremos que crianças e jovens aprendam desde cedo sobre cidadania, direitos, deveres e a importância de participar da democracia.',
  },
  {
    icone: 'paw',
    titulo: 'Tratamento acessível para os animais',
    texto:
      'Os animais também precisam de cuidado e proteção. Defendemos políticas públicas que garantam saúde, bem-estar e facilitem o acesso a atendimento veterinário.',
  },
  {
    icone: 'eye',
    titulo: 'Transparência',
    texto:
      'Mais transparência na política, combate à corrupção e fim de privilégios. E, no mundo digital, defesa do direito de cada pessoa se informar, se comunicar e ter sua liberdade respeitada.',
  },
];

export type Lei = { numero: string; titulo: string; texto: string };
export type GrupoLeis = { tema: string; leis: Lei[] };

export const LEIS: GrupoLeis[] = [
  {
    tema: 'Combate à Violência contra a Mulher',
    leis: [
      {
        numero: 'Lei nº 13.718/2018',
        titulo: 'Criminalização da Importunação Sexual',
        texto:
          'Transformou a importunação sexual em crime, com pena de até 5 anos de prisão — resposta mais rigorosa a uma conduta que antes era tratada apenas como contravenção.',
      },
      {
        numero: 'Lei nº 13.931/2019',
        titulo: 'Comunicação Obrigatória de Casos de Violência',
        texto:
          'Determinou que serviços de saúde comuniquem, em até 24h, à Polícia e ao Ministério Público os casos suspeitos ou confirmados de violência contra a mulher.',
      },
      {
        numero: 'Lei nº 14.316/2022',
        titulo: 'Recursos para o Enfrentamento da Violência',
        texto:
          'Destinou parte dos recursos do Fundo Nacional de Segurança Pública para ações de combate à violência contra a mulher.',
      },
    ],
  },
  {
    tema: 'Saúde',
    leis: [
      {
        numero: 'Lei nº 15.126/2025',
        titulo: 'Atenção Humanizada no SUS',
        texto: 'Tornou a atenção humanizada um dever legal dentro do Sistema Único de Saúde.',
      },
      {
        numero: 'Lei nº 14.712/2022',
        titulo: 'Assistência Psicológica a Gestantes e Puérperas',
        texto:
          'Garantiu apoio psicológico a mulheres grávidas e no pós-parto pela rede pública de saúde.',
      },
    ],
  },
  {
    tema: 'Educação',
    leis: [
      {
        numero: 'Lei nº 15.468/2026',
        titulo: 'Política e Cidadania na Educação Básica',
        texto:
          'Tornou obrigatório o ensino de Constituição, direitos, deveres e funcionamento das instituições democráticas em todas as escolas do país. Projeto apresentado em 2015, sancionado 11 anos depois.',
      },
    ],
  },
  {
    tema: 'Justiça',
    leis: [
      {
        numero: 'Lei nº 15.109/2025',
        titulo: 'Isenção de Custas para Advogados',
        texto:
          'Isentou advogados do pagamento antecipado de custas judiciais em ações de cobrança de honorários.',
      },
    ],
  },
];

export type Projeto = { titulo: string; texto: string };

export const PROJETOS_TEMA = 'Combate à Violência contra a Mulher';

export const PROJETOS: Projeto[] = [
  {
    titulo: 'Estatuto da Mulher (PL 1996/2026)',
    texto:
      'Reúne em um único marco legal direitos, garantias e mecanismos de proteção contra violência e discriminação.',
  },
  {
    titulo: 'Segurança nos Condomínios (PL 341/2023)',
    texto:
      'Obriga comunicação rápida às autoridades em casos de suspeita de violência em condomínios.',
  },
  {
    titulo: "Combate à 'Legítima Defesa da Honra' (PL 781/2021)",
    texto: 'Impede que esse argumento seja usado para justificar crimes contra mulheres.',
  },
  {
    titulo: 'Estupro Virtual (PL 1891/2023)',
    texto: 'Equipara crimes sexuais praticados por meio digital aos praticados presencialmente.',
  },
  {
    titulo: 'Policiamento Especializado (PL 3893/2024)',
    texto: 'Cria padrão nacional de policiamento de proteção às mulheres.',
  },
  {
    titulo: 'Atendimento Humanizado (PL 120/2019)',
    texto: 'Garante atendimento por policiais e agentes do sexo feminino às vítimas.',
  },
  {
    titulo: 'Atendimento Prioritário às Vítimas (PL 583/2021)',
    texto: 'Prioridade e humanização no atendimento por polícia, MP e Defensoria.',
  },
  {
    titulo: 'Obrigação de Comunicar Violência (PL 2952/2021)',
    texto: 'Quem presenciar violência doméstica e não denunciar pode responder criminalmente.',
  },
  {
    titulo: 'Indenização às Famílias das Vítimas (PL 126/2019)',
    texto: 'Indenização e pensão a dependentes de vítimas fatais em caso de erro do Estado.',
  },
  {
    titulo: 'Segurança em Bares e Casas de Shows (PL 124/2019)',
    texto: 'Capacita estabelecimentos a identificar e socorrer mulheres em situação de risco.',
  },
  {
    titulo: 'Medidas Protetivas (PL 9596/2018)',
    texto:
      'Base da Lei nº 13.641/2018, que tornou crime o descumprimento de medidas protetivas da Lei Maria da Penha.',
  },
];

export const APOIADOR = {
  titulo: 'Vem com a gente 💜',
  texto:
    'Esse trabalho é feito junto com muita gente. E, se você acredita nessas causas, quero ter você por perto!',
  cards: [
    {
      icone: 'whatsapp' as IconName,
      titulo: 'Fique por dentro',
      texto:
        'Quer receber as novidades em primeira mão? Chama a gente no WhatsApp e acompanhe tudo de pertinho.',
    },
    {
      icone: 'share' as IconName,
      titulo: 'Compartilhe o que importa',
      texto:
        'Viu uma lei, projeto ou conquista que pode ajudar alguém? Compartilhe com sua família, seus amigos e vizinhos. Informação também transforma.',
    },
    {
      icone: 'messageHeart' as IconName,
      titulo: 'Converse com a gente',
      texto:
        'Tem uma ideia, uma sugestão ou uma pauta que merece atenção? Fala com a gente. É ouvindo as pessoas que a gente entende o que precisa ser feito.',
    },
    {
      icone: 'handHeart' as IconName,
      titulo: 'Seja um apoiador ou apoiadora',
      texto:
        'Se você se identifica com esse trabalho e quer estar mais perto, vem somar com a gente! Toda participação faz diferença.',
    },
  ],
} as const;

export const CAMPANHA = {
  selo: 'Ajude a nossa campanha',
  titulo: 'Junte-se a nós e ajude a nossa campanha.',
  texto:
    'Campanha se faz com pessoas. Com o seu tempo, a sua voz e a sua rede, a gente chega em quem mais precisa das pautas que defendemos.',
  cards: [
    {
      icone: 'usersRound' as IconName,
      titulo: 'Seja voluntário',
      texto: 'Ajude nas ações de rua, nos eventos e na mobilização do seu bairro.',
    },
    {
      icone: 'messageHeart' as IconName,
      titulo: 'Fortaleça o digital',
      texto: 'Curta, comente e compartilhe os conteúdos para alcançar mais pessoas.',
    },
    {
      icone: 'share' as IconName,
      titulo: 'Indique 3 pessoas',
      texto: 'Convide três pessoas de confiança para conhecer o mandato e as propostas.',
    },
  ],
} as const;
