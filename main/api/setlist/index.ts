import fs from 'fs'
import path from 'path'
import { Setlist, SetlistWithFullRigs } from '../../../renderer/types/setlist'

type SetlistError = {
  error: string
}
const MISSING_PATH = 'MISSING_PATH'
const UNHANDLED_ERROR = 'UNHANDLED_ERROR'
const SETLISTS_NOT_FOUND = 'SETLISTS_NOT_FOUND'

type SetlistsData = {
  path: string
}

export function getSetlists(data: SetlistsData): string[] | SetlistError {
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

type SetlistData = {
  path: string
  name: string
}

export function getSetlist(
  data: SetlistData
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
        const rigName = rig.replaceAll("'", '_')
        const fileFullPath = path.resolve(data.path, './Rigs', `${rigName}.rig`)
        const rigData = JSON.parse(fs.readFileSync(fileFullPath, 'utf-8'))
        delete rigData.content
        return {
          name: rigName,
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

export function removeSetlist(data: SetlistData): boolean | SetlistError {
  if (data.path) {
    try {
      fs.unlinkSync(
        path.resolve(data.path, './Setlists', `${data.name}.setlist`)
      )
      return true
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

type SaveSetlistData = {
  path: string
  data: {
    name: string
    setlist: SetlistWithFullRigs
  }
}

export function saveSetlist(data: SaveSetlistData): boolean | SetlistError {
  if (data.path) {
    try {
      delete data.data.setlist.rigs_data
      fs.writeFileSync(
        path.resolve(data.path, './Setlists', `${data.data.name}.setlist`),
        JSON.stringify(data.data.setlist)
      )
      return true
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
