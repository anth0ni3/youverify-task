<script setup lang="ts">
const expanded = ref(true)
</script>

<template>
  <aside
    :class="
      cn(
        ' bg-white border-r-black/10  border-r h-full  transition-all relative lg:block',
        expanded ? 'w-[20.25rem]' : 'w-[5rem]'
      )
    "
  >
    <Teleport to="#expand_btn">
      <button
        class="w-8 h-8 bg-white rounded-full shadow-md border grid place-content-center"
        @click="expanded = !expanded"
      >
        <ArrowLeft
          :style="{
            rotate: expanded ? '0deg' : '180deg',
            transition: 'rotate 500ms ',
          }"
        />
      </button>
    </Teleport>
  </aside>
</template>
