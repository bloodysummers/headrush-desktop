import { Module } from '@/types/rig'
import { ipcRenderer } from 'electron'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import ColorSelector from '../color-selector'
import Select from '../select'
import Toggle from '../toggle'
import ModuleUI from '../chain/modules-block/module'
import { clone } from 'lodash'
import { revertedColors } from '@/tokens/catalogs/colors'
import {
  ModuleConfig,
  ModuleConfigSet,
  RangeConfig,
  SetConfig,
  modulesConfig
} from '@/config/modules'
import models from '@/config/modules/amp/models'
import FaderWrapper from './fader-wrapper'
import ToggleWrapper from './toggle-wrapper'
import SetWrapper from './set-wrapper'

export default function ModuleModal({ module }: { module: Module }) {
  const [editableModule, setEditableModule] = useState<Module>()
  const chain = editableModule?.data?.chain
  const children = editableModule?.data?.children
  const color = children?.Colour.string.replaceAll(' ', '')
  const moduleName = chain?.string
  const moduleNameWithoutNumber = moduleName?.replaceAll(' 2', '')
  const moduleNumber = moduleName?.indexOf(' 2') > -1 ? 2 : 1
  const presetName = children?.PresetName.string

  const filterAmpConfig = (amp: string, moduleNumber: number) => {
    const config = modulesConfig[moduleNameWithoutNumber]
    const model =
      moduleNumber === 1 ? children.Type.string : children.Type2.string

    const modelConfig = models[model]
    const modelFields: ModuleConfig = Object.entries(modelConfig['1']).reduce(
      (newC: ModuleConfig, field) => {
        const [key, label] = field
        const completeConfig = config[key]
        const newConfig = {
          ...completeConfig,
          type: completeConfig.type,
          label
        } as ModuleConfigSet
        newC[key] = newConfig
        return newC
      },
      {}
    )
    return Object.entries(modelFields)
  }

  const getModuleConfig = (module: string) => {
    const conf = modulesConfig[module]
    if (conf) return Object.entries(conf)
    return []
  }

  const moduleConfig =
    moduleNameWithoutNumber === 'Amp'
      ? filterAmpConfig(moduleNameWithoutNumber, moduleNumber)
      : getModuleConfig(moduleNameWithoutNumber)

  const [selectValue, setSelectValue] = useState(presetName)
  useEffect(() => {
    const newModule = clone(module)
    setEditableModule(newModule)
  }, [module])

  useEffect(() => {
    setSelectValue(presetName)
  }, [presetName])

  const { data: blocks } = useQuery(
    'blocksData',
    () =>
      ipcRenderer.invoke('get_blocks', {
        name: moduleNameWithoutNumber
      }),
    {
      enabled: !!moduleNameWithoutNumber
    }
  )
  const { data: block, refetch: getPreset } = useQuery(
    'blockData',
    () =>
      ipcRenderer.invoke('get_block', {
        name: presetName,
        preset: selectValue
      }),
    {
      enabled: false
    }
  )

  const changeColor = (name: string) => {
    const newModule = clone(editableModule)
    newModule.data.children.Colour.string = revertedColors[name]
    setEditableModule(newModule)
  }

  const changeFaderValue = (value: string, name: string) => {
    const newModule = clone(editableModule)
    newModule.data.children[name].value = parseFloat(value)
    setEditableModule(newModule)
  }

  const changeSetFaderValue = (value: string, name: string) => {
    const newModule = clone(editableModule)
    newModule.data.children[name].string = value
    setEditableModule(newModule)
  }

  const changeToggleValue = (value: boolean, name: string) => {
    const newModule = clone(editableModule)
    newModule.data.children[name].state = value
    setEditableModule(newModule)
  }

  return (
    <div>
      <div className="flex p-10">
        <div className="flex">
          <ModuleUI
            name={moduleNameWithoutNumber}
            data={editableModule}
            showImg
          />
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
            {moduleName === 'Hold' && (
              <div className="w-1/2 pr-4">
                <Toggle
                  label="Switch"
                  value={false}
                  options={['Off', 'On']}
                  onClick={value => {
                    console.log({ value })
                  }}
                />
              </div>
            )}

            {moduleConfig?.map(item => {
              const [configName, config] = item
              const type = config.type
              const label = config.label
              const childData = children[configName]
              if (type === 'range')
                return (
                  <FaderWrapper
                    key={configName}
                    config={config}
                    data={childData}
                    onChange={value => changeFaderValue(value, configName)}
                  />
                )
              if (type === 'toggle') {
                return (
                  <ToggleWrapper
                    key={configName}
                    config={config}
                    data={childData}
                    onChange={value => changeToggleValue(value, configName)}
                  />
                )
              }
              if (type === 'set') {
                return (
                  <SetWrapper
                    key={configName}
                    config={config}
                    data={childData}
                    onFaderChange={value =>
                      changeSetFaderValue(value, configName)
                    }
                  />
                )
              }
              if (type === 'range|set') {
                if (childData.type === 0) {
                  const newConfig: RangeConfig = {
                    type: 'range',
                    label,
                    min: config.min,
                    max: config.max,
                    step: config.step,
                    unit: config.unit
                  }
                  return (
                    <FaderWrapper
                      key={configName}
                      config={newConfig}
                      data={childData}
                      onChange={value => changeFaderValue(value, configName)}
                    />
                  )
                } else if (childData.type === 4) {
                  const newConfig: SetConfig = {
                    type: 'set',
                    label,
                    values: config.values
                  }
                  return (
                    <SetWrapper
                      key={configName}
                      config={newConfig}
                      data={childData}
                      onFaderChange={value =>
                        changeSetFaderValue(value, configName)
                      }
                    />
                  )
                }
              }
            })}
          </div>
        </div>
      </div>
      <ColorSelector selected={`preset${color}`} onSelect={changeColor} />
    </div>
  )
}
