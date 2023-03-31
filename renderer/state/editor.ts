import { ipcRenderer } from 'electron'
import { atom } from 'recoil'
import editorData from '../data/editor_data.json'

const defaultConfig = {
  path: ''
}

export type EditorData = {
  path: string
}

const dataToJsonEffect = (key: string) => {
  return ({ setSelf, onSet }) => {
    const value = require(`../data/${key}.json`)
    if (value !== null) {
      setSelf(value)
    }
    onSet((value, _, isReset) => {
      isReset
        ? ipcRenderer.send('save_editor_data', defaultConfig)
        : ipcRenderer.send('save_editor_data', value)
    })
  }
}

export const editorState = atom<EditorData>({
  key: 'editorState',
  default: editorData,
  effects: [dataToJsonEffect('editor_data')]
})
