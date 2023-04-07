import classNames from 'classnames'

type ToggleProps = {
  value: boolean
  label: string
  options: string[]
  onClick: (value: boolean) => void
}

export default function Toggle({
  value,
  label,
  options,
  onClick
}: ToggleProps) {
  const _onClick = (value: boolean) => {
    if (onClick) onClick(value)
  }
  return (
    <div className="mb-4">
      <label className="text-white">{label}</label>
      <div className="flex w-full">
        <button
          className={classNames('flex-1 h-8', {
            'bg-presetGreen text-black': !value,
            'bg-neutral-500 text-white': value
          })}
          onClick={() => _onClick(false)}
        >
          {options[0]}
        </button>
        <button
          className={classNames('flex-1 h-8', {
            'bg-presetGreen text-black': value,
            'bg-neutral-500 text-white': !value
          })}
          onClick={() => _onClick(true)}
        >
          {options[1]}
        </button>
      </div>
    </div>
  )
}
