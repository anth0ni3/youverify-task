import UIButton from '~/components/ui/button/button.vue'
import type {ColumnDef} from '@tanstack/vue-table'
import {ArrowUpDown} from 'lucide-vue-next'

export interface Templates {
  id: string
  name: string
  modified_by: string
  created_at: string
  updated_at: string
}

export const columns: ColumnDef<Templates>[] = [
  {
    accessorKey: 'name',
    header: ({column}) => {
      return h(
        UIButton,
        {
          variant: 'ghost',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
        },
        () => ['Name', h(ArrowUpDown, {class: 'ml-2 h-4 w-4'})]
      )
    },
  },
  {
    accessorKey: 'creator_name',

    header: ({column}) => {
      return h(
        UIButton,
        {
          variant: 'ghost',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
        },
        () => ['Modified By', h(ArrowUpDown, {class: 'ml-2 h-4 w-4'})]
      )
    },
    cell: ({row}) => h('div', {class: 'lowercase'}, row.getValue('creator_name')),
  },
  {
    accessorKey: 'created_at',
    header: ({column}) => {
      return h(
        UIButton,
        {
          variant: 'ghost',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
        },
        () => ['Date Created', h(ArrowUpDown, {class: 'ml-2 h-4 w-4'})]
      )
    },
  },
  {
    accessorKey: 'updated_at',
    header: ({column}) => {
      return h(
        UIButton,
        {
          variant: 'ghost',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
        },
        () => ['Last Modified', h(ArrowUpDown, {class: 'ml-2 h-4 w-4'})]
      )
    },
  },
]
