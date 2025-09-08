import { defineStore } from 'pinia';

import type { AppType } from '@/stores/mainStore.types';

export const useMainViewStore = defineStore('counter', () => {
  const scroll: Ref<number> = ref(0);
  const selectedFilter: Ref<AppType> = ref('all');

  const SET_SCROLL = (newScroll: number) => {
    scroll.value = newScroll;
  };

  const SET_SELECTED_FILTER = (newFilter: AppType) => {
    selectedFilter.value = newFilter;
  };

  const saveScrollFromLenis = () => {
    const lenis = useLenis();
    if (lenis.value) SET_SCROLL(lenis.value?.scroll);
  };

  const setSelectedFilter = (newFilter: AppType) => {
    SET_SELECTED_FILTER(newFilter);
  };

  return {
    states: { scroll, selectedFilter },
    actions: { saveScrollFromLenis, setSelectedFilter },
  };
});
