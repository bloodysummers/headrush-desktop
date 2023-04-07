import classNames from 'classnames'
import Led from './led'
import styles from './pedal.module.css'
import Switch from './switch'

export default function Pedal({
  name,
  color,
  active,
  onClick
}: {
  name: string
  color: string
  active: boolean
  onClick?: (module: string) => void
}) {
  const _onClick = () => {
    if (onClick) {
      onClick(name)
    }
  }

  return (
    <div
      className={classNames(styles.pedal, styles[`pedal-${color}`], {
        'cursor-pointer': onClick,
        'cursor-default': !onClick
      })}
      onClick={_onClick}
    >
      <Led active={active} />
      <div className="overflow-hidden text-ellipsis px-2 text-center">
        {name}
      </div>
      <div className="absolute bottom-4 left-0 w-full flex justify-center items-center">
        <Switch />
      </div>
    </div>
  )
}
