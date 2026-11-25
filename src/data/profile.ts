export type Locale = 'pt' | 'en';

export interface JourneyStep {
  id: string;
  period: string;
  title: string;
  place: string;
  story: string;
}

export interface ExperienceItem {
  role: string;
  period: string;
  duration: string;
  location: string;
  highlights: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export interface ProfileCopy {
  metaTitle: string;
  nav: {
    story: string;
    experience: string;
    education: string;
    contact: string;
  };
  hero: {
    greeting: string;
    headline: string;
    subtitle: string;
    linkedinCta: string;
    emailCta: string;
    photoAlt: string;
    photoBadge: string;
  };
  journey: {
    heading: string;
    lead: string;
    steps: JourneyStep[];
  };
  about: {
    heading: string;
    paragraphs: string[];
    quote: string;
  };
  experience: {
    heading: string;
    company: string;
    totalTenure: string;
    items: ExperienceItem[];
  };
  credentials: {
    educationHeading: string;
    education: EducationItem[];
    competenciesHeading: string;
    competencies: string[];
    languagesHeading: string;
    languages: { name: string; level: string }[];
    honorsHeading: string;
    honors: string[];
  };
  contact: {
    heading: string;
    lead: string;
    linkedinCta: string;
    emailCta: string;
    copyEmail: string;
    copiedEmail: string;
    footerNote: string;
  };
}

export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/danielle-martins21',
  email: 'danielle.martinssilva@hotmail.com',
} as const;

export const PROFILE_COPY: Record<Locale, ProfileCopy> = {
  pt: {
    metaTitle: 'Danielle Martins — Gente e Gestão',
    nav: {
      story: 'Minha história',
      experience: 'Experiência',
      education: 'Formação',
      contact: 'Contato',
    },
    hero: {
      greeting: 'Campinas, SP · Gente e Gestão',
      headline: 'Pessoas sempre foram o meu ponto de partida.',
      subtitle:
        'Atuo com People Strategy e Target Setting and Cascading na Ambev, conectando metas, estratégia e o dia a dia das equipes para construir ambientes onde o resultado acontece com consistência.',
      linkedinCta: 'Conversar no LinkedIn',
      emailCta: 'Mandar um e-mail',
      photoAlt: 'Danielle Martins sorrindo em evento da Ambev',
      photoBadge: 'Ambev · Gente e Gestão',
    },
    journey: {
      heading: 'Como cheguei até aqui',
      lead: 'Uma trajetória construída na prática — unindo escuta, operação de negócio e estratégia de pessoas.',
      steps: [
        {
          id: 'law',
          period: '2017 – 2021',
          title: 'De Guaranésia a Campinas',
          place: 'Guaranésia (MG) → PUC-Campinas',
          story:
            'Saí de uma cidade pequena em Minas Gerais para cursar Direito na PUC-Campinas longe da família. A mudança trouxe autonomia, escuta ativa e a atuação como Conciliadora.',
        },
        {
          id: 'logistics',
          period: '2023 – 2026',
          title: 'Logística Tática',
          place: 'Ambev · Jaguariúna',
          story:
            'Na operação logística, vivi o ritmo do negócio de perto — gerindo KPIs críticos, conectando stakeholders e facilitando iniciativas de engajamento.',
        },
        {
          id: 'people',
          period: '2026 – Atual',
          title: 'People Strategy & TSC',
          place: 'Ambev · Gente e Gestão',
          story:
            'Hoje desdobro metas no Target Setting and Cascading e lidero o Comitê de Gente do CSC com foco em Carreira e Desenvolvimento.',
        },
      ],
    },
    about: {
      heading: 'Como eu enxergo Gente e Gestão',
      paragraphs: [
        'Acredito que estratégia só ganha força quando encontra a realidade de quem faz acontecer no dia a dia. Meu trabalho nasce da escuta, da clareza de direcionamento e do cuidado com o contexto em que cada equipe atua.',
        'Unir a base analítica de operações ao olhar humano de Gente e Gestão me permite traduzir metas em combinados justos, acompanhar indicadores sem perder o vínculo com as pessoas e construir rotinas que sustentem entrega com consistência.',
        'No Executive MBA em Gestão de Recursos Humanos na USP/Esalq, sigo aprofundando estudos em desenvolvimento organizacional, people analytics e experiência do colaborador.',
      ],
      quote: '“Resultado é, sempre, reflexo do ambiente.”',
    },
    experience: {
      heading: 'Experiência',
      company: 'Ambev',
      totalTenure: '3 anos 1 mês',
      items: [
        {
          role: 'People Analyst',
          period: 'Abr 2026 – Presente',
          duration: '8 meses',
          location: 'Jaguariúna, São Paulo',
          highlights: [
            'Analista de People Strategy responsável pelo Target Setting and Cascading (TSC), realizando cascateamento, monitoramento, auditorias e fechamento de metas.',
            'Líder do Comitê de Gente do CSC, com foco em Carreira e Desenvolvimento.',
          ],
        },
        {
          role: 'Logistics Analyst',
          period: 'Nov 2023 – Abr 2026',
          duration: '2 anos 6 meses',
          location: 'Jaguariúna, São Paulo',
          highlights: [
            'Responsável por processos críticos de operação logística, gestão de KPIs e interface com stakeholders de áreas estratégicas.',
            'Liderança de iniciativas de Engajamento e Cultura Organizacional, como Facilitadora de Engagement e Líder do Comitê de Gente do CSC.',
          ],
        },
        {
          role: 'Estagiária',
          period: 'Ago 2021 – Ago 2022',
          duration: '1 ano 1 mês',
          location: 'Jaguariúna, São Paulo',
          highlights: [
            'Líder do Pilar de Gente da Liga de Estagiários, conduzindo iniciativas de desenvolvimento de estagiários.',
            'Desenvolvimento de habilidades de liderança, comunicação e gestão de projetos aplicáveis a ambientes corporativos.',
          ],
        },
      ],
    },
    credentials: {
      educationHeading: 'Formação Acadêmica',
      education: [
        {
          institution: 'MBA USP/Esalq',
          degree: 'Executive MBA, Gestão de Recursos Humanos',
          period: 'Nov 2025 – Abr 2027',
        },
        {
          institution: 'Pontifícia Universidade Católica de Campinas',
          degree: 'Bacharelado, Direito',
          period: '2017 – 2021',
        },
      ],
      competenciesHeading: 'Principais Competências',
      competencies: [
        'People Strategy',
        'Organizational Development',
        'Employee Experience',
      ],
      languagesHeading: 'Idiomas',
      languages: [
        { name: 'Português', level: 'Nativo ou Bilíngue' },
        { name: 'Inglês', level: 'Full Professional' },
      ],
      honorsHeading: 'Reconhecimentos',
      honors: ['Conciliadora'],
    },
    contact: {
      heading: 'Vamos conversar?',
      lead: 'Adoro trocar ideias sobre Gente e Gestão, cultura organizacional, desenvolvimento de carreira e estratégias de pessoas.',
      linkedinCta: 'Conectar no LinkedIn',
      emailCta: 'Mandar um e-mail',
      copyEmail: 'Copiar e-mail',
      copiedEmail: 'E-mail copiado!',
      footerNote: 'Campinas, São Paulo · Brasil',
    },
  },
  en: {
    metaTitle: 'Danielle Martins — People & Management',
    nav: {
      story: 'My story',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Campinas, SP · People & Management',
      headline: 'People have always been my starting point.',
      subtitle:
        'I work in People Strategy and Target Setting and Cascading at Ambev—connecting goals, strategy, and everyday team reality to build environments where results thrive.',
      linkedinCta: 'Connect on LinkedIn',
      emailCta: 'Send an email',
      photoAlt: 'Danielle Martins smiling at an Ambev event',
      photoBadge: 'Ambev · People & Management',
    },
    journey: {
      heading: 'How I got here',
      lead: 'A path shaped in practice—bringing together active listening, business operations, and people strategy.',
      steps: [
        {
          id: 'law',
          period: '2017 – 2021',
          title: 'From Guaranésia to Campinas',
          place: 'Guaranésia (MG) → PUC-Campinas',
          story:
            'I left a small town in Minas Gerais to study Law at PUC-Campinas away from family—building autonomy, active listening, and experience as a Certified Conciliator.',
        },
        {
          id: 'logistics',
          period: '2023 – 2026',
          title: 'Tactical Logistics',
          place: 'Ambev · Jaguariúna',
          story:
            'In logistics operations, I experienced the pulse of the business—managing critical KPIs, aligning stakeholders, and facilitating engagement.',
        },
        {
          id: 'people',
          period: '2026 – Present',
          title: 'People Strategy & TSC',
          place: 'Ambev · People & Management',
          story:
            'Today I cascade goals through Target Setting and Cascading and lead the CSC People Committee focused on Career & Development.',
        },
      ],
    },
    about: {
      heading: 'How I view People & Management',
      paragraphs: [
        'I believe strategy only gains traction when it connects with the everyday reality of the people delivering it. My work starts with active listening, clear alignment, and genuine care for the context each team operates in.',
        'Combining an analytical operations background with a human-centered People lens allows me to translate targets into fair agreements, track KPIs without losing sight of people, and help build environments that sustain consistent results.',
        'Through my Executive MBA in Human Resources Management at USP/Esalq, I continue deepening my focus on organizational development, people analytics, and employee experience.',
      ],
      quote: '“Results are always a reflection of the environment.”',
    },
    experience: {
      heading: 'Experience',
      company: 'Ambev',
      totalTenure: '3 yrs 1 mo',
      items: [
        {
          role: 'People Analyst',
          period: 'Apr 2026 – Present',
          duration: '8 mos',
          location: 'Jaguariúna, São Paulo',
          highlights: [
            'People Strategy Analyst responsible for Target Setting and Cascading (TSC)—executing goal cascading, monitoring, audits, and target closing.',
            'Leader of the CSC People Committee, focused on Career and Development.',
          ],
        },
        {
          role: 'Logistics Analyst',
          period: 'Nov 2023 – Apr 2026',
          duration: '2 yrs 6 mos',
          location: 'Jaguariúna, São Paulo',
          highlights: [
            'Responsible for critical logistics operation processes, KPI management, and interface with strategic area stakeholders.',
            'Led Engagement and Organizational Culture initiatives as Engagement Facilitator and CSC People Committee Leader.',
          ],
        },
        {
          role: 'Intern',
          period: 'Aug 2021 – Aug 2022',
          duration: '1 yr 1 mo',
          location: 'Jaguariúna, São Paulo',
          highlights: [
            'People Pillar Leader in the Intern League, driving intern development initiatives.',
            'Built leadership, communication, and project management skills applied to corporate environments.',
          ],
        },
      ],
    },
    credentials: {
      educationHeading: 'Education',
      education: [
        {
          institution: 'MBA USP/Esalq',
          degree: 'Executive MBA, Human Resources Management',
          period: 'Nov 2025 – Apr 2027',
        },
        {
          institution: 'Pontifícia Universidade Católica de Campinas',
          degree: 'Bachelor of Laws (LL.B.)',
          period: '2017 – 2021',
        },
      ],
      competenciesHeading: 'Core Competencies',
      competencies: [
        'People Strategy',
        'Organizational Development',
        'Employee Experience',
      ],
      languagesHeading: 'Languages',
      languages: [
        { name: 'Portuguese', level: 'Native or Bilingual' },
        { name: 'English', level: 'Full Professional' },
      ],
      honorsHeading: 'Honors & Awards',
      honors: ['Certified Conciliator (Conciliadora)'],
    },
    contact: {
      heading: 'Let’s talk',
      lead: 'Always happy to connect about People Strategy, organizational culture, career development, and People & Management.',
      linkedinCta: 'Connect on LinkedIn',
      emailCta: 'Send an email',
      copyEmail: 'Copy email',
      copiedEmail: 'Email copied!',
      footerNote: 'Campinas, São Paulo · Brazil',
    },
  },
};
