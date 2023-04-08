import fs from 'fs'
import path from 'path'
import { Setlist, SetlistWithFullRigs } from '../../../renderer/types/setlist'

type SetlistError = {
  error: string
}
const MISSING_PATH = 'MISSING_PATH'
const UNHANDLED_ERROR = 'UNHANDLED_ERROR'
const SETLISTS_NOT_FOUND = 'SETLISTS_NOT_FOUND'

type SetlistData = {
  path: string
}

export function getSetlists(data: SetlistData): string[] | SetlistError {
  if (data.path) {
    try {
      return fs
        .readdirSync(path.resolve(data.path, './Setlists'))
        .map(setlist => setlist.replace('.setlist', ''))
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

type SetlistsData = {
  path: string
  name: string
}

export function getSetlist(
  data: SetlistsData
): SetlistWithFullRigs | SetlistError {
  if (data.path) {
    try {
      const fileFullPath = path.resolve(
        data.path,
        './Setlists',
        `${data.name}.setlist`
      )
      const setlistData: SetlistWithFullRigs = JSON.parse(
        fs.readFileSync(fileFullPath, 'utf-8')
      )
      const rigs = setlistData.rig_names.map(rig => {
        const fileFullPath = path.resolve(data.path, './Rigs', `${rig}.rig`)
        const rigData = JSON.parse(fs.readFileSync(fileFullPath, 'utf-8'))
        delete rigData.content
        return {
          name: rig,
          ...rigData
        }
      })
      setlistData.rigs_data = rigs
      return setlistData
    } catch (e) {
      return {
        error: UNHANDLED_ERROR
      }
    }
  }
  return {
    error: MISSING_PATH
  }
}
