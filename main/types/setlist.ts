import { Rig } from './rig'

export type Setlist = {
  author: string
  created_at: number
  id: string
  rig_names: string[]
  rigs: string[]
  version: string
  readonly: boolean
}

export type SetlistWithFullRigs = Setlist & {
  rigs_data?: Rig[]
}
