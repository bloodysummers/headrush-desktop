import fs from 'fs'
import path from 'path'
import { BlockWithContent } from '../../../renderer/types/block'

type RigError = {
  error: string
}
const MISSING_PATH = 'MISSING_PATH'
const UNHANDLED_ERROR = 'UNHANDLED_ERROR'
const BLOCKS_NOT_FOUND = 'BLOCKS_NOT_FOUND'

type GetBlocksData = {
  path: string
  name: string
}

export function getBlocks(data: GetBlocksData): string[] | RigError {
  if (data.path) {
    try {
      return fs
        .readdirSync(path.resolve(data.path, './Blocks', data.name))
        .map(rig => rig.replace('.block', ''))
    } catch (e) {
      return {
        error: BLOCKS_NOT_FOUND
      }
    }
  }
  return {
    error: MISSING_PATH
  }
}
type GetBlockData = {
  path: string
  name: string
  preset: string
}

export function getBlock(data: GetBlockData): BlockWithContent | RigError {
  if (data.path) {
    try {
      const fileFullPath = path.resolve(
        data.path,
        './Blocks',
        data.name,
        `${data.preset}.block`
      )
      const blockData = JSON.parse(fs.readFileSync(fileFullPath, 'utf-8'))
      const blockContent = JSON.parse(blockData.content)
      return {
        ...blockData,
        content: blockContent
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
