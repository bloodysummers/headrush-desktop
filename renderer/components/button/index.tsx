import classNames from 'classnames'

type ButtonProps = {
  children: React.ReactNode
  type?: 'submit' | 'reset' | 'button' | undefined
  className?: string | undefined
}

export default function Button({ children, type, className }: ButtonProps) {
  return (
    <button
      type={type}
      className={classNames(
        'bg-neutral-800 border-white border-2 text-white uppercase p-4 hover:bg-neutral-600 transition-all',
        className
      )}
    >
      {children}
    </button>
  )
}
