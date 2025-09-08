<template>
  <section
    id="gallery"
    class="bg-secondary-dark-white flex flex-col gap-[32px] px-[16px] py-[48px] xl:px-[112px] xl:py-[64px]"
  >
    <div class="gsapFadeIn flex flex-col gap-[12px]">
      <h2 class="text-primary-black d-header-md text-center xl:text-[2.25rem]">
        {{ spotlightView.name }}
      </h2>
      <p class="text-secondary-dark d-text-sm text-center">
        {{ spotlightView.description }}
      </p>
    </div>
    <div class="gsapFadeIn flex flex-col items-center gap-[32px]">
      <div
        class="shadow-base-lg aspect-[16/9] w-full max-w-[517px] overflow-hidden rounded-xl xl:max-w-[1216px]"
      >
        <Transition name="fade" mode="out-in">
          <NuxtImg
            :key="spotlightView.imgSrc"
            :src="spotlightView.imgSrc"
            :alt="spotlightView.name"
            class="w-full object-cover"
          />
        </Transition>
      </div>
      <div
        class="gsapFadeIn flex w-full flex-col items-center gap-[24px] xl:flex-row xl:justify-center xl:gap-[32px]"
      >
        <ImgCard
          v-for="(view, index) in views"
          :key="view.id"
          :img-src="view.imgSrc"
          :header="view.name"
          @click="changeSpotllight(index)"
        >
          {{ view.description }}
        </ImgCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ImgCard from '@project/components/showcaseSection/ImgCard.vue';
import { useProjectStore } from '@project/projectStore';
import { useWindowSize } from '@vueuse/core';

import type { Photo } from '@/stores/mainStore.types';

const { width } = useWindowSize();
const projectStore = useProjectStore();

const spotlightView: Ref<Photo> = ref(projectStore.project.photos[0]);

const views: Ref<Photo[]> = ref(
  projectStore.project.photos.filter((el) => el.id !== 1),
);

const changeSpotllight = (index: number) => {
  if (width.value < 1024) return;
  const temp = views.value[index];
  views.value.splice(index, 1, spotlightView.value);
  spotlightView.value = temp;
};

onMounted(() => {});
</script>
