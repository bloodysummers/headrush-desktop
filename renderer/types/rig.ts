export type Rig = {
  author: string
  color: number
  created_at: string
  id: string
  order: number
  prog_num: number
  readonly: boolean
}

export type RigWithContent = Rig & {
  content: RigContent
}

export type RigContent = {
  Footswitch: RigFootswitch
  Pedal1: RigPedal1
  Pedal2: RigPedal2
  RigEncoder: RigEncoder
  data: RigData
  info: RigInfo
}

export type RigFootswitch = {
  data: RigFootswitchData
  info: RigInfo
}

export type RigPedal1 = {
  data: RigPedal1Data
  info: RigInfo
}

export type RigPedal2 = {
  data: RigPedal2Data
  info: RigInfo
}

export type RigEncoder = {
  data: RigEncoderData
  info: RigInfo
}

export type RigData = {
  Patch: RigPatch
}

export type RigFootswitchData = {
  Footswitch: {
    childorder: string[]
    children: RigChildren
  }
}

export type RigChildren = {
  [key: string]: {
    type: number
    value?: number
    string?: string
    state?: string
  }
}

export type RigPedal1Data = {
  Pedal1: {
    childorder: string[]
    children: RigChildren
  }
}

export type RigPedal2Data = {
  Pedal2: {
    childorder: string[]
    children: RigChildren
  }
}

export type RigEncoderData = {
  RigEncoder: {
    childorder: string[]
    children: RigChildren
  }
}

export type RigPatch = {
  childorder: string[]
  children: RigPatchChildren
}

export type RigPatchChildren = {
  [key: string]: {
    childorder: string[]
    children: RigChildren
  }
}

export type RigInfo = {
  version: string
}
