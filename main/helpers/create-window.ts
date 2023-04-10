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
  removeSetlist,
  saveSetlist
} from '../api/setlist'
import { getBlock, getBlocks } from '../api/block'

const createWindow = (
  windowName: string,
  options: BrowserWindowConstructorOptions
): BrowserWindow => {
  const key = 'window-state'
  const name = `window-state-${windowName}`
  const store = new Store({ name })
  const defaultSize = {
    width: options.width,
    height: options.height
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

  ipcMain.handle('get_setlists', (_, data) => {
    return getSetlists(data)
  })

  ipcMain.handle('get_setlist', (_, data) => {
    return getSetlist(data)
  })

  ipcMain.handle('remove_setlist', (_, data) => {
    return removeSetlist(data)
  })

  ipcMain.handle('save_setlist', (_, data) => {
    return saveSetlist(data)
  })

  ipcMain.handle('get_rigs', (_, data) => {
    return getRigs(data)
  })

  ipcMain.handle('get_rig', (_, data) => {
    return getRig(data)
  })

  ipcMain.handle('get_blocks', (_, data) => {
    return getBlocks(data)
  })

  ipcMain.handle('get_block', (_, data) => {
    return getBlock(data)
  })

  ipcMain.handle('refresh', () => {
    win.webContents.reload()
  })

  win.on('close', saveState)

  return win
}

export default createWindow
