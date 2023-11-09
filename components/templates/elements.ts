import Date from '~/components/svgs/templates/date.vue'
import Textfield from '~/components/svgs/templates/textfield.vue'
import Checkbox from '~/components/svgs/templates/checkbox.vue'
import Group from '~/components/svgs/templates/group.vue'
import List from '~/components/svgs/templates/list.vue'
import Page from '~/components/svgs/templates/page.vue'
import FormTextField from '~/components/templates/form-elements/text-field.vue'
import FormPageField from '~/components/templates/form-elements/page-field.vue'

export const inputTemplateElements = [
  {
    name: 'textfield',
    label: 'Text Field',
    icon: Textfield,
    element: FormTextField,
  },
  {
    name: 'date',
    label: 'Date',
    icon: Date,
  },
  {
    name: 'checkbox',
    label: 'Checkbox',
    icon: Checkbox,
  },
]

export const layoutTemplateElements = [
  {
    name: 'group',
    label: 'Group',
    icon: Group,
  },
  {
    name: 'page',
    label: 'Page',
    icon: Page,
    element: FormPageField,
  },
  {
    name: 'list',
    label: 'List',
    icon: List,
  },
]
