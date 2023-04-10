import { Module } from '@/types/rig'
import EmptySlot from './empty-slot'
import Pedal from './pedal'
import Amp from './amp'
import Cab from './cab'
import ImpulseResponse from './ir'
import { expressionEffects } from './exp-pedal/helper'
import ExpressionPedal from './exp-pedal'

export default function ModuleUI({
  name,
  data,
  onModuleClick
}: {
  name: string
  data: Module
  onModuleClick?: (
    module: string,
    type?: 'Amp' | 'Cab' | 'IR' | 'IR (1024)'
  ) => void
}) {
  const chain = data?.data?.chain
  const children = data?.data?.children
  if (chain?.string === 'Empty Slot') {
    return <EmptySlot />
  }
  if (chain?.string === 'Amp') {
    const ampName = children.Type.string.toUpperCase().replaceAll(' ', '-')
    const amp2Name = children.Type2.string.toUpperCase().replaceAll(' ', '-')
    const isDouble = children.Doubling?.state
    return (
      <Amp
        amp1={ampName}
        amp2={isDouble ? amp2Name : null}
        onClick={onModuleClick}
      />
    )
  }
  if (chain?.string === 'Cab') {
    const cabName = children.CabType.string.toUpperCase().replaceAll(' ', '-')
    const cab2Name = children.CabType2.string.toUpperCase().replaceAll(' ', '-')
    const isDouble = children.Doubling?.state
    return (
      <Cab
        cab1={cabName}
        cab2={isDouble ? cab2Name : null}
        onClick={onModuleClick}
      />
    )
  }
  if (chain?.string === 'IR' || chain?.string === 'IR (1024)') {
    debugger
    const irName = children.IR?.string
    const ir2Name = children.IR2?.string
    const isDouble = children.Doubling?.state as boolean
    return (
      <ImpulseResponse
        ir1={irName}
        ir2={ir2Name}
        irType={chain?.string}
        double={isDouble}
        onClick={onModuleClick}
      />
    )
  }
  if (expressionEffects.includes(chain?.string)) {
    return (
      <ExpressionPedal name={chain?.string} onClick={onModuleClick} active />
    )
  }
  const active = children?.On.state as boolean
  const color = children?.Colour.string.replaceAll(' ', '')
  return (
    <Pedal
      name={chain?.string}
      color={color}
      active={active}
      onClick={onModuleClick}
    />
  )
}
