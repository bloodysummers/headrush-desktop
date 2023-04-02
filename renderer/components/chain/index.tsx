import { Module, RigSetupWithItems } from '@/types/rig'
import ModulesBlock from '../modules-block'
import InputBlock from './inputBlock'
import OutputBlock from './outputBlock'

export default function Chain({
  modules,
  input,
  output,
  mix
}: {
  modules: Module[]
  input: RigSetupWithItems
  output: RigSetupWithItems
  mix: RigSetupWithItems
}) {
  return (
    <section className="relative" style={{ height: 'calc(100% - 64px)' }}>
      <InputBlock />
      <ModulesBlock modules={modules} mix={mix} />
      <OutputBlock />
    </section>
  )
}
