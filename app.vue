<script setup lang="ts">
import '~/assets/css/global.css'
</script>

<template>
  <div class="flex flex-col h-full">
    <TopBar />
    <div class="bg-zinc-100 grow flex">
      <DesktopNav />
      <main class="grow p-4 container mx-auto @container/dashboard_main">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
