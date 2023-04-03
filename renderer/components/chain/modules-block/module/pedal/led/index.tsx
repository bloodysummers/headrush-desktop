import classNames from 'classnames'
import styles from './led.module.css'

export default function Led({ active }: { active: boolean }) {
  return (
    <div className="relative mb-6 bg-gray-50">
      {active && (
        <div
          className={classNames(
            'w-3 h-3 rounded-full absolute left-1/2 -translate-x-1/2 bg-white',
            styles.ledGlow
          )}
        />
      )}
      <div
        className={classNames(
          'w-3 h-3 absolute rounded-full left-1/2 -translate-x-1/2',
          {
            'bg-red-500': active
          },
          {
            'bg-red-900': !active
          },
          styles.led
        )}
      >
        <div
          className="w-1 h-1 bg-white absolute rounded-full"
          style={{ filter: 'blur(1px)', top: 1, right: 1 }}
        />
      </div>
    </div>
  )
}
