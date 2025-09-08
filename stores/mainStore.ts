import { defineStore } from 'pinia';

export const useMainStore = defineStore('mainStore', () => {
  const projects: Ref<Project[]> = ref([
    {
      id: 1,
      name: 'Smocze Prawko',
      url: 'smoczePrawko',
      type: 'webApp',
      description:
        'A comprehensive analytics platform for e-commerce businesses featuring real-time data visualization, predictive analytics, and automated reporting capabilities that help businesses make data-driven decisions.',
      shortDesc:
        'A web app for practicing theoretical driving exam questions, featuring learning and exam modes, user statistics, premium account support, and profile customization.',
      startDate: 'Dec 2024',
      duration: '3 months',
      role: 'Lead Dev',
      teamMembers: '4 members',
      demoLink: 'https://smoczeprawko.pl',
      githubLink: null,
      photos: [
        {
          id: 1,
          imgSrc: '/photos/smoczeprawko/main.png',
          name: '1',
          description: '--ToDo--',
        },
        {
          id: 2,
          imgSrc: '/photos/smoczeprawko/main.png',
          name: '2',
          description: '--ToDo--',
        },
        {
          id: 3,
          imgSrc: '/photos/smoczeprawko/main.png',
          name: '3',
          description: '--ToDo--',
        },
        {
          id: 4,
          imgSrc: '/photos/smoczeprawko/main.png',
          name: '4',
          description: '--ToDo--',
        },
      ],
      challenge: [
        'E-commerce businesses were struggling with fragmented data across multiple platforms, making it difficult to gain actionable insights. Store owners needed a unified dashboard that could consolidate sales data, customer behavior, inventory levels, and marketing performance in real-time.',
        'The existing solutions were either too complex for small businesses or lacked the depth of analysis required for data-driven decision making. There was a clear need for an intuitive yet powerful analytics platform that could scale with business growth.',
      ],
      solution: {
        text: 'I developed a comprehensive analytics dashboard that integrates with major e- commerce platforms, payment gateways, and marketing tools. The solution provides real-time insights through interactive visualizations, automated reports, and predictive analytics.',
        tabs: [
          {
            id: 1,
            icon: 'chart',
            text: 'Real-time Data Visualization',
          },
          {
            id: 2,
            icon: 'chart',
            text: 'Real-time Data Visualization',
          },
          {
            id: 3,
            icon: 'chart',
            text: 'Real-time Data Visualization',
          },
          {
            id: 4,
            icon: 'chart',
            text: 'Real-time Data Visualization',
          },
        ],
      },
      developmentProcess: [
        {
          id: 1,
          header: 'Research & Planning',
          text: 'Conducted user interviews with 50+ e-commerce business owners to understand their pain points and requirements.',
        },
        {
          id: 2,
          header: 'Research & Planning',
          text: 'Conducted user interviews with 50+ e-commerce business owners to understand their pain points and requirements.',
        },
        {
          id: 3,
          header: 'Research & Planning',
          text: 'Conducted user interviews with 50+ e-commerce business owners to understand their pain points and requirements.',
        },
        {
          id: 4,
          header: 'Research & Planning',
          text: 'Conducted user interviews with 50+ e-commerce business owners to understand their pain points and requirements.',
        },
      ],
      result:
        'The dashboard has been adopted by over 500 e-commerce businesses, resulting in an average 40% increase in sales through better data-driven decision making.',
      techStack: {
        frontend: ['vue', 'nuxt', 'tailwind'],
        backend: ['node', 'express'],
        database: ['mongoDb', 'redis'],
        devops: ['docker', 'github'],
      },
      stats: {
        linesOfCode: '15,000+',
        components: '45',
        apiEndpoints: '28',
        testCoverage: '95%',
        performanceScore: '98/100',
      },
      performance: {
        performance: '98',
        loadTime: '0.8s',
        accessibility: '100',
        seo: '100',
        codeQuality: {
          testCoverage: '95%',
          maintainability: 'A',
          technicalDebt: 'Low',
          documentation: '100%',
        },
        userMetrics: {
          dailyActiveUser: '2,500+',
          sessionDuration: '8.5 min',
          bounceRate: '12%',
          userSatisfaction: '100%',
        },
      },
      cardColor: 'primary-blue',
      mainTechStack: ['nuxt', 'nest', 'redis', 'typeScript'],
    },
    {
      id: 2,
      name: 'Smocze Prawko',
      url: 'smoczePrawko',
      type: 'webApp',
      description:
        'A comprehensive analytics platform for e-commerce businesses featuring real-time data visualization, predictive analytics, and automated reporting capabilities that help businesses make data-driven decisions.',
      shortDesc:
        'A web app for practicing theoretical driving exam questions, featuring learning and exam modes, user statistics, premium account support, and profile customization.',
      startDate: 'Dec 2024',
      duration: '3 months',
      role: 'Lead Dev',
      teamMembers: '4 members',
      demoLink: 'smoczeprawko.pl',
      githubLink: null,
      photos: [
        {
          id: 1,
          imgSrc: '/photos/smoczeprawko/main.png',
          name: 'Application Dashboard',
          description: '--ToDo--',
        },
        {
          id: 2,
          imgSrc: '/photos/smoczeprawko/main.png',
          name: 'Application Dashboard',
          description: '--ToDo--',
        },
        {
          id: 3,
          imgSrc: '/photos/smoczeprawko/main.png',
          name: 'Application Dashboard',
          description: '--ToDo--',
        },
        {
          id: 4,
          imgSrc: '/photos/smoczeprawko/main.png',
          name: 'Application Dashboard',
          description: '--ToDo--',
        },
      ],
      challenge: [
        'E-commerce businesses were struggling with fragmented data across multiple platforms, making it difficult to gain actionable insights. Store owners needed a unified dashboard that could consolidate sales data, customer behavior, inventory levels, and marketing performance in real-time.',
        'The existing solutions were either too complex for small businesses or lacked the depth of analysis required for data-driven decision making. There was a clear need for an intuitive yet powerful analytics platform that could scale with business growth.',
      ],
      solution: {
        text: 'I developed a comprehensive analytics dashboard that integrates with major e- commerce platforms, payment gateways, and marketing tools. The solution provides real-time insights through interactive visualizations, automated reports, and predictive analytics.',
        tabs: [
          {
            id: 1,
            icon: 'chart',
            text: 'Real-time Data Visualization',
          },
          {
            id: 2,
            icon: 'chart',
            text: 'Real-time Data Visualization',
          },
          {
            id: 3,
            icon: 'chart',
            text: 'Real-time Data Visualization',
          },
          {
            id: 4,
            icon: 'chart',
            text: 'Real-time Data Visualization',
          },
        ],
      },
      developmentProcess: [
        {
          id: 1,
          header: 'Research & Planning',
          text: 'Conducted user interviews with 50+ e-commerce business owners to understand their pain points and requirements.',
        },
        {
          id: 2,
          header: 'Research & Planning',
          text: 'Conducted user interviews with 50+ e-commerce business owners to understand their pain points and requirements.',
        },
        {
          id: 3,
          header: 'Research & Planning',
          text: 'Conducted user interviews with 50+ e-commerce business owners to understand their pain points and requirements.',
        },
        {
          id: 4,
          header: 'Research & Planning',
          text: 'Conducted user interviews with 50+ e-commerce business owners to understand their pain points and requirements.',
        },
      ],
      result:
        'The dashboard has been adopted by over 500 e-commerce businesses, resulting in an average 40% increase in sales through better data-driven decision making.',
      techStack: {
        frontend: ['react', 'typeScript', 'tailwind'],
        backend: ['node', 'express'],
        database: ['mongoDb', 'redis'],
        devops: ['docker', 'github'],
      },
      stats: {
        linesOfCode: '15,000+',
        components: '45',
        apiEndpoints: '28',
        testCoverage: '95%',
        performanceScore: '98/100',
      },
      performance: {
        performance: '98',
        loadTime: '0.8s',
        accessibility: '100',
        seo: '100',
        codeQuality: {
          testCoverage: '95%',
          maintainability: 'A',
          technicalDebt: 'Low',
          documentation: '100%',
        },
        userMetrics: {
          dailyActiveUser: '2,500+',
          sessionDuration: '8.5 min',
          bounceRate: '12%',
          userSatisfaction: '100%',
        },
      },
      cardColor: 'primary-blue',
      mainTechStack: ['nuxt', 'nest', 'redis', 'typeScript'],
    },
  ]);

  return { projects };
});
