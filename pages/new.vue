<script setup lang="ts">
import useStore from '~/store'
import {buttonVariants} from '~/components/ui/button/variants'

const store = useStore()
const loading = ref(false)
const open = ref(false)
function handleTemplateSave() {
  loading.value = true

  if (!store.activeTemplate.name || store.forms.length < 1) {
    loading.value = false
    return alert('Something went wrong')
  }
  store.updateActiveTemplate({
    created_at: Date.now().toLocaleString(),
    updatead_at: Date.now().toLocaleString(),
  })

  setTimeout(() => {
    store.updateTemplates()
  }, 3000)

  open.value = true
  loading.value = false
}
</script>

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
        <UIButton @click="handleTemplateSave" class="min-w-[100px]">
          <template v-if="loading">Saving <Spinner /></template>
          <template v-else>Save</template>
        </UIButton>
        <UIAlertDialog :open="open" @update:open="open = !open">
          <UIAlertDialogContent class="flex flex-col items-center text-center max-w-sm gap-3 px-8">
            <Tick />
            <h3 class="text-gray-900 text-[32px] font-semibold font-['BR Sonoma'] leading-[48px]">
              Saved!
            </h3>
            <div class="text-center text-gray-500 text-base font-medium font-['BR Sonoma']">
              A new form has been added to your list. To see forms, click on the button below.
            </div>
            <UIAlertDialogCancel :class="buttonVariants()" @click="() => navigateTo('/')">
              Close
            </UIAlertDialogCancel>
          </UIAlertDialogContent>
        </UIAlertDialog>
      </div>
    </div>
    <div class="border-t border-t-secondary p-4 md:p-8 flex gap-6 grow">
      <LazyMainSection class="order-1" />
      <LazyElementsSection class="hidden xl:flex order-2" />
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
        <LazyElementsSection />
      </LazyUISheetContent>
    </LazyUISheet>
  </div>
</template>
