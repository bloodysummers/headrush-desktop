import classNames from 'classnames'
import styles from './pedal.module.css'

export default function Pedal({
  name,
  color,
  active
}: {
  name: string
  color: string
  active: boolean
}) {
  return (
    <div
      className={classNames(
        styles.pedal,
        styles[`pedal-${color.replace(' ', '')}`]
      )}
    >
      <div className="overflow-hidden text-ellipsis px-2 text-center">
        {name}
      </div>
    </div>
  )
}
