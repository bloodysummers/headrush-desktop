import { ChangeEvent, HTMLInputTypeAttribute } from 'react'
import classNames from 'classnames'

type InputProps = {
  type?: HTMLInputTypeAttribute | undefined
  value?: string | ReadonlyArray<string> | number | undefined
  name?: string | undefined
  onChange?: (value: string) => void
  autoFocus?: boolean | undefined
}

export default function Input({
  type,
  name,
  onChange,
  value,
  autoFocus
}: InputProps) {
  const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.currentTarget.value)
    }
  }
  return (
    <input
      className="p-4 bg-white border-2 border-white"
      type={type}
      name={name}
      onChange={_onChange}
      value={value}
      autoFocus
    />
  )
}
