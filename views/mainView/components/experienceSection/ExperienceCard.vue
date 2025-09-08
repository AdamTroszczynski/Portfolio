<template>
  <div
    class="relative flex items-center gap-[64px] 2xl:gap-[255px]"
    :class="isReverse ? 'lg:flex-row' : 'lg:flex-row-reverse'"
  >
    <div
      class="border-primary-white absolute top-1/2 left-1/2 hidden h-[16px] w-[16px] -translate-x-1/2 -translate-y-1/2 transform rounded-full border-[4px] 2xl:block"
      :class="bgColorMap[color]"
    ></div>

    <div
      class="bg-primary-white shadow-base-lg border-secondary-grey-stroke flex max-w-[390px] gap-[16px] rounded-lg border p-[25px] lg:max-w-[475px] lg:p-[33px]"
    >
      <div
        class="flex h-[48px] min-w-[48px] items-center justify-center rounded-md lg:hidden"
        :class="bgColorMap[color]"
      >
        <BaseIcon :name="icon" color="primary-white" />
      </div>

      <div class="flex flex-col gap-[8px] lg:gap-[16px]">
        <div
          class="flex gap-[16px]"
          :class="isReverse ? 'lg:flex-row-reverse' : ''"
        >
          <div
            class="hidden h-[48px] min-w-[48px] items-center justify-center rounded-md lg:flex"
            :class="bgColorMap[color]"
          >
            <BaseIcon :name="icon" color="primary-white" />
          </div>

          <div class="flex flex-col">
            <h3 class="d-header-xs text-primary-dark lg:d-header-sm">
              {{ header }}
            </h3>
            <span
              class="d-semibold-md hidden lg:block"
              :class="[textColorMap[color], isReverse ? 'lg:text-end' : '']"
            >
              {{ company }}
            </span>
            <span
              class="d-semibold-sm xl:hidden"
              :class="[textColorMap[color], isReverse ? 'lg:text-end' : '']"
            >
              {{ startDate }} - {{ endDate }}
            </span>
          </div>
        </div>

        <span class="d-semibold-sm lg:hidden" :class="textColorMap[color]">
          {{ company }}
        </span>
        <p
          class="d-text-sm text-secondary-dark lg:d-text-md"
          :class="isReverse ? 'lg:text-end' : ''"
        >
          <slot />
        </p>
        <div
          class="flex flex-wrap gap-[4px] lg:gap-[8px]"
          :class="isReverse ? 'lg:justify-end' : ''"
        >
          <slot name="technologies" />
        </div>
      </div>
    </div>
    <div
      class="hidden flex-col gap-[2px] lg:flex 2xl:w-[475px]"
      :class="isReverse ? 'items-start' : 'items-end'"
    >
      <h3 class="d-semibold-md" :class="textColorMap[color]">
        {{ startDate }} - {{ endDate }}
      </h3>
      <span class="text-secondary-dark text-d-text-sm">{{
        calcYears > 1 ? `${calcYears} years` : `${calcYears} year`
      }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseIcon from '@/components/icons/BaseIcon.vue';
import {
  bgColorMap,
  type Colors,
  type IconsName,
  textColorMap,
} from '~/components/components.types';

const props = defineProps({
  color: {
    type: String as PropType<Colors>,
    required: true,
  },
  icon: {
    type: String as PropType<IconsName>,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    default: 'Present',
  },
  company: {
    type: String,
    required: true,
  },
  isReverse: {
    type: Boolean,
    default: false,
  },
});

const calcYears = computed<number>(() => {
  return props.endDate === 'Present'
    ? Number(new Date().getFullYear()) - Number(props.startDate)
    : Number(props.endDate) - Number(props.startDate);
});
</script>
