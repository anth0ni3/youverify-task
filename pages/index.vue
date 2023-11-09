<script setup lang="ts">
import {toTypedSchema} from '@vee-validate/zod'
import {useForm} from 'vee-validate'
import * as z from 'zod'

import {columns} from '~/components/templates/columns'
import type {Templates} from '~/components/templates/columns'
import {FormField} from '~/components/ui/form'

const isFormOpen = ref(false)

const data = ref<Templates[]>([
  {
    id: '728ed52f',
    created_at: '100',
    updated_at: 'pending',
    name: 'm@example.com',
    modified_by: 'Anthony',
  },
  {
    id: '7282f',
    created_at: '200',
    updated_at: 'spending',
    name: 'me.com',
    modified_by: 'Anthonia',
  },
])

const formSchema = toTypedSchema(
  z.object({
    name: z.string().min(2).max(50),
    template_name: z.string().min(2).max(50),
    description: z.string().min(2).max(50),
  })
)

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit(values => {
  console.log('Form submitted!', values)
  isFormOpen.value = false
  navigateTo('/new')
})
</script>

<template>
  <div class="bg-white rounded-lg min-h-full py-10 space-y-10">
    <div class="px-9 space-y-10">
      <h2 className="text-gray-900 font-medium" style="font-size: 32px; font-weight: 500">
        Form Templates
      </h2>
      <div class="flex justify-between">
        <div id="table_filter" class="max-w-lg grow" />
        <UIDialog :open="isFormOpen" @update:open="isFormOpen = !isFormOpen">
          <UIDialogTrigger :asChild="true">
            <UIButton><Plus />Create new templates</UIButton>
          </UIDialogTrigger>
          <UIDialogContent class="sm:max-w-[425px]">
            <form @submit="onSubmit" class="space-y-4">
              <UIDialogHeader class="flex-row justify-between items-center gap-10">
                <UIDialogTitle class="text-2xl leading-none">Create New Template</UIDialogTitle>
                <UIDialogClose class="p-2 rounded-full" />
              </UIDialogHeader>
              <div class="space-y-4">
                <FormField v-slot="{componentField}" name="name">
                  <UIFormItem>
                    <UIFormLabel
                      for="name"
                      class="text-gray-900 text-sm font-medium font-['BR Sonoma']"
                      >Creator Name</UIFormLabel
                    >
                    <UIFormControl>
                      <UIInput
                        type="text"
                        placeholder="Type your name here."
                        v-bind="componentField"
                      />
                    </UIFormControl>
                    <UIFormMessage />
                  </UIFormItem>
                </FormField>

                <FormField v-slot="{componentField}" name="template_name">
                  <UIFormItem>
                    <UIFormLabel
                      for="template_name"
                      class="text-gray-900 text-sm font-medium font-['BR Sonoma']"
                      >Template Name</UIFormLabel
                    >
                    <UIFormControl>
                      <UIInput
                        type="text"
                        placeholder="Type your template name here."
                        v-bind="componentField"
                      />
                    </UIFormControl>
                    <UIFormMessage />
                  </UIFormItem>
                </FormField>
                <FormField v-slot="{componentField}" name="description">
                  <UIFormItem>
                    <UIFormLabel
                      for="description"
                      class="text-gray-900 text-sm font-medium font-['BR Sonoma']"
                      >Description</UIFormLabel
                    >
                    <UIFormControl>
                      <UITextarea placeholder="Type your message here." v-bind="componentField" />
                    </UIFormControl>
                    <UIFormMessage />
                  </UIFormItem>
                </FormField>
              </div>
              <UIDialogFooter class="justify-center">
                <UIButton type="submit"> Create</UIButton>
              </UIDialogFooter>
            </form>
          </UIDialogContent>
        </UIDialog>
      </div>
    </div>
    <div>
      <TemplatesTable :data="data" :columns="columns" />
    </div>
  </div>
</template>
