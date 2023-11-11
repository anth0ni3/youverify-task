<script setup>
const options = ref([
  {
    label: 'Option one',
    value: 'one',
  },
  {
    label: 'Option Two',
    value: 'two',
  },
  {
    label: 'Option Three',
    value: 'three',
  },
])

const emit = defineEmits(['duplicate', 'remove'])
</script>

<template>
  <div class="px-6 py-3 bg-white rounded-lg border border-zinc-200 space-y-4">
    <div class="flex items-center justify-between">
      <div class="flex gap-2">
        <span class="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <Save />
        </span>
        <span class="p-2 rounded-lg hover:bg-gray-100 cursor-pointer" @click="$emit('duplicate')">
          <Copy />
        </span>
        <span class="p-2 rounded-lg hover:bg-gray-100 cursor-pointer" @click="$emit('remove')">
          <Delete />
        </span>
      </div>
      <Knob class="cursor-pointer" />
    </div>
    <div class="h-12 relative">
      <span class="absolute top-0 left-0 h-full w-12 z-10 grid place-content-center">
        <Page class="w-6 h-6" />
      </span>
      <UIInput class="absolute inset-0 pl-11" />
    </div>

    <UIRadioGroup default-value="comfortable">
      <div class="flex items-center space-x-2">
        <UIRadioGroupItem id="r1" value="default" />
        <UILabel for="r1">Default</UILabel>
      </div>
      <div class="flex items-center space-x-2">
        <UIRadioGroupItem id="r2" value="comfortable" />
        <UILabel for="r2">Comfortable</UILabel>
      </div>
      <div class="flex items-center space-x-2">
        <UIRadioGroupItem id="r3" value="compact" />
        <UILabel for="r3">Compact</UILabel>
      </div>
    </UIRadioGroup>
  </div>
</template>
