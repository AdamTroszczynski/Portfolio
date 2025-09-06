<template>
  <div
    class="bg-priary-white shadow-base-lg flex max-w-[356px] flex-col overflow-hidden rounded-xl lg:max-w-[590px]"
  >
    <img
      :src="imgSrc"
      alt="test"
      class="min-h-[192px] w-full object-cover lg:max-h-[256px] lg:min-h-[256px]"
    />
    <div class="flex flex-col gap-[14px] p-[24px] lg:gap-[20px] lg:p-[32px]">
      <h3 class="d-header-sm text-primary-black lg:d-header-md">
        {{ header }}
      </h3>
      <p class="d-text-sm text-secondary-dark lg:d-text-md lg:min-h-[72px]">
        <slot />
      </p>
      <div class="flex gap-[4px] lg:gap-[8px]">
        <slot name="techStack"></slot>
      </div>
      <div class="flex gap-[12px] lg:gap-[16px]">
        <BaseButton
          :bg-color="buttonColor"
          icon="goto"
          @click="navigateTo('/project/smoczePrawko')"
        >
          View Details
        </BaseButton>
        <a v-if="gitLink" :href="gitLink" target="_blank">
          <BaseButton :is-grey="true" icon="github"></BaseButton>
        </a>

        <BaseButton
          v-else
          :is-grey="true"
          icon="github"
          class="!cursor-not-allowed opacity-[40%]"
        ></BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/buttons/BaseButton.vue';
import type { Colors } from '@/components/components.types';

defineProps({
  header: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  buttonColor: {
    type: String as PropType<Colors>,
    default: 'primary-blue',
  },
  gitLink: {
    type: String as PropType<string | null>,
    default: null,
  },
});
</script>
