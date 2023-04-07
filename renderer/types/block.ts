export type Block = {
  content: BlockContent
  id: string
  readonly: boolean
  type: string
}

export type BlockWithContent = Block & {
  content: BlockContent
}

export type BlockContent = {
  data: BlockData
  into: BlockInfo
}

export type BlockData = {
  [key: string]: BlockSetup
}

export type BlockSetup = {
  childorder: string[]
  children: BlockChildren
}

export type BlockChildren = {
  [key: string]: BlockItemdata
}

export type BlockItemdata = {
  type: number
  value?: number
  string?: string
  state?: string | boolean
}

export type BlockInfo = {
  version: string
}
