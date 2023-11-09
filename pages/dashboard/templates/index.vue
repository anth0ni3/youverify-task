<script setup lang="ts">
import {columns} from '~/components/templates/columns'
import type {Templates} from '~/components/templates/columns'

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
</script>

<template>
  <div class="bg-white rounded-lg min-h-full py-10 space-y-10">
    <div class="px-9 space-y-10">
      <h2 className="text-gray-900 font-medium" style="font-size: 32px; font-weight: 500">
        Form Templates
      </h2>
      <div class="flex justify-between">
        <div id="table_filter" class="max-w-lg grow" />
        <UIDialog>
          <UIDialogTrigger>
            <UIButton><Plus />Create new templates</UIButton>
          </UIDialogTrigger>
          <UIDialogContent class="sm:max-w-[425px]">
            <form action="" class="space-y-4">
              <UIDialogHeader class="flex-row justify-between items-center gap-10">
                <UIDialogTitle class="text-2xl leading-none">Create New Template</UIDialogTitle>
                <UIDialogClose class="p-2 rounded-full" />
              </UIDialogHeader>
              <div class="space-y-4">
                <div class="space-y-2">
                  <UILabel
                    for="username"
                    class="text-gray-900 text-sm font-medium font-['BR Sonoma']"
                    >Description</UILabel
                  >
                  <UITextarea placeholder="Type your message here." />
                </div>
              </div>
              <UIDialogFooter class="justify-center">
                <!-- <UIButton type="submit">Create</UIButton> -->
                <NuxtLink to="/dashboard/templates/new">Create</NuxtLink>
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
