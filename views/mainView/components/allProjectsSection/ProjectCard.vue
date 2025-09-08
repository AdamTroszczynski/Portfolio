<template>
  <div
    class="bg-priary-white shadow-base-lg group flex max-w-[356px] flex-col overflow-hidden rounded-xl lg:max-w-[382px]"
  >
    <div class="overflow-hidden">
      <img
        :src="imgSrc"
        alt="test"
        class="min-h-[160px] w-full transition-transform duration-400 group-hover:scale-[105%] lg:max-h-[192px] lg:min-h-[192px]"
        :class="isMobile ? 'object-contain' : 'object-cover'"
      />
    </div>
    <div class="flex flex-col gap-[12px] p-[20px] lg:gap-[14px] lg:p-[24px]">
      <h3
        class="d-header-xs text-primary-black lg:d-header-sm transition-colors duration-300"
        :class="textHoverMap[buttonColor]"
      >
        {{ header }}
      </h3>
      <p class="d-text-sm text-secondary-dark lg:min-h-[84px]">
        <slot />
      </p>
      <div class="flex gap-[4px]">
        <slot name="techStack"></slot>
      </div>
      <div class="flex gap-[12px] lg:gap-[12px]">
        <BaseButton
          :bg-color="buttonColor"
          icon="goto"
          :is-disabled="!url"
          @click="goTo"
        >
          View Details
        </BaseButton>
        <a v-if="linkGit" :href="linkGit" target="_blank">
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
import { type Colors, textHoverMap } from '@/components/components.types';

const props = defineProps({
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
  isMobile: {
    type: Boolean,
    default: false,
  },
  linkGit: {
    type: String as PropType<string | null>,
    default: null,
  },
  url: {
    type: String as PropType<string | null>,
    required: true,
  },
});

const goTo = async () => {
  if (props.url) await navigateTo(`/project/${props.url}`);
};
</script>
