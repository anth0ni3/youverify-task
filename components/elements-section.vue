<script setup lang="ts">
import {inputTemplateElements, layoutTemplateElements} from '~/components/elements'
import draggable from 'vuedraggable'
import Builder from './builder'

const fields = Builder.setup().fields
// const dragging = ref(Builder.setup().dragging)

function clone(field) {
  let newField = {
    fieldType: field.name,
  }

  newField['label'] = 'Enter your field label'

  // Add dummy options for loading the radio/checkbox
  if (field.hasOptions) {
    newField['options'] = [
      {optionLabel: 'Option 1', optionValue: 'Option 1'},
      {optionLabel: 'Option 2', optionValue: 'Option 2'},
    ]
  }

  return newField
}
function onStart() {
  // console.log("start liao")
}
// function checkStopDragCondition(field){
//   var form = this.forms,
//       formArray = [];

//   for (var key in form) {
//     formArray.push(form[key]['fieldType'])
//   }

//   // Check if the fieldname exist in formArray
//   // And when the field.isUnique too
//   return _.includes(formArray, field.name) && field.isUnique;
// }
</script>

<template>
  <div class="max-w-sm min-h-full w-full p-6 rounded-md border border-zinc-200 flex flex-col gap-6">
    <h4 class="text-gray-900 text-base font-medium font-['BR Sonoma']">Form Elements</h4>
    <div class="grow space-y-6">
      <div class="space-y-2">
        <div class="text-gray-500 text-sm font-medium font-['BR Sonoma']">INPUT</div>

        <draggable
          class="space-y-2"
          :list="fields"
          :group="{name: 'formbuilder', pull: 'clone', put: false}"
          :clone="clone"
          handle="#drag_handle"
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
                  {{ element.text }}
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
          :group="{name: 'formbuilder', pull: 'clone', put: false}"
          :sort="false"
          :clone="clone"
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
