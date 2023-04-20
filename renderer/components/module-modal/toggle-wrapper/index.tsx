import Select from '@/components/select'
import Toggle from '@/components/toggle'
import { ToggleConfig } from '@/config/modules'
import { RigItemData } from '@/types/rig'
import classNames from 'classnames'

export default function ToggleWrapper({
  config,
  data,
  onChange
}: {
  config: ToggleConfig
  data: RigItemData
  onChange: (value: boolean) => void
}) {
  const widthClasses = {
    'w-full': config.w === 8,
    'w-3/4': config.w === 6,
    'w-1/2': config.w === 4 || !config.w,
    'w-1/4': config.w === 2,
    'w-1/8': config.w === 1
  }

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
      <div className={classNames('pr-4', widthClasses)}>
        <Select
          label={config.label}
          options={options}
          value={String(data.state)}
        />
      </div>
    )
  }
  return (
    <div className={classNames('pr-4', widthClasses)}>
      <Toggle
        label={config.label}
        value={data.state as boolean}
        options={[config.off, config.on]}
        onClick={onChange}
      />
    </div>
  )
}
