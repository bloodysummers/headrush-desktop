import { JSONSchemaType } from 'ajv'

export const defaultConfig = {
  hrPath: ''
}

export type EditorData = {
  hrPath: string
}

export type SchemaType = {
  name: string
  'window-state': {
    width: number
    height: number
  }
  editor_data: EditorData
}

export const StoreSchema: JSONSchemaType<SchemaType> = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    'window-state': {
      type: 'object',
      required: ['width', 'height'],
      properties: {
        width: {
          type: 'number'
        },
        height: {
          type: 'number'
        }
      }
    },
    editor_data: {
      type: 'object',
      required: ['hrPath'],
      properties: {
        hrPath: {
          type: 'string'
        }
      }
    }
  },
  required: ['name', 'window-state', 'editor_data']
}

export const STORE_KEYS: { [key: string]: keyof SchemaType } = {
  NAME: 'name',
  WINDOW_STATE: 'window-state',
  EDITOR_DATA: 'editor_data'
}
