import classNames from 'classnames'
import styles from './exp-pedal.module.css'
import Switch from '../pedal/switch'

export default function ExpressionPedal({
  name,
  letter,
  active,
  onClick
}: {
  name: string
  letter?: string
  active: boolean
  onClick?: (module: string) => void
}) {
  const _onClick = () => {
    if (onClick) {
      onClick(name)
    }
  }

  return (
    <div className="w-24 flex justify-center mx-4">
      <div
        className={classNames(styles.pedal, {
          'cursor-pointer': onClick,
          'cursor-default': !onClick
        })}
        onClick={_onClick}
      >
        <div className="text-center">
          <div className="w-6 h-6 text-white bg-neutral-600 rounded-md inline-flex items-center justify-center text-lg mb-2">
            {letter}
          </div>
        </div>
        <div className="overflow-hidden text-ellipsis px-2 text-center">
          {name}
        </div>
        <div className="absolute bottom-4 left-0 w-full flex justify-center items-center">
          <Switch />
        </div>
      </div>
    </div>
  )
}
