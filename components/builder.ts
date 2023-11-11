import useStore from '~/store'
import PageIcon from '~/components/svgs/templates/page.vue'
import TextIcon from '~/components/svgs/templates/textfield.vue'
import TextField from '~/components/form-elements/text-field.vue'
import PageField from '~/components/form-elements/page-field.vue'

const store = useStore()

export default {
  components: {TextField, PageField},
  setup() {
    const fields = [
      {
        name: 'TextField',
        text: 'Text',
        group: 'form', //form group
        hasOptions: false,
        isRequired: false,
        isHelpBlockVisible: false,
        isPlaceholderVisible: true,
        isUnique: false,
        icon: TextIcon,
      },
      {
        name: 'PageField',
        text: 'Page',
        group: 'form', //form group
        hasOptions: false,
        isRequired: false,
        isHelpBlockVisible: false,
        isPlaceholderVisible: true,
        isUnique: false,
        icon: PageIcon,
      },
    ]

    const deleteElement = (index: number) => {
      // Assuming vm is defined somewhere as the Vue app instance
      store.activeForm = []
      store.forms.splice(index, 1)
    }

    const cloneElement = (index: number, form) => {
      const cloned = {...form} // shallow clone
      store.forms.splice(index, 0, cloned)
    }

    const editElementProperties = form => {
      store.activeForm = form
    }

    return {
      fields,
      deleteElement,
      cloneElement,
      editElementProperties,
    }
  },
}
