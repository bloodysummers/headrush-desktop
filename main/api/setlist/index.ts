import fs from 'fs'
import path from 'path'

type SetlistError = {
  error: string
}
const SETLISTS_NOT_FOUND = 'SETLISTS_NOT_FOUND'
const MISSING_PATH = 'MISSING_PATH'

type SetlistsData = {
  path: string
}

export function getSetlists(data: SetlistsData): string[] | SetlistError {
  if (data.path) {
    try {
      return fs.readdirSync(path.resolve(data.path, './Setlists'))
    } catch (e) {
      return {
        error: SETLISTS_NOT_FOUND
      }
    }
  }
  return {
    error: MISSING_PATH
  }
}
