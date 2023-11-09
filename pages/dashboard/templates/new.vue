<script setup lang="ts"></script>

<template>
  <div class="bg-white rounded-lg min-h-full py-10 space-y-10 flex flex-col">
    <div class="px-8 space-y-7">
      <p>
        <span
          class="text-gray-500 text-base font-medium font-['BR Sonoma'] capitalize leading-normal"
          >Form Templates / </span
        ><span
          class="text-gray-500 text-base font-semibold font-['BR Sonoma'] underline capitalize leading-normal"
          >My Personalized Template</span
        >
      </p>
      <div class="flex items-center justify-between">
        <div class="text-gray-900 text-[32px] font-medium font-['BR Sonoma'] leading-[48px]">
          Templates
        </div>
        <Button>Save</Button>
      </div>
    </div>
    <div class="border-t border-t-secondary p-8 flex gap-6 grow overflow-y-auto">
      <LazyMainSection />
      <LazyPreviewSection />
    </div>
  </div>
</template>
