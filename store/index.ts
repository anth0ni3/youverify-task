export interface TemplateState {
  creator_name: string
  name: string
  description: string
  created_at?: string
  updatead_at?: string
}

const useStore = defineStore('store', () => {
  const forms = ref([])
  const templates = ref([]) as Ref<TemplateState[]>
  const activeForm = ref([])
  const activeTemplate = ref({}) as Ref<TemplateState>
  // const doubleCount = computed(() => count.value * 2)
  function updateTemplates() {
    templates.value = [...templates.value, activeTemplate.value]
  }
  function updateActiveTemplate(values: Partial<TemplateState>) {
    activeTemplate.value = {...activeTemplate.value, ...values} as TemplateState
  }

  return {forms, activeForm, activeTemplate, templates, updateTemplates, updateActiveTemplate}
})

export default useStore
