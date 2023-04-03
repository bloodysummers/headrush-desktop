import fs from 'fs'
import path from 'path'
import { RigWithContent } from '../../../renderer/types/rig'

type RigError = {
  error: string
}
const MISSING_PATH = 'MISSING_PATH'
const UNHANDLED_ERROR = 'UNHANDLED_ERROR'
const RIGS_NOT_FOUND = 'RIGS_NOT_FOUND'

type GetRigsData = {
  path: string
}

export function getRigs(data: GetRigsData): string[] | RigError {
  if (data.path) {
    try {
      return fs.readdirSync(path.resolve(data.path, './Rigs'))
    } catch (e) {
      return {
        error: RIGS_NOT_FOUND
      }
    }
  }
  return {
    error: MISSING_PATH
  }
}
type GetRigData = {
  path: string
  name: string
}

export function getRig(data: GetRigData): RigWithContent | RigError {
  if (data.path) {
    try {
      const fileFullPath = path.resolve(data.path, './Rigs', data.name)
      const rigData = JSON.parse(fs.readFileSync(fileFullPath, 'utf-8'))
      const rigContent = JSON.parse(rigData.content)
      return {
        ...rigData,
        content: rigContent
      }
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
