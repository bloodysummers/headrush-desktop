import fs from 'fs'
import path from 'path'
import { Setlist, SetlistWithFullRigs } from '../../types/setlist'
import { uuid } from 'uuidv4'

type SetlistError = {
  error: string
}
const MISSING_PATH = 'MISSING_PATH'
const UNHANDLED_ERROR = 'UNHANDLED_ERROR'
const SETLISTS_NOT_FOUND = 'SETLISTS_NOT_FOUND'

export function getSetlists(hrPath: string): string[] | SetlistError {
  if (hrPath) {
    try {
      return fs
        .readdirSync(path.resolve(hrPath, './Setlists'))
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
  name: string
}

export function getSetlist(
  data: SetlistData,
  hrPath: string
): SetlistWithFullRigs | SetlistError {
  if (hrPath) {
    try {
      const fileFullPath = path.resolve(
        hrPath,
        './Setlists',
        `${data.name}.setlist`
      )
      const setlistData: SetlistWithFullRigs = JSON.parse(
        fs.readFileSync(fileFullPath, 'utf-8')
      )
      const rigs = setlistData.rig_names.map(rig => {
        const rigName = rig.replaceAll("'", '_')
        if (rigName) {
          const fileFullPath = path.resolve(hrPath, './Rigs', `${rigName}.rig`)
          const rigData = JSON.parse(fs.readFileSync(fileFullPath, 'utf-8'))
          delete rigData.content
          return {
            name: rigName,
            ...rigData
          }
        } else {
          return {}
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

export function removeSetlist(
  data: SetlistData,
  hrPath: string
): boolean | SetlistError {
  if (hrPath) {
    try {
      fs.unlinkSync(path.resolve(hrPath, './Setlists', `${data.name}.setlist`))
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

type NewSetlistData = {
  name: string
  author: string
}

export function newSetlist(
  data: NewSetlistData,
  hrPath: string
): string | SetlistError {
  if (hrPath) {
    try {
      const setlist: Setlist = {
        author: data.author,
        created_at: Date.now(),
        id: uuid(),
        rig_names: [],
        rigs: [],
        version: '',
        readonly: false
      }
      fs.writeFileSync(
        path.resolve(hrPath, './Setlists', `${data.name}.setlist`),
        JSON.stringify(setlist)
      )
      return data.name
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

export function saveSetlist(
  data: SaveSetlistData,
  hrPath: string
): boolean | SetlistError {
  if (hrPath) {
    try {
      delete data.data.setlist.rigs_data
      fs.writeFileSync(
        path.resolve(hrPath, './Setlists', `${data.data.name}.setlist`),
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
