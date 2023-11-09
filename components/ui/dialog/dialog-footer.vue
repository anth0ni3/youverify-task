<script setup lang="ts">
import {cn} from '~/utils'

interface DialogFooterProps {
  class?: string
}

const props = defineProps<DialogFooterProps>()
</script>

<template>
  <div :class="cn('flex mt-1.5 ', props.class)">
    <slot />
  </div>
</template>
