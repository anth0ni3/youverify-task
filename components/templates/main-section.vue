<script setup lang="ts">
import draggable from 'vuedraggable'

const _form = formState()

// function log(evt) {
//   window.console.log(_form.value.data)
// }
</script>

<template>
  <div
    :class="
      cn(
        'grow min-h-full py-6 px-8  bg-slate-50 rounded-lg border-2 border-slate-500 relative',
        _form.draggable ? ' border-blue-700 ' : ''
      )
    "
  >
    <template v-if="_form.data?.length == 0">
      <div class="absolute inset-0 grid place-content-center">No form element. Drag n drop</div>
    </template>
    <draggable
      class="h-full space-y-4"
      v-model="_form.data"
      group="form_stuff"
      item-key="name"
      animation="150"
      ghost-class="__hoverr"
    >
      <template #item="{element}">
        <div class="">
          <component :is="{...element.element}"></component>
        </div>
      </template>
    </draggable>
  </div>
</template>

<style>
.__hoverr {
  height: 20px;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
}
.__hoverr::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: #dbe2f1;
  z-index: 300;
}
</style>
