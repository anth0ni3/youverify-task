<script setup lang="ts">
import {cn} from '~/utils'

interface DialogHeaderProps {
  class?: string
}

const props = defineProps<DialogHeaderProps>()
</script>

<template>
  <div :class="cn('flex flex-col text-center sm:text-left', props.class)">
    <slot />
  </div>
</template>
