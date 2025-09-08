<template>
  <div class="flex w-full flex-col gap-[16px]">
    <div class="flex w-full flex-col gap-[12px]">
      <h4 class="d-semibold-sm text-primary-black lg:d-semibold-md">
        {{ header }}
      </h4>
      <div class="flex w-full flex-wrap gap-[8px]"><slot /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  header: {
    type: String,
    required: true,
  },
});
</script>
