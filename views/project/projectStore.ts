import { defineStore } from 'pinia';

import { useMainStore } from '@/stores/mainStore';
import type { Project } from '@/stores/mainStore.types';

export const useProjectStore = defineStore('projectstore', () => {
  const mainStore = useMainStore();
  const project: Ref<Project | null> = ref(null);

  const SET_PROJECT = (newProject: Project) => {
    project.value = newProject;
  };

  const setProject = (url: string) => {
    const proj = mainStore.projects.find((el) => el.url === url);
    if (proj) SET_PROJECT(proj);
  };

  return {
    project: project as Ref<Project>,
    setProject,
  };
});
