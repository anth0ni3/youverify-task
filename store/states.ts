export interface FormState {
  type: FormType
  info: unknown
  id?: number
}

export interface FormTypeInfo {
  page?: {
    description: string
    options: {value: string; label: string}[]
  }
  textfield?: {
    label: string
    value: string
  }
}

export enum FormType {
  textfield = 'textfield',
  page = 'page',
}

export interface TemplateState {
  id: string
  creator_name: string
  name: string
  description: string
  created_at?: string
  updatead_at?: string
  formData: FormState[]
}

export const templateState = () =>
  useState<TemplateState>('templateState', () => ({
    id: 'eeokeoks',
    name: '',
    description: '',
    creator_name: '',
    formData: [],
  }))

export const isDragActive = () => useState<boolean>('dragging', () => false)

export const templates = () => useState<TemplateState[]>('templates', () => [])
