<script setup lang="ts" generic="TTData, TValue">
import type {ColumnDef, SortingState, ColumnFiltersState} from '@tanstack/vue-table'
import {
  FlexRender,
  getCoreRowModel,
  useVueTable,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/vue-table'

const props = defineProps<{
  // @ts-ignore
  columns: ColumnDef<TData, TValue>[]
  // @ts-ignore
  data: TData[]
}>()

const sorting = ref<SortingState>([])
const columnFilters = ref<ColumnFiltersState>([])

const table = useVueTable({
  data: props.data,
  columns: props.columns,
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  onSortingChange: updaterOrValue => valueUpdater(updaterOrValue, sorting),
  onColumnFiltersChange: updaterOrValue => valueUpdater(updaterOrValue, columnFilters),
  getFilteredRowModel: getFilteredRowModel(),
  state: {
    get sorting() {
      return sorting.value
    },
    get columnFilters() {
      return columnFilters.value
    },
  },
})

const mounted = ref(false)
onMounted(() => {
  mounted.value = true
})
</script>

<template>
  <div>
    <template v-if="mounted">
      <Teleport to="#table_filter">
        <UIInput
          class="w-full"
          placeholder="Filter templates..."
          :model-value="table.getColumn('name')?.getFilterValue() as string"
          @update:model-value="table.getColumn('name')?.setFilterValue($event)"
        />
      </Teleport>
    </template>

    <div class="">
      <UITable>
        <UITableHeader class="bg-gray-50 border-b border-gray-400">
          <UITableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
            <UITableHead v-for="header in headerGroup.headers" :key="header.id">
              <FlexRender
                v-if="!header.isPlaceholder"
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
            </UITableHead>
          </UITableRow>
        </UITableHeader>
        <UITableBody>
          <template v-if="table.getRowModel().rows?.length">
            <UITableRow
              v-for="row in table.getRowModel().rows"
              :key="row.id"
              :data-state="row.getIsSelected() ? 'selected' : undefined"
              class="border-b-0"
            >
              <UITableCell v-for="cell in row.getVisibleCells()" :key="cell.id" class="pl-8 py-6">
                <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
              </UITableCell>
            </UITableRow>
          </template>
          <template v-else>
            <UITableRow>
              <UITableCell :colSpan="columns.length" class="h-24 text-center">
                No results.
              </UITableCell>
            </UITableRow>
          </template>
        </UITableBody>
      </UITable>
    </div>
  </div>
</template>
