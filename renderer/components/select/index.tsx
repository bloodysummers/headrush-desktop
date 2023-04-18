import { ChangeEvent } from 'react'

type SelectProps = {
  label?: string
  options?: SelectOption[]
  onChange?: (value: string) => void
  value?: string
}

type SelectOption = {
  value: string
  label: string
}

export default function Select({
  label,
  options,
  onChange,
  value
}: SelectProps) {
  const _onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) onChange(e.target.value)
  }
  return (
    <div className="mb-4">
      <label className="text-white">{label}</label>
      <select
        className="block w-full cursor-pointer bg-neutral-700 text-white uppercase px-4 py-1 pr-8 focus:outline-none focus:shadow-outline"
        onChange={_onChange}
        value={value}
      >
        {options?.map(option => (
          <option
            key={option.value}
            value={option.value}
            className="text-white bg-neutral-600 hover:shadow-neutral-600"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
