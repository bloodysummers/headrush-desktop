import { Module } from '@/types/rig'
import ColorSelector from '../color-selector'

export default function ModuleModal({ module }: { module: Module }) {
  const color = module?.data?.children.Colour.string?.replace(' ', '')
  return <ColorSelector selected={color} />
}
