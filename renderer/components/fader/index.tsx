import { ChangeEvent } from 'react'

export default function Fader({
  onChange,
  min,
  max,
  step,
  value,
  label
}: {
  onChange: (value: string) => void
  min: number
  max: number
  step: number
  value: string
  label: string
}) {
  const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.currentTarget.value)
    }
  }
  return (
    <div className="mb-2 relative">
      <input
        type="range"
        className="overflow-hidden appearance-none bg-neutral-900 h-8 w-full border-neutral-600 border-2 cursor-pointer relative z-10 mix-blend-normal"
        min={min}
        max={max}
        step={step}
        onChange={_onChange}
        value={value}
      />
      <label className="text-neutral-300 uppercase text-ellipsis overflow-hidden whitespace-nowrap pointer-events-none block absolute leading-7 pl-3 z-20 top-0 mix-blend-difference">
        {label}
      </label>
    </div>
  )
}
