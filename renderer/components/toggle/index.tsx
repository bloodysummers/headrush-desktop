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
    <div className="mb-4 h-8 bg-neutral-700 flex">
      <div className="flex-1">
        <label className="text-white leading-7 uppercase block pl-3">
          {label}
        </label>
      </div>
      <div className="flex w-full flex-1 pt-1">
        <button
          className={classNames(
            'flex-1 h-6 rounded-md mx-1 uppercase text-sm',
            {
              'bg-presetGreen text-black': !value,
              'bg-neutral-600 text-white': value
            }
          )}
          onClick={() => _onClick(false)}
        >
          {options[0]}
        </button>
        <button
          className={classNames(
            'flex-1 h-6 rounded-md mx-1 uppercase text-sm',
            {
              'bg-presetGreen text-black': value,
              'bg-neutral-600 text-white': !value
            }
          )}
          onClick={() => _onClick(true)}
        >
          {options[1]}
        </button>
      </div>
    </div>
  )
}
