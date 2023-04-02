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
  data: {
    Footswitch: RigSetupWithItems
  }
  info: RigInfo
}

export type RigPedal1 = {
  data: {
    Pedal1: RigSetupWithItems
  }
  info: RigInfo
}

export type RigPedal2 = {
  data: {
    Pedal1: RigSetupWithItems
  }
  info: RigInfo
}

export type RigEncoder = {
  data: {
    RigEncoder: RigSetupWithItems
  }
  info: RigInfo
}

export type RigData = {
  Patch: RigSetup
}
export type RigSetup = {
  childorder: string[]
  children: RigChildren
}
export type RigChildren = {
  [key: string]: RigSetupWithItems
}

export type RigSetupWithItems = {
  childorder: string[]
  children: RigItem
}

export type RigItem = {
  [key: string]: RigItemData
}

export type RigItemData = {
  type: number
  value?: number
  string?: string
  state?: string | boolean
}

export type RigInfo = {
  version: string
}

export type Module = {
  order: number
  name: string
  data: {
    chain: RigItemData
  } & RigSetupWithItems
}
