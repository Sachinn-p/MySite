import geminiIcon from '../assets/icons/skills/gemini.svg';
import githubActionsIcon from '../assets/icons/skills/github-actions.svg';

export const siteMeta = {
  name: 'Sachinn P',
  email: 'sachinn2413@gmail.com',
  github: 'https://github.com/Sachinn-p',
  linkedin: 'https://linkedin.com/in/sachinn-p',
  location: 'Namakkal, Tamil Nadu',
  motto: 'Go deep. Break things. Learn why.',
  description:
    'Software engineer focused on backend systems, AI wrangling, source code craft, and system design.',
};

export const navItems = [
  { href: '#hero', label: 'Hero' },
  { href: '#curiosity', label: 'Curiosity' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#terminal', label: 'Terminal' },
  { href: '#footer', label: 'PiNG-ME!' },
];

export const heroContent = {
  eyebrow: 'Curiosity is my operating system',
  heading: ["I'm a", 'Software', 'Engineer.'],
  description:
    'I go down rabbit holes, read the protocol docs, break systems on purpose, and then rebuild them cleaner. My center of gravity is backend engineering with a growing obsession for AI wrangling, source code clarity, and system design that stays calm under pressure.',
  pills: ['FastAPI / React / Docker / Azure', 'Backend Intern at WAY2SKILLS', siteMeta.location],
  profile: {
    label: 'Curious freak / backend-first',
    blurb: 'Reading specs, breaking assumptions, and rebuilding calmer systems.',
  },
  primaryCta: {
    href: '#projects',
    label: 'Inspect Projects',
  },
  secondaryCta: {
    href: `mailto:${siteMeta.email}`,
    label: 'Ping Me',
  },
};

export const curiositySection = {
  eyebrow: 'Curiosity cards',
  title: 'Patterns I keep returning to.',
  copy:
    'The work changes, the stack changes, the questions get stranger. These are the habits that stay glued to how I think, debug, and build.',
};

export const curiosityCards = [
  {
    title: 'I start from the Protocol specification.',
    copy: 'That is where the system is defined, not the abstraction.',
    label: '01 / protocol',
  },
  {
    title: 'I break things on purpose',
    copy: 'I trust software more after I have seen how it fails, bends, and recovers.',
    label: '02 / failure',
  },
  {
    title: 'Stack agnostic',
    copy: 'Tools matter, but I care more about the constraints, tradeoffs, and data flow.',
    label: '03 / systems',
  },
  {
    title: 'AI wrangler',
    copy: 'I like turning model capability into useful behavior, grounded outputs, and real product flow.',
    label: '04 / models',
  },
  {
    title: 'Source code instincts',
    copy: 'I care about structure, readability, naming, and code that still makes sense later.',
    label: '05 / craft',
  },
  {
    title: 'System design mapper',
    copy: 'I build mental diagrams of APIs, services, boundaries, and failure paths before coding.',
    label: '06 / design',
  },
];

export const skillsSection = {
  eyebrow: 'Skills orbit',
  title: 'Tools in motion, not in a checklist.',
  copy:
    'The stack I keep orbiting through, shown as moving marks instead of a noisy wall of labels: backend frameworks, frontend glue, infra, data systems, AI wrangling, source code craft, and system design thinking.',
};

export const skillRings = [
  {
    radius: 82,
    color: '#7fefbd',
    speed: 0.34,
    direction: 1,
    items: [
      {
        name: 'Python',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
      {
        name: 'FastAPI',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      },
      {
        name: 'Django',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
      },
      {
        name: 'Flask',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
      },
    ],
  },
  {
    radius: 132,
    color: '#ff6b6b',
    speed: 0.26,
    direction: -1,
    items: [
      {
        name: 'React',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'JavaScript',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        name: 'Docker',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      },
      {
        name: 'Nginx',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
      },
    ],
  },
  {
    radius: 182,
    color: '#ffd93d',
    speed: 0.2,
    direction: 1,
    items: [
      {
        name: 'Azure',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
      },
      {
        name: 'MongoDB',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
      {
        name: 'MySQL',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      },
      {
        name: 'Redis',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
      },
      {
        name: 'Linux',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      },
    ],
  },
  {
    radius: 230,
    color: '#a88bff',
    speed: 0.14,
    direction: -1,
    items: [
      {
        name: 'LLaMA',
        src: 'https://github.com/meta-llama.png?size=128',
      },
      {
        name: 'Gemini',
        src: geminiIcon,
      },
      {
        name: 'Git',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
      {
        name: 'GitHub Actions',
        src: githubActionsIcon,
      },
      {
        name: 'Java',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      },
    ],
  },
];

export const projectsSection = {
  eyebrow: 'Project logs',
  title: 'Things I built while following the thread.',
  copy:
    'A mix of live systems, backend-heavy products, and experiments where curiosity turned into architecture, automation, and practical delivery.',
};

export const projects = [
  {
    title: 'CHATSEC SOC Agent',
    copy:
      'Automated SOC workflows with Wazuh SIEM, event correlation, cloud log aggregation, and backend orchestration for threat detection and response.',
    tags: ['Python', 'FastAPI', 'Wazuh', 'LLaMA'],
    href: 'https://github.com/Sachinn-p/CHATSEC-SOC-Agent',
  },
  {
    title: 'AI Quiz Platform',
    copy:
      'Real-time FastAPI services, React frontend, MongoDB-backed flows, Firebase auth, and LLaMA-driven question generation for adaptive quiz behavior.',
    tags: ['FastAPI', 'React', 'LLaMA', 'MongoDB'],
    href: 'https://github.com/Sachinn-p/Quiz_App',
  },
  {
    title: 'College Admission Portal',
    copy:
      'Live digital admission system with multi-section validation, Firebase OAuth, Google Apps Script automation, and production-ready process flow for official use.',
    tags: ['React', 'Firebase OAuth', 'JavaScript', 'Google Apps Script'],
    href: 'https://admission.kongunadu.ac.in/',
  },
  {
    title: 'Roadmap Generation Tool',
    copy:
      'Modular FastAPI services with MongoDB and Gemini-powered recommendations for context-aware academic planning and scalable API design.',
    tags: ['FastAPI', 'React Flow', 'Gemini', 'MongoDB'],
    href: 'https://github.com/Sachinn-p/Roadmap_GENAI',
  },
];

export const terminalSection = {
  eyebrow: 'Terminal',
  title: 'If you want the short version, ask the shell.',
  copy: 'The polished answer is fine. The command-line answer is usually more honest.',
};

export const terminalLines = [
  '$ whoami -> sachinn_p -- software engineer, curious being',
  '$ cat interests.txt -> backend systems, AI wrangling, source code, system design',
  '$ ls ./skills -> python/ java/ react/ fastapi/ docker/ ai-wrangling/ source-code/ sys-design/',
  `$ echo $MOTTO -> "${siteMeta.motto}"`,
  `$ ping ${siteMeta.email} -> connection established [ok]`,
];

export const footerLinks = [
  { href: siteMeta.github, label: 'GitHub' },
  { href: siteMeta.linkedin, label: 'LinkedIn' },
  { href: `mailto:${siteMeta.email}`, label: 'Email' },
];
