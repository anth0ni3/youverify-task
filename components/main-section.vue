<script setup lang="ts">
import draggable from 'vuedraggable'
import Builder from './builder'
import useStore from '../store'

const store = useStore()

function deleteElement(index: number) {
  Builder.setup().deleteElement(index)
}

function cloneElement(index: number, form) {
  Builder.setup().cloneElement(index, form)
}

function editElementProperties(form) {
  Builder.setup().editElementProperties(form)
}

// watchEffect(() => console.log(store.forms))
</script>

<template>
  <div
    :class="
      cn(
        'grow min-h-full p-4 md:py-6 md:px-8  bg-slate-50 rounded-lg border-2 border-slate-500 relative overflow-hidden'
        // dragging ? ' border-blue-700 ' : ''
      )
    "
  >
    <template v-if="store.forms?.length == 0">
      <div class="absolute inset-0 grid place-content-center">No form element. Drag n drop</div>
    </template>
    <draggable
      class="h-full space-y-4 overflow-auto absolute inset-0 p-4 md:py-6 md:px-8"
      v-model="store.forms"
      item-key="text"
      group="formbuilder"
      group-class="__hoverr"
    >
      <template #item="{element: form, index}">
        <div class="border border-transparent" @click="editElementProperties(form)">
          <component
            :is="{...Builder.components[form.fieldType]}"
            :class="{'border-blue-400 border': form === store.activeForm}"
            @duplicate="cloneElement(index, form)"
            @remove="deleteElement(index)"
          />
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
