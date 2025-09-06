<template>
  <VueLenis root>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </VueLenis>
</template>

<style>
/* Animacja wejścia layoutu (nowy) */
.layout-enter-active {
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}
.layout-enter-from {
  opacity: 0;
}
.layout-enter-to {
  opacity: 1;
}

/* Animacja wyjścia layoutu (stary) */
.layout-leave-active {
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}
.layout-leave-from {
  opacity: 1;
}
.layout-leave-to {
  opacity: 0;
}
</style>
