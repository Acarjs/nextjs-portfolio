import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import { SiOracle, SiIbm } from 'react-icons/si';
import eaglesNestImg from '@/public/eaglesnest.png';
import portfolioImg from '@/public/portfolio.png';
import playwrightImg from '@/public/playwright.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Publicis Group | Kindred. s.r.o.',
    position: 'Frontend Developer',
    description: `•	Designing various web-based assets, creating components in React for a iconic pharma brand. •	Enhanced efficiency by reducing the required time to complete one creation from 15 minutes to approximately 2 minutes through automation for one creation.`,
    icon: React.createElement(FaReact),
    // icon: <LuGraduationCap />, //we can also write this if it is .tsx file instead of .ts file
    date: 'Nov 2023 - Present',
  },
  {
    title: 'Oracle | Netsuite Global Services (Brno - Czech Republic)',
    position: 'Technical Support Engineer',
    description:
      '•	Be trained to provide technical support to NetSuite customers in SuiteCloud customization platform by consulting their SuiteScript codes, which are written in JavaScript.',
    icon: React.createElement(SiOracle),
    date: 'Oct 2023 - Nov 2023',
  },
  {
    title: 'Data4you z.s. - Coding Bootcamp Praha (Prague - Czech Republic) ',
    position: 'Graduated bootcamp',
    description: `•	Full-stack Web Development – Certificate (420+ hours)`,
    icon: React.createElement(LuGraduationCap),
    date: 'Jan 2023 - Aug 2023',
  },
  {
    title: 'Kyndryl | IBM Client Center s.r.o. (Brno - Czech Republic)',
    position: 'IT Backup Administrator (2nd Level)',
    description: `•	Performed backup data management for clients and server infrastructure, •	Maintained IBM TSM servers.`,
    icon: React.createElement(SiIbm),
    date: 'Jan 2023 - Aug 2023',
  },
  {
    title: 'Kyndryl | IBM Client Center s.r.o. (Brno - Czech Republic)',
    position: 'IT Support Specialist (1st Level) ',
    description: `•	Awarded Client Dedication Award and 4 times Employee of the Month, 
    •	Trained/mentored 4 different newcomers,
    •	Processed the most amount issues(an average of 30 per workday) among all team members in 2021,
    •	Provided full-capacity Level 1 IT support and resolved the users’ issue when applicable with 99% accuracy to employees of partner companies.`,
    icon: React.createElement(SiIbm),
    date: 'Jan 2021 - Dec 2022',
  },
] as const;

export const projectsData = [
  {
    title: "Eagle's Nest E-Shop",
    description:
      'This is E-commerce website project, selling jerseys, t-shirts, casual clothes. It serves as a platform to showcase the products to potential customers.',
    tags: ['JavaScript', 'React', 'Firebase', 'Stripe', 'Auth0', 'Formspree'],
    imageUrl: eaglesNestImg,
    link: 'https://eaglesnest.netlify.app/',
    codeLink: 'https://github.com/Acarjs/eagles-nest',
  },
  {
    title: 'Portfolio Website',
    description:
      'My portfolio website serves as a digital showcase of my professional background. It provides visitors with an insight into my skills, experience, and projects as a web developer.',
    tags: [
      'Next.js',
      'React',
      'TypeScript',

      'Tailwind',
      'Framer Motion',
      'Resend',
    ],
    imageUrl: portfolioImg,
    link: '/',
    codeLink: '/',
  },
  {
    title: 'Metadata Tagging Creation Automation',
    description:
      'The process automation of collecting data from various pages and integrating it into a campaign metadata tagging creation form. Enhanced efficiency by reducing the required time to complete one creation from 15 minutes to approximately 2 minutes through automation for one creation.',
    tags: ['Playwright', 'JavaScript', 'TypeScript'],
    imageUrl: playwrightImg,
  },
];

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Astro.js',
  'Tailwind',
  'SASS',
  'Git',
] as const;
