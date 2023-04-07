type SelectProps = {
  label?: string
  options?: SelectOption[]
}

type SelectOption = {
  value: string
  label: string
}

export default function Select({ label, options }: SelectProps) {
  return (
    <div className="mb-4">
      <label className="text-white">{label}</label>
      <select className="block w-full bg-neutral-500 text-white uppercase px-4 py-2 pr-8 focus:outline-none focus:shadow-outline">
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
