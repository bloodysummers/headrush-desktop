import { Module } from '@/types/rig'
import { ipcRenderer } from 'electron'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import ColorSelector from '../color-selector'
import Fader from '../fader'
import Select from '../select'
import Toggle from '../toggle'
import ModuleUI from '../chain/modules-block/module'
import { clone } from 'lodash'
import { revertedColors } from '@/tokens/catalogs/colors'
import { ModuleConfig, ModuleConfigSet, modulesConfig } from '@/config/modules'
import classNames from 'classnames'
import models, { AmpModel } from '@/config/modules/amp/models'

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

  const handleFloating = (value: number, step: number) => {
    if (step === 0.1) return value.toFixed(1)
    if (step === 0.01) return value.toFixed(2)
    if (step === 0.001) return value.toFixed(3)
    return String(value)
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
                  <div key={configName} className="w-1/2 pr-4">
                    <Fader
                      min={config.min}
                      max={config.max}
                      step={config.step}
                      label={`${label.toLocaleUpperCase()}: ${handleFloating(
                        childData.value,
                        config.step
                      )}${config.unit}`}
                      value={childData.value.toString()}
                      onChange={value => {
                        changeFaderValue(value, configName)
                      }}
                    />
                  </div>
                )
              if (type === 'toggle') {
                if (config.style === 'dropdown') {
                  const options = [
                    {
                      label: config.off,
                      value: 'false'
                    },
                    {
                      label: config.on,
                      value: 'true'
                    }
                  ]
                  return (
                    <div
                      key={configName}
                      className={classNames('pr-4', {
                        'w-full': config.w === 8,
                        'w-3/4': config.w === 6,
                        'w-1/2': config.w === 4 || !config.w,
                        'w-1/4': config.w === 2,
                        'w-1/8': config.w === 1
                      })}
                    >
                      <Select
                        label={config.label}
                        options={options}
                        value={String(childData.state)}
                      />
                    </div>
                  )
                }
                return (
                  <div
                    key={configName}
                    className={classNames('pr-4', {
                      'w-full': config.w === 8,
                      'w-3/4': config.w === 6,
                      'w-1/2': config.w === 4 || !config.w,
                      'w-1/4': config.w === 2,
                      'w-1/8': config.w === 1
                    })}
                  >
                    <Toggle
                      label={label}
                      value={childData.state as boolean}
                      options={[config.off, config.on]}
                      onClick={value => {
                        changeToggleValue(value, configName)
                      }}
                    />
                  </div>
                )
              }
              if (type === 'set') {
                if (config.style === 'dropdown') {
                  const options = config.values.map(value => ({
                    label: value,
                    value
                  }))
                  const value = childData.string
                  return (
                    <div
                      key={configName}
                      className={classNames('pr-4', {
                        'w-full': config.w === 8,
                        'w-3/4': config.w === 6,
                        'w-1/2': config.w === 4 || !config.w,
                        'w-1/4': config.w === 2,
                        'w-1/8': config.w === 1
                      })}
                    >
                      <Select
                        options={options}
                        value={value}
                        label={config.label}
                      />
                    </div>
                  )
                }
                const total = config.values.length
                const text = childData.string
                const labelText = `${label}: ${text}`
                const index = String(config.values.indexOf(text))
                return (
                  <div key={configName} className="w-1/2 pr-4">
                    <Fader
                      min={0}
                      max={total - 1}
                      step={1}
                      label={labelText.toLocaleUpperCase()}
                      value={index}
                      onChange={index => {
                        const newValue = config.values[index]
                        if (newValue) changeSetFaderValue(newValue, configName)
                      }}
                    />
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>
      <ColorSelector selected={`preset${color}`} onSelect={changeColor} />
    </div>
  )
}
