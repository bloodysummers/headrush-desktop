import Fader from '@/components/fader'
import Select from '@/components/select'
import { SetConfig } from '@/config/modules'
import { RigItemData } from '@/types/rig'
import classNames from 'classnames'

export default function SetWrapper({
  config,
  data,
  onFaderChange
}: {
  config: SetConfig
  data: RigItemData
  onFaderChange: (value: string) => void
}) {
  if (config.style === 'dropdown') {
    const options = config.values.map(value => ({
      label: value,
      value
    }))
    const value = data.string
    return (
      <div
        className={classNames('pr-4', {
          'w-full': config.w === 8,
          'w-3/4': config.w === 6,
          'w-1/2': config.w === 4 || !config.w,
          'w-1/4': config.w === 2,
          'w-1/8': config.w === 1
        })}
      >
        <Select options={options} value={value} label={config.label} />
      </div>
    )
  }
  const total = config.values.length
  const text = data.string
  const labelText = `${config.label}: ${text}`
  const index = String(config.values.indexOf(text))
  return (
    <div className="w-1/2 pr-4">
      <Fader
        min={0}
        max={total - 1}
        step={1}
        label={labelText.toLocaleUpperCase()}
        value={index}
        onChange={index => {
          const newValue = config.values[index]
          if (newValue) onFaderChange(newValue)
        }}
      />
    </div>
  )
}
