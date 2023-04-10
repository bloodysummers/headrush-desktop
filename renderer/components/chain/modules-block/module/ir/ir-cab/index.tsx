import classNames from 'classnames'
import styles from './ir-cab.module.css'

export default function ImpulseResponseCab({
  mini,
  onClick
}: {
  mini: boolean
  onClick: () => void
}) {
  return (
    <div
      className={classNames(
        'hover:brightness-125 cursor-pointer transition-all',
        { 'scale-75': mini }
      )}
      onClick={onClick}
    >
      <div
        className={classNames(
          'w-24 h-24 bg-gradient-to-b from-neutral-500 to-neutral-700 rounded-md p-1',
          styles.ir
        )}
      >
        <div className="w-full h-full bg-gradient-to-b from-neutral-500 to-neutral-800 shadow-black shadow-inner p-2 rounded-md">
          <div className="w-full h-full bg-gradient-radial from-neutral-600 to-neutral-900 rounded-full p-7 relative">
            <div className="absolute w-12 h-8 bg-gradient-radial from-neutral-200 to-neutral-800 blur-sm bottom-2 left-3 rounded-full" />
            <div className="relative w-full h-full bg-gradient-radial from-neutral-500 to-neutral-800 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
