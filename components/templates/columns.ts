import type {ColumnDef} from '@tanstack/vue-table'
import {Button} from '../ui/button'

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface Templates {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

export const columns: ColumnDef<Templates>[] = [
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'email',

    header: ({column}) => {
      return h(
        Button,
        {
          variant: 'ghost',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
        },
        () => ['Email', h('div', {class: 'ml-2 h-4 w-4'})]
      )
    },
    cell: ({row}) => h('div', {class: 'lowercase'}, row.getValue('email')),
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
  },
]
