import classNames from 'classnames'
import styles from './switch.module.css'

export default function Switch() {
  return (
    <div className="relative">
      <div className="w-6 h-6 bg-gradient-to-b from-neutral-50 to-neutral-400 rounded-full shadow-black shadow-sm flex justify-center items-center">
        <div className={classNames('relative w-3 h-3', styles.toggle)} />
      </div>
    </div>
  )
}
