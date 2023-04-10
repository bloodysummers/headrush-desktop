import ColorSelector from '@/components/color-selector'
import ModuleModal from '@/components/module-modal'
import { Module, RigSetupWithItems } from '@/types/rig'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import Modal from '../../modal'
import ModuleUI from './module'

export default function ModulesBlock({
  modules,
  mix
}: {
  modules: Module[]
  mix: RigSetupWithItems
}) {
  const [showModal, setShowModal] = useState('')
  const showModuleModal = (module: string) => {
    setShowModal(module)
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
      {typeof window !== 'undefined' &&
        ReactDOM.createPortal(
          <Modal show={!!showModal} onClose={() => setShowModal('')}>
            <ModuleModal
              module={modules.find(
                module => module.data.chain?.string === showModal
              )}
            />
          </Modal>,
          document.body
        )}
    </div>
  )
}
