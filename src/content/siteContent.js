import geminiIcon from '../assets/icons/skills/gemini.svg';
import githubActionsIcon from '../assets/icons/skills/github-actions.svg';

export const siteMeta = {
  name: 'Sachinn P',
  email: 'sachinn2413@gmail.com',
  github: 'https://github.com/Sachinn-p',
  linkedin: 'https://www.linkedin.com/in/sachinn-p/',
  linkedinId: 'sachinn-p',
  location: 'Namakkal, Tamil Nadu',
  motto: 'Go deep. Break things. Learn why.',
  description:
    'Software engineer focused on backend systems, AI wrangling, source code craft, and system design.',
};

export const navItems = [
  { href: '#hero', label: 'Hero' },
  { href: '#skills', label: 'Skills' },
  { href: '#live-systems', label: 'Live' },
  { href: '#projects', label: 'Projects' },
  { href: '#terminal', label: 'Terminal' },
  { href: '#footer', label: 'PiNG-ME!' },
];

export const heroContent = {
  eyebrow: 'Curiosity is my operating system',
  heading: ["I'm a", 'Software', 'Engineer.'],
  description:
    'I go down rabbit holes, read the protocol docs, break systems on purpose, and then rebuild them cleaner. My center of gravity is backend engineering with a growing obsession for AI wrangling, source code clarity, and system design that stays calm under pressure.',
  pills: ['FastAPI / React / Docker / Azure', 'Freelancer', siteMeta.location],
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
      {
        name: 'Caddy',
        src: 'https://cdn.simpleicons.org/caddy/7fefbd',
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
        name: 'AWS',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      },
      {
        name: 'PostgreSQL',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
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
    ],
  },
];

export const liveSystemsSection = {
  eyebrow: 'Live systems & deployments',
  title: 'Production work that had to stay calm.',
  copy:
    'Systems built for real users, institutional workflows, billing operations, and deployment paths where reliability matters more than the demo glow.',
};

export const liveSystems = [
  {
    name: 'Admission Portal',
    role: 'Backend & DevOps Developer',
    status: 'Live',
    href: 'https://admission.kongunadu.ac.in/',
    summary:
      'Designed and deployed a scalable digital admission management system used during official institutional admission cycles.',
    highlights: [
      'Built modular ReactJS multi-section forms integrated with FastAPI and PostgreSQL.',
      'Implemented JWT authentication, structured validation, RESTful APIs, and workflow automation.',
      'Shipped a reliable production platform for real admission operations.',
    ],
    stack: ['ReactJS', 'FastAPI', 'PostgreSQL', 'JWT', 'REST APIs'],
    flow: ['ReactJS forms', 'FastAPI APIs', 'JWT validation', 'PostgreSQL'],
  },
  {
    name: 'MLB POS',
    role: 'Backend & DevOps Developer',
    status: 'Production',
    summary:
      'Built a scalable POS billing and stock tracking system for centralized multi-shop administration.',
    highlights: [
      'Delivered billing and inventory flows with FastAPI, React Native, PostgreSQL, and AWS EC2.',
      'Optimized RESTful APIs for faster billing operations and centralized tracking.',
      'Implemented GitHub Actions CI/CD pipelines for automated, reliable production delivery.',
    ],
    stack: ['FastAPI', 'React Native', 'PostgreSQL', 'AWS EC2', 'GitHub Actions'],
    flow: ['React Native POS', 'FastAPI services', 'PostgreSQL stock', 'AWS EC2 deploy'],
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
  { href: siteMeta.github, label: 'GitHub', rel: 'me' },
  { href: siteMeta.linkedin, label: 'LinkedIn', rel: 'me' },
  { href: `mailto:${siteMeta.email}`, label: 'Email' },
];
