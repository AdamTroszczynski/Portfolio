import type { ProjectTypes } from '@mainView/MainView.types';
import { defineStore } from 'pinia';

export const useMainViewStore = defineStore('counter', () => {
  const scroll: Ref<number> = ref(0);
  const selectedFilter: Ref<ProjectTypes> = ref('All');

  const SET_SCROLL = (newScroll: number) => {
    scroll.value = newScroll;
  };

  const SET_SELECTED_FILTER = (newFilter: ProjectTypes) => {
    selectedFilter.value = newFilter;
  };

  const saveScrollFromLenis = () => {
    const lenis = useLenis();
    if (lenis.value) SET_SCROLL(lenis.value?.scroll);
  };

  const setSelectedFilter = (newFilter: ProjectTypes) => {
    SET_SELECTED_FILTER(newFilter);
  };

  return {
    states: { scroll, selectedFilter },
    actions: { saveScrollFromLenis, setSelectedFilter },
  };
});
