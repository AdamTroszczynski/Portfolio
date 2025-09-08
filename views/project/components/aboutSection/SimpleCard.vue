<template>
  <div
    class="shadow-base-lg lg:P-[33px] gsapFadeIn flex w-full max-w-[795px] flex-col gap-[24px] rounded-xl p-[25px] xl:max-w-[373px] xl:min-w-[373px]"
    :class="
      bgColorfull
        ? 'from-primary-blue to-primary-green bg-gradient-to-r'
        : 'bg-primary-white border-secondary-grey-stroke border'
    "
  >
    <div class="flex items-center gap-[12px]">
      <div
        class="flex h-[40px] w-[40px] items-center justify-center rounded-md"
        :class="
          iconWithBg
            ? 'from-primary-blue to-primary-green bg-gradient-to-r'
            : 'bg-transparent'
        "
      >
        <BaseIcon :name="icon" :color="iconColor" />
      </div>
      <h3
        class="d-header-sm"
        :class="bgColorfull ? 'text-primary-white' : 'text-primary-black'"
      >
        {{ header }}
      </h3>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { Colors, IconsName } from '@/components/components.types';
import BaseIcon from '@/components/icons/BaseIcon.vue';

defineProps({
  icon: {
    type: String as PropType<IconsName>,
    required: true,
  },
  iconWithBg: {
    type: Boolean,
    default: false,
  },
  bgColorfull: {
    type: Boolean,
    default: false,
  },
  iconColor: {
    type: String as PropType<Colors>,
    default: 'primary-white',
  },
  header: {
    type: String,
    required: true,
  },
});
</script>
