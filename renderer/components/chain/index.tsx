import { Module, RigSetupWithItems } from '@/types/rig'
import ModulesBlock from './modules-block'
import InputBlock from './input-block'
import OutputBlock from './output-block'
import Cables from './cables'
import spacing from '@/tokens/spacing'

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
    <section
      className="relative"
      style={{ height: `calc(100% - ${spacing.headerHeight}px)` }}
    >
      <Cables />
      <div className="absolute top-12">
        <InputBlock />
      </div>
      <ModulesBlock modules={modules} mix={mix} />
      <div className="absolute bottom-12 right-0">
        <OutputBlock />
      </div>
    </section>
  )
}
