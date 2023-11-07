<script setup lang="ts">
import {columns} from '~/components/templates/columns'
import type {Templates} from '~/components/templates/columns'

const data = ref<Templates[]>([
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'example.com',
  },
])
</script>

<template>
  <div class="bg-white rounded-lg min-h-full py-40 space-y-10">
    <div class="px-9 space-y-10">
      <h2 className="text-gray-900 text-3xl font-medium">Form Templates</h2>
      <div class="flex justify-between">
        <div class="w-full max-w-md">
          <Search placeholder="Search templates..." />
        </div>
        <Button>Create new templates</Button>
      </div>
    </div>
    <div>
      <TemplatesTable :data="data" :columns="columns" />
    </div>
  </div>
</template>
