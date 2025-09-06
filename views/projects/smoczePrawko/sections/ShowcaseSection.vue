<template>
  <section
    class="flex flex-col gap-[32px] px-[16px] py-[48px] xl:px-[112px] xl:py-[64px]"
  >
    <div class="flex flex-col gap-[12px]">
      <h2 class="text-primary-black d-header-md text-center xl:text-[2.25rem]">
        Project Showcase
      </h2>
      <p class="text-secondary-dark d-text-sm text-center">
        Visual walkthrough of the dashboard's key features
      </p>
    </div>
    <div class="flex flex-col items-center gap-[32px]">
      <div
        class="shadow-base-lg aspect-[16/9] w-full max-w-[517px] overflow-hidden rounded-xl xl:max-w-[1216px]"
      >
        <Transition name="fade" mode="out-in">
          <NuxtImg
            :key="spotlightView.imgSrc"
            :src="spotlightView.imgSrc"
            :alt="spotlightView.header"
            class="w-full object-cover"
          />
        </Transition>
      </div>
      <div
        class="flex w-full flex-col items-center gap-[24px] xl:flex-row xl:justify-center xl:gap-[32px]"
      >
        <ImgCard
          v-for="(view, index) in views"
          :key="view.id"
          :img-src="view.imgSrc"
          :header="view.header"
          @click="changeSpotllight(index)"
          >{{ view.desc }}</ImgCard
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ImgCard from '@projects/smoczePrawko/components/showcaseSection/ImgCard.vue';
import { useWindowSize } from '@vueuse/core';

type View = {
  id: number;
  imgSrc: string;
  header: string;
  desc: string;
};

const { width } = useWindowSize();

const spotlightView: Ref<View> = ref({
  id: 1,
  imgSrc: '/photos/proj2.png',
  header: 'MainPage',
  desc: 'MainPage',
});

const views: Ref<View[]> = ref([
  {
    id: 2,
    imgSrc: '/photos/proj3.png',
    header: 'Analytics Overview',
    desc: 'Real-time KPIs and performance metrics',
  },
  {
    id: 3,
    imgSrc: '/photos/proj4.png',
    header: 'Customer Insights',
    desc: 'Behavioral analysis and user journey tracking',
  },
  {
    id: 4,
    imgSrc: '/photos/proj1.png',
    header: 'Inventory Management',
    desc: 'Stock tracking and demand forecasting',
  },
]);

const changeSpotllight = (index: number) => {
  if (width.value < 1024) return;
  const temp = views.value[index];
  views.value.splice(index, 1, spotlightView.value);
  spotlightView.value = temp;
};
</script>
