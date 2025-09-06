import { type Project, technologiesMap } from '@mainView/MainView.types';

export const useProjectsStore = defineStore('projectsstore', () => {
  const projects: Ref<Project[]> = ref([
    {
      id: 1,
      type: 'Web app',
      header: 'Smocze Prawko',
      imgSrc: '/photos/smoczePrawko/main.png',
      buttonColor: 'primary-blue',
      techStack: [
        technologiesMap.nuxt,
        technologiesMap.nest,
        technologiesMap.redis,
        technologiesMap.typeScript,
      ],
      desc: 'A web app for practicing theoretical driving exam questions, featuring learning and exam modes, user statistics, premium account support, and profile customization.',
      linkGit: null,
    },
    {
      id: 2,
      type: 'Web app',
      header: 'Drift Detailers',
      imgSrc: '/photos/driftDetailers/main.png',
      buttonColor: 'primary-green',
      techStack: [
        technologiesMap.nuxt,
        technologiesMap.express,
        technologiesMap.typeScript,
        technologiesMap.tailwind,
      ],
      desc: 'A company website and management panel for a car detailing business. Users collect visit stamps and vouchers, admins manage accounts and rewards.',
      linkGit: null,
    },
    {
      id: 3,
      type: 'Website',
      header: 'Crypto Trading Platform',
      imgSrc: '/photos/img3.png',
      buttonColor: 'primary-pink',
      techStack: [technologiesMap.vue, technologiesMap.redis],
      desc: 'Secure cryptocurrency trading platform with real-time market data and portfolio management.',
      linkGit: null,
    },
    {
      id: 4,
      type: 'Mobile app',
      header: 'View Hunters',
      imgSrc: '/photos/viewHunters/main.png',
      buttonColor: 'primary-purple',
      techStack: [
        technologiesMap.ionic,
        technologiesMap.vue,
        technologiesMap.sass,
        technologiesMap.javaScript,
      ],
      desc: 'A mobile app to discover, save, and explore nearby locations, unlocking places via real-world QR codes.',
      linkGit: 'https://github.com/AdamTroszczynski/ViewHunters',
    },
  ]);

  return { projects };
});
