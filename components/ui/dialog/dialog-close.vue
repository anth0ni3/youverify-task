<script setup lang="ts">
import {DialogClose, type DialogCloseProps} from 'radix-vue'
import {X} from 'lucide-vue-next'

const props = defineProps<DialogCloseProps & {class?: string}>()
</script>

<template>
  <DialogClose :class="cn('p-0.5 transition-colors rounded-md hover:bg-secondary', props.class)">
    <X class="w-4 h-4" />
    <span class="sr-only">Close</span>
  </DialogClose>
</template>
