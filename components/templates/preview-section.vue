<script setup lang="ts">
import {inputTemplateElements, layoutTemplateElements} from '~/components/templates/elements'
import draggable from 'vuedraggable'

const list1 = ref([
  {id: 1, name: 'Item 1'},
  {id: 2, name: 'Item 2'},
  {id: 3, name: 'Item 3'},
  {id: 4, name: 'Item 4'},
])

let idGlobal = 8

const _form = templateState().value.formData
const dragging = isDragActive().value

// function log(evt) {
//   window.console.log(evt)
// }
function cloneDog(d: any) {
  return d
  // return [
  //   ..._form.value,
  //   {
  //     id: idGlobal++,
  //     type: type,
  //   },
  // ]
  // console.log(d)
}
</script>

<template>
  <div class="max-w-sm min-h-full w-full p-6 rounded-md border border-zinc-200 flex flex-col gap-6">
    <h4 class="text-gray-900 text-base font-medium font-['BR Sonoma']">Form Elements</h4>
    <div class="grow space-y-6">
      <div class="space-y-2">
        <div class="text-gray-500 text-sm font-medium font-['BR Sonoma']">INPUT</div>

        <draggable
          class="space-y-2"
          v-model="inputTemplateElements"
          :group="{name: 'form_stuff', pull: 'clone', put: false}"
          :clone="cloneDog"
          :sort="false"
          handle="#drag_handle"
          @start="dragging = true"
          @end="dragging = false"
          item-key="name"
        >
          <template #item="{element}">
            <div
              class="flex items-center justify-between px-3 py-2 rounded-md border border-zinc-200 select-none"
            >
              <div class="grow flex gap-2 items-center">
                <span>
                  <component :is="element.icon"></component>
                </span>
                <p>
                  {{ element.label }}
                </p>
              </div>
              <span class="grid place-content-center cursor-pointer">
                <Knob id="drag_handle" />
              </span>
            </div>
          </template>
        </draggable>
      </div>
      <div class="space-y-2">
        <div class="text-gray-500 text-sm font-medium font-['BR Sonoma']">LAYOUT</div>
        <draggable
          class="space-y-2"
          :list="layoutTemplateElements"
          :group="{name: 'form_stuff', pull: 'clone', put: false}"
          :sort="false"
          @start=""
          :clone="cloneDog"
          item-key="name"
        >
          <template #item="{element}">
            <div
              class="flex items-center justify-between px-3 py-2 rounded-md border border-zinc-200 select-none"
            >
              <div class="grow flex gap-2 items-center">
                <span>
                  <component :is="element.icon"></component>
                </span>
                <p>
                  {{ element.label }}
                </p>
              </div>
              <span class="grid place-content-center cursor-pointer">
                <Knob />
              </span>
            </div>
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>
