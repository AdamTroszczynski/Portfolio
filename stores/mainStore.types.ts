import type { Colors, IconsName } from '@/components/components.types';

export type Photo = {
  id: number;
  imgSrc: string;
  name: string;
  description: string;
};

type Tab = {
  id: number;
  icon: IconsName;
  text: string;
};

type Process = {
  id: number;
  header: string;
  text: string;
};

type TechColors =
  | 'blue'
  | 'green'
  | 'red'
  | 'purple'
  | 'yellow'
  | 'orange'
  | 'black';

type TechnologyObject = { name: string; color: TechColors };

export type AppType = 'all' | 'webApp' | 'website' | 'mobileApp';

export type Technology =
  | 'vue'
  | 'nuxt'
  | 'react'
  | 'next'
  | 'express'
  | 'node'
  | 'redis'
  | 'nest'
  | 'tailwind'
  | 'sass'
  | 'javaScript'
  | 'typeScript'
  | 'primeVue'
  | 'postgreSql'
  | 'mongoDb'
  | 'prisma'
  | 'git'
  | 'ionic'
  | 'github'
  | 'docker'
  | 'angularJs';

export const technologiesMap: Record<Technology, TechnologyObject> = {
  vue: { name: 'Vue.js', color: 'green' },
  nuxt: { name: 'Nuxt.js', color: 'green' },
  react: { name: 'React', color: 'blue' },
  next: { name: 'Next.js', color: 'blue' },
  express: { name: 'Express', color: 'black' },
  node: { name: 'Node.js', color: 'green' },
  nest: { name: 'NestJs', color: 'red' },
  redis: { name: 'Redis', color: 'orange' },
  typeScript: { name: 'TypeScript', color: 'blue' },
  javaScript: { name: 'JavaScript', color: 'yellow' },
  tailwind: { name: 'Tailwind', color: 'blue' },
  sass: { name: 'Sass', color: 'purple' },
  primeVue: { name: 'PrimeVue', color: 'green' },
  postgreSql: { name: 'PostgreSQL', color: 'blue' },
  mongoDb: { name: 'MongoDB', color: 'green' },
  prisma: { name: 'Prisma', color: 'black' },
  git: { name: 'Git', color: 'orange' },
  ionic: { name: 'Ionic', color: 'blue' },
  github: { name: 'GitHub', color: 'black' },
  docker: { name: 'Docker', color: 'blue' },
  angularJs: { name: 'AngularJS', color: 'red' },
};

export type Project = {
  id: number;
  name: string;
  url: string;
  type: AppType;
  description: string;
  shortDesc: string;
  startDate: string;
  duration: string;
  role: string;
  teamMembers: string;
  demoLink: string | null;
  githubLink: string | null;
  photos: Photo[];
  challenge: string[];
  solution: {
    text: string;
    tabs: Tab[];
  };
  developmentProcess: Process[];
  result: string;
  techStack: {
    frontend: Technology[];
    backend: Technology[];
    database: Technology[];
    devops: Technology[];
  };
  stats: {
    linesOfCode: string;
    components: string;
    apiEndpoints: string;
    testCoverage: string;
    performanceScore: string;
  };
  performance: {
    performance: string;
    loadTime: string;
    accessibility: string;
    seo: string;
    codeQuality: {
      testCoverage: string;
      maintainability: string;
      technicalDebt: string;
      documentation: string;
    };
    userMetrics: {
      dailyActiveUser: string;
      sessionDuration: string;
      bounceRate: string;
      userSatisfaction: string;
    } | null;
  };
  cardColor: Colors;
  mainTechStack: Technology[];
};
