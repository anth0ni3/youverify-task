<script setup lang="ts"></script>

<template>
  <div class="bg-white py-3 px-20 flex items-center gap-8 border-b">
    <div class="flex gap-1 items-center mr-10">
      <LogoMark />
      <LogoText />
    </div>
    <div id="expand_btn" />
    <div class="w-full max-w-md ml-auto">
      <Search class="" />
    </div>
    <Notification />
    <div class="flex items-center gap-2">
      <Avatar />
      <p className="text-center text-slate-900 text-sm font-medium font-['BR Sonoma']">Alexander</p>
      <ChevronDown class="cursor-pointer" />
    </div>
  </div>
</template>
>
