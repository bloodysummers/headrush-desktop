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
  if (data.data.chain.string === 'Empty Slot') {
    return <EmptySlot />
  }
  const active = data?.data?.children?.On.state as boolean
  const color = data?.data?.children?.Colour.string
  return <Pedal name={data.data.chain.string} color={color} active={active} />
}
