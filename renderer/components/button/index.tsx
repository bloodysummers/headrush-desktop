import classNames from 'classnames'
import { MouseEventHandler } from 'react'

type ButtonProps = {
  children: React.ReactNode
  type?: 'submit' | 'reset' | 'button' | undefined
  className?: string | undefined
  onClick?: MouseEventHandler
}

export default function Button({
  children,
  type,
  className,
  onClick
}: ButtonProps) {
  return (
    <button
      type={type}
      className={classNames(
        'bg-neutral-800 border-white border-2 text-white uppercase p-4 hover:bg-neutral-600 transition-all',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
