<template>
  <header
    class="bg-primary-white xl:border-secondary-grey-stroke sticky top-[0px] z-50 flex w-full justify-center xl:border-b"
  >
    <div
      class="bg-primary-white border-secondary-grey-stroke relative z-30 flex w-full max-w-[1440px] items-center justify-between border-b p-[16px] xl:border-none"
    >
      <button class="flex cursor-pointer items-center gap-[8px] lg:w-[206px]">
        <div
          class="flex h-[32px] w-[32px] items-center justify-center rounded-md bg-linear-to-r from-[#2563EB] to-[#10B981]"
        >
          <BaseIcon name="coding" color="primary-white" />
        </div>
        <span class="d-bold-sm text-primary-black">Adam Troszczyński</span>
      </button>

      <nav
        aria-label="Desktop menu"
        class="hidden xl:flex xl:items-center xl:gap-[30px]"
      >
        <LinkButton section-id="#home"> Home </LinkButton>
        <LinkButton section-id="#spotlightProjects">Gallery </LinkButton>
        <LinkButton section-id="#about"> Project </LinkButton>
        <LinkButton section-id="#skills"> Performance </LinkButton>
      </nav>

      <div class="flex items-center gap-[12px] lg:w-[206px]">
        <BaseButton
          :is-small="true"
          :is-grey="true"
          icon="arrow"
          class="hidden lg:flex"
          @click="back"
        >
          Back to Projects
        </BaseButton>
        <button
          class="cursor-pointer duration-200 active:scale-95 xl:hidden"
          @click="isMenuOpen = !isMenuOpen"
        >
          <BaseIcon name="menu" color="secondary-dark" class="xl:hidden" />
        </button>
      </div>
    </div>

    <nav
      aria-label="Mobile menu"
      class="bg-primary-white absolute left-[0px] z-20 flex w-full flex-col gap-[20px] p-[12px] transition-transform duration-500 xl:hidden"
      :class="isMenuOpen ? 'translate-y-[70px]' : '-translate-y-[300px]'"
    >
      <LinkButton section-id="#home"> Home </LinkButton>
      <LinkButton section-id="#spotlightProjects">Gallery </LinkButton>
      <LinkButton section-id="#about"> Project </LinkButton>
      <LinkButton section-id="#skills"> Performance </LinkButton>
      <BaseButton :is-small="true" :is-grey="true" icon="arrow" @click="back">
        Back to Projects
      </BaseButton>
    </nav>
  </header>
</template>
<script setup lang="ts">
import BaseButton from '@/components/buttons/BaseButton.vue';
import LinkButton from '@/components/buttons/LinkButton.vue';
import BaseIcon from '@/components/icons/BaseIcon.vue';

const isMenuOpen: Ref<boolean> = ref(false);

const back = async () => {
  await navigateTo('/');
};
</script>
