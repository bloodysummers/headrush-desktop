import { Module, RigSetupWithItems } from '@/types/rig'
import ModuleUI from './module'

export default function ModulesBlock({
  modules,
  mix,
  showModal
}: {
  modules: Module[]
  mix: RigSetupWithItems
  showModal: (name: string) => void
}) {
  const showModuleModal = (
    module: string,
    type?: 'Amp' | 'Cab' | 'IR' | 'IR (1024)'
  ) => {
    if (!type) showModal(module)
    else showModal(type)
  }

  const firstRow = modules.slice(0, 5)
  const secondRow = modules.slice(5, 11)

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-row justify-center">
        {firstRow.map((module, i) => {
          return (
            <ModuleUI
              key={module.name}
              name={module.name}
              data={module}
              onModuleClick={showModuleModal}
            />
          )
        })}
      </div>
      <div className="flex flex-row">
        {secondRow.map((module, i) => {
          return (
            <ModuleUI
              key={module.name}
              name={module.name}
              data={module}
              onModuleClick={showModuleModal}
            />
          )
        })}
      </div>
    </div>
  )
}
