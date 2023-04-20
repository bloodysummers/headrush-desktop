import {
  screen,
  BrowserWindow,
  BrowserWindowConstructorOptions,
  ipcMain
} from 'electron'
import Store from 'electron-store'
import fs from 'fs'
import path from 'path'
import { getRig, getRigs } from '../api/rig'
import {
  getSetlist,
  getSetlists,
  newSetlist,
  removeSetlist,
  saveSetlist
} from '../api/setlist'
import { getBlock, getBlocks } from '../api/block'
import { EditorData, SchemaType, defaultConfig } from '../types/editor'

const createWindow = (
  windowName: string,
  options: BrowserWindowConstructorOptions
): BrowserWindow => {
  const key = 'window-state'
  const name = `window-state-${windowName}`
  const store = new Store<SchemaType>({ name })
  const defaultSize = {
    width: 1000,
    height: 600
  }

  const restore = () => store.get(key, defaultSize)

  const getCurrentPosition = () => {
    const position = win.getPosition()
    const size = win.getSize()
    return {
      x: position[0],
      y: position[1],
      width: size[0],
      height: size[1]
    }
  }

  const windowWithinBounds = (windowState, bounds) => {
    return (
      windowState.x >= bounds.x &&
      windowState.y >= bounds.y &&
      windowState.x + windowState.width <= bounds.x + bounds.width &&
      windowState.y + windowState.height <= bounds.y + bounds.height
    )
  }

  const resetToDefaults = () => {
    const bounds = screen.getPrimaryDisplay().bounds
    return Object.assign({}, defaultSize, {
      x: (bounds.width - defaultSize.width) / 2,
      y: (bounds.height - defaultSize.height) / 2
    })
  }

  const ensureVisibleOnSomeDisplay = windowState => {
    const visible = screen.getAllDisplays().some(display => {
      return windowWithinBounds(windowState, display.bounds)
    })
    if (!visible) {
      // Window is partially or fully not visible now.
      // Reset it to safe defaults.
      return resetToDefaults()
    }
    return windowState
  }

  const saveState = () => {
    if (!win.isMinimized() && !win.isMaximized()) {
      Object.assign(state, getCurrentPosition())
    }
    store.set(key, state)
  }

  const state = ensureVisibleOnSomeDisplay(restore())

  const browserOptions: BrowserWindowConstructorOptions = {
    ...state,
    ...options,
    ...defaultSize,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      ...options.webPreferences
    }
  }
  const win = new BrowserWindow(browserOptions)

  ipcMain.on('save_editor_data', (_, data) => {
    fs.writeFileSync(
      path.join(__dirname, `../renderer/data/editor_data.json`),
      JSON.stringify(data)
    )
  })

  ipcMain.on('goto_home', () => {
    win.webContents.goToIndex(0)
  })

  ipcMain.on('go_back', () => {
    win.webContents.goBack()
  })

  ipcMain.handle('set_config', (_, data: EditorData) => {
    store.set('editor_data', data)
    return data
  })

  ipcMain.handle('get_config', () => {
    return store.get('editor_data') || defaultConfig
  })

  ipcMain.handle('get_setlists', () => {
    const { hrPath } = store.get('editor_data')
    return getSetlists(hrPath)
  })

  ipcMain.handle('get_setlist', (_, data) => {
    const { hrPath } = store.get('editor_data')
    return getSetlist(data, hrPath)
  })

  ipcMain.handle('remove_setlist', (_, data) => {
    const { hrPath } = store.get('editor_data')
    return removeSetlist(data, hrPath)
  })

  ipcMain.handle('new_setlist', (_, data) => {
    const { hrPath } = store.get('editor_data')
    return newSetlist(data, hrPath)
  })

  ipcMain.handle('save_setlist', (_, data) => {
    const { hrPath } = store.get('editor_data')
    return saveSetlist(data, hrPath)
  })

  ipcMain.handle('get_rigs', (_, data) => {
    const { hrPath } = store.get('editor_data')
    return getRigs(hrPath)
  })

  ipcMain.handle('get_rig', (_, data) => {
    const { hrPath } = store.get('editor_data')
    return getRig(data, hrPath)
  })

  ipcMain.handle('get_blocks', (_, data) => {
    const { hrPath } = store.get('editor_data')
    return getBlocks(data, hrPath)
  })

  ipcMain.handle('get_block', (_, data) => {
    const { hrPath } = store.get('editor_data')
    return getBlock(data, hrPath)
  })

  ipcMain.handle('refresh', () => {
    win.webContents.reload()
  })

  win.on('close', saveState)

  return win
}

export default createWindow
