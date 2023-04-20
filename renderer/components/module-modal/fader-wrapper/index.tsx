import Fader from '@/components/fader'
import { RangeConfig } from '@/config/modules'
import { RigItemData } from '@/types/rig'

export default function FaderWrapper({
  config,
  data,
  onChange
}: {
  config: RangeConfig
  data: RigItemData
  onChange: (value: string) => void
}) {
  const handleFloating = (value: number, step: number) => {
    if (step === 0.1) return value.toFixed(1)
    if (step === 0.01) return value.toFixed(2)
    if (step === 0.001) return value.toFixed(3)
    return String(value)
  }

  return (
    <div className="w-1/2 pr-4">
      <Fader
        min={config.min}
        max={config.max}
        step={config.step}
        label={`${config.label.toLocaleUpperCase()}: ${handleFloating(
          data.value,
          config.step
        )}${config.unit}`}
        value={data.value.toString()}
        onChange={onChange}
      />
    </div>
  )
}
