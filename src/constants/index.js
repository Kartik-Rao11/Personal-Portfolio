import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  amazonclone,
  linkedinclone,
  mongodb,
  angular,
  linux,
  java,
  ecommerce
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  // {
  //   title: 'UI/UX Design',
  //   icon: ux,
  // },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Mongo Db',
    icon: mongodb,
  },
  {
    name: 'Angular',
    icon: angular,
  },
  {
    name: 'linux',
    icon: linux,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'java',
    icon: java,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  // {
  //   title: 'Front-End Developer',
  //   company_name: 'Cover Hunt',
  //   icon: coverhunt,
  //   iconBg: '#333333',
  //   date: 'Aug 2021 - Feb 2022',
  // },
  // {
  //   title: 'Mentor (Volunteer)',
  //   company_name: 'Microverse',
  //   icon: microverse,
  //   iconBg: '#333333',
  //   date: 'Mar 2022 - May 2022',
  // },
  // {
  //   title: 'Junior Software Engineer',
  //   company_name: 'Kelhel',
  //   icon: kelhel,
  //   iconBg: '#333333',
  //   date: 'May 2022 - Oct 2022',
  // },
  {
    title: 'Software Developer',
    company_name: 'Castler',
    icon: dcc,
    iconBg: '#333333',
    date: 'July 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'ChatGPT Clone',
    description: 'Built a ChatGPT clone with React, Node.js, and MongoDB, integrating GPT-3 API for real-time, human-like conversations.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/Kartik-Rao11/Chat-gpt-clone',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'E-Commerce',
    description:
      'A full-stack eCommerce application built with React and Spring Boot And Node Js. The project aims to provide users with a seamless online shopping experience, featuring a responsive and user-friendly interface, a wide range of products, and secure payment options.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: ecommerce,
    repo: 'https://github.com/Kartik-Rao11/Amazon-Clone',
    demo: 'https://e-commerce-frontend-kartik-rao.vercel.app/',
  },
  {
    id: 'project-3',
    name: 'LinkedIn Clone',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: linkedinclone,
    repo: 'https://github.com/Kartik-Rao11/linkedin-clone',
    demo: 'https://linkedin-clone-d726f.web.app/',
  }
  // {
  //   id: 'project-4',
  //   name: 'Movie Metro',
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: movie,
  //   repo: 'https://github.com/shaqdeff/Movie-Metro',
  //   demo: 'https://movie-metro.netlify.app/',
  // },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

const resumeLink = 'https://drive.google.com/file/d/1PzkEu40iim0mxpgGxCrrUgNXvEnC4GoQ/view?usp=drive_link';

export { services, technologies, experiences, projects, resumeLink };
