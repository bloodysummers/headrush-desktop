import CloseButton from '@/components/close-button'
import classNames from 'classnames'
import { MouseEvent } from 'react'

export default function Modal({
  show,
  onClose,
  children
}: {
  show: boolean
  onClose: () => void
  children: React.ReactNode
}) {
  const ignoreClose = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return (
    <div
      className={classNames(
        'fixed flex items-center justify-center top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50',
        {
          hidden: !show
        }
      )}
      onClick={onClose}
    >
      <div
        className="relative w-10/12 h-5/6 border-2 border-zinc-100 bg-neutral-800 bg-opacity-80 backdrop-blur-md"
        onClick={ignoreClose}
      >
        <div className="absolute -top-4 -right-4">
          <CloseButton onClick={onClose} />
        </div>
        {children}
      </div>
    </div>
  )
}
