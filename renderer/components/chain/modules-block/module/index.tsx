import { Module } from '@/types/rig'
import EmptySlot from './empty-slot'
import Pedal from './pedal'

export default function ModuleUI({
  name,
  data
}: {
  name: string
  data: Module
}) {
  const chain = data?.data?.chain
  const children = data?.data?.children
  if (chain?.string === 'Empty Slot') {
    return <EmptySlot />
  }
  const active = children?.On.state as boolean
  const color = children?.Colour.string
  return <Pedal name={chain?.string} color={color} active={active} />
}
