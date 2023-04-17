import ReactDOM from 'react-dom'
import ModuleModal from '@/components/module-modal'
import ModulesBlock from './modules-block'
import InputBlock from './input-block'
import OutputBlock from './output-block'
import Cables from './cables'
import spacing from '@/tokens/spacing'
import { Module, RigSetupWithItems } from '@/types/rig'
import Modal from '../modal'
import { useState } from 'react'

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
  const [showModal, setShowModal] = useState('')
  return (
    <section
      className="relative"
      style={{ height: `calc(100% - ${spacing.headerHeight}px)` }}
    >
      <Cables />
      <div className="absolute top-12">
        <InputBlock />
      </div>
      <ModulesBlock modules={modules} mix={mix} showModal={setShowModal} />
      <div className="absolute bottom-12 right-0">
        <OutputBlock />
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
    </section>
  )
}
