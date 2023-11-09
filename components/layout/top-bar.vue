<script setup lang="ts"></script>

<template>
  <div class="bg-white py-3 px-5 md:px-8 flex items-center gap-8 border-b justify-between">
    <div class="flex items-center gap-4">
      <div id="mobile_nav_toggler" class="2xl:hidden" />
      <LogoMark />
      <LogoText class="hidden lg:block" />
      <NuxtLink
        class="w-8 h-8 aspect-square bg-white rounded-full shadow-md border grid place-content-center cursor-pointer"
        to="../"
      >
        <ArrowLeft />
      </NuxtLink>
    </div>
    <div class="w-full max-w-md ml-auto hidden md:block">
      <Search class="" />
    </div>
    <div class="flex items-center gap-3">
      <Notification class="aspect-square min-w-[44px] h-12" />
      <div class="flex items-center gap-2 ml-auto">
        <Avatar />
        <p
          className="text-center text-slate-900 text-sm font-medium font-['BR Sonoma'] hidden md:block"
        >
          Alexander
        </p>
        <ChevronDown class="cursor-pointer" />
      </div>
    </div>
  </div>
</template>
>
