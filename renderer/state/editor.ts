import { atom, AtomEffect } from 'recoil'

export type EditorData = {
  path: string
}

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue))
    })
  }

export const editorState = atom<EditorData>({
  key: 'editorState',
  default: {
    path: ''
  },
  ...(typeof window !== 'undefined'
    ? {
        effects: [localStorageEffect('editor_data')]
      }
    : null)
})
