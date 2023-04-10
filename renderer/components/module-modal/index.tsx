import { editorState } from '@/state/editor'
import { Module } from '@/types/rig'
import { ipcRenderer } from 'electron'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'
import Pedal from '../chain/modules-block/module/pedal'
import ColorSelector from '../color-selector'
import Fader from '../fader'
import Select from '../select'
import Toggle from '../toggle'
import ModuleUI from '../chain/modules-block/module'

export default function ModuleModal({ module }: { module: Module }) {
  const editorData = useRecoilValue(editorState)
  const chain = module?.data?.chain
  const childorder = module?.data?.childorder
  const children = module?.data?.children
  const active = children?.On.state as boolean
  const color = children?.Colour.string.replaceAll(' ', '')
  const moduleName = chain?.string
  const presetName = children?.PresetName.string
  const [selectValue, setSelectValue] = useState(presetName)
  useEffect(() => {
    setSelectValue(presetName)
  }, [presetName])
  const { data: blocks } = useQuery(
    'blocksData',
    () =>
      ipcRenderer.invoke('get_blocks', {
        path: editorData.path,
        name: moduleName
      }),
    {
      enabled: !!moduleName
    }
  )
  const { data: block, refetch: getPreset } = useQuery(
    'blockData',
    () =>
      ipcRenderer.invoke('get_block', {
        path: editorData.path,
        name: presetName,
        preset: selectValue
      }),
    {
      enabled: false
    }
  )

  const filteredOrder = childorder?.filter(
    (child: string) =>
      child !== 'On' && child !== 'Colour' && child !== 'PresetName'
  )

  return (
    <div>
      <div className="flex p-10">
        <div>
          <ModuleUI name={moduleName} data={module} />
        </div>
        <div className="flex-1 ml-4 h-72 overflow-y-auto scrollbar-thin scrollbar-track-neutral-600 scrollbar-thumb-presetGreen scrollbar-thumb-rounded-md">
          <div className="pr-4">
            {blocks && (
              <Select
                label="Preset"
                options={blocks.map(block => ({
                  label: block,
                  value: block
                }))}
                onChange={setSelectValue}
                value={selectValue}
              />
            )}
          </div>
          <div className="flex flex-wrap">
            {filteredOrder?.map((child: string, index: number) => {
              const childData = children[child]
              if (childData.type === 0)
                return (
                  <div key={child} className="w-1/2 pr-4">
                    <Fader
                      min={1}
                      max={100}
                      step={1}
                      label={`${child}: ${childData.value}`}
                      value={childData.value.toString()}
                      onChange={value => {
                        console.log({ value })
                      }}
                    />
                  </div>
                )
              if (childData.type === 1)
                return (
                  <div key={child} className="w-1/2 pr-4">
                    <Toggle
                      label={child}
                      value={childData.state as boolean}
                      options={['Off', 'On']}
                      onClick={value => {
                        console.log({ value })
                      }}
                    />
                  </div>
                )
            })}
          </div>
        </div>
      </div>
      <ColorSelector selected={`preset${color}`} />
    </div>
  )
}
