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
        <UIButton>Save</UIButton>
      </div>
    </div>
    <div class="border-t border-t-secondary p-4 md:p-8 flex gap-6 grow overflow-y-auto">
      <LazyMainSection class="order-1" />
      <LazyPreviewSection class="hidden xl:flex order-2" />
    </div>

    <LazyUISheet>
      <LazyUISheetTrigger :as-child="true">
        <LazyUIButton
          class="fixed bottom-10 right-10 rounded-full h-14 w-14 aspect-square shadow-md shadow-primary xl:hidden"
          size="icon"
          ><LazyPlus class="w-7 h-7"
        /></LazyUIButton>
      </LazyUISheetTrigger>
      <LazyUISheetContent class="pt-10">
        <LazyUISheetHeader class="screen-only hidden">Form elements</LazyUISheetHeader>
        <LazyPreviewSection />
      </LazyUISheetContent>
    </LazyUISheet>
  </div>
</template>
