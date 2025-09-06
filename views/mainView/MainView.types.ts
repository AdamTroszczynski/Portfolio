import type { Colors } from '~/components/components.types';

export type ProjectTypes = 'All' | 'Web app' | 'Website' | 'Mobile app';

type TechColors = 'blue' | 'green' | 'red' | 'purple' | 'yellow' | 'orange';

type Technologies =
  | 'Vue.js'
  | 'Nuxt.js'
  | 'Redis'
  | 'TypeScript'
  | 'Express'
  | 'Tailwind'
  | 'Nest.js'
  | 'Ionic'
  | 'Sass'
  | 'JavaScript';

type TechnologyObject = {
  name: Technologies;
  color: TechColors;
};

export type Project = {
  id: number;
  type: ProjectTypes;
  header: string;
  imgSrc: string;
  buttonColor: Colors;
  techStack: TechnologyObject[];
  desc: string;
  linkGit: string | null;
};

export const technologiesMap: Record<string, TechnologyObject> = {
  vue: { name: 'Vue.js', color: 'green' },
  nuxt: { name: 'Nuxt.js', color: 'green' },
  nest: { name: 'Nest.js', color: 'purple' },
  typeScript: { name: 'TypeScript', color: 'blue' },
  express: { name: 'Express', color: 'purple' },
  tailwind: { name: 'Tailwind', color: 'yellow' },
  redis: { name: 'Redis', color: 'red' },
  ionic: { name: 'Ionic', color: 'blue' },
  sass: { name: 'Sass', color: 'purple' },
  javaScript: { name: 'JavaScript', color: 'yellow' },
};
