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
        <Dialog>
          <DialogTrigger>
            <Button><Plus />Create new templates</Button>
          </DialogTrigger>
          <DialogContent class="sm:max-w-[425px]">
            <form action="" class="space-y-4">
              <DialogHeader class="flex-row justify-between items-center gap-10">
                <DialogTitle class="text-2xl leading-none">Create New Template</DialogTitle>
                <DialogClose class="p-2 rounded-full" />
              </DialogHeader>
              <div class="space-y-4">
                <div class="space-y-2">
                  <Label for="name" class="text-gray-900 text-sm font-medium font-['BR Sonoma']"
                    >Template Name</Label
                  >
                  <Input id="name" value="Pedro Duarte" class="col-span-3" />
                </div>
                <div class="space-y-2">
                  <Label for="username" class="text-gray-900 text-sm font-medium font-['BR Sonoma']"
                    >Description</Label
                  >
                  <Textarea placeholder="Type your message here." />
                </div>
              </div>
              <DialogFooter class="justify-center">
                <!-- <Button type="submit">Create</Button> -->
                <NuxtLink to="/dashboard/templates/new">Create</NuxtLink>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
    <div>
      <TemplatesTable :data="data" :columns="columns" />
    </div>
  </div>
</template>
