export interface FormStateData {
  data?: {
    type: FormType
    info: unknown
    id?: number
  }[]
  draggable: boolean
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

export const formState = () =>
  useState<FormStateData>('formState', () => ({
    data: [],
    draggable: false,
  }))
