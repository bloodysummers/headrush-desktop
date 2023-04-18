import classNames from 'classnames'
import Led from './led'
import styles from './pedal.module.css'
import Switch from './switch'
import Image from 'next/image'

export default function Pedal({
  name,
  color,
  active,
  showImg,
  onClick
}: {
  name: string
  color: string
  active: boolean
  showImg: boolean
  onClick?: (module: string) => void
}) {
  const _onClick = () => {
    if (onClick) {
      onClick(name)
    }
  }
  const nameWithoutNumber = name?.replace(' 2', '')
  const nameWithDashes = nameWithoutNumber?.replace(' ', '-').toUpperCase()

  if (showImg)
    return (
      <div
        className="w-32 relative flex items-center justify-center hover:brightness-125 transition-all cursor-pointer"
        onClick={_onClick}
      >
        <Image
          src={`/img/pedals/${nameWithDashes}.png`}
          alt={name}
          width={200}
          height={200}
        />
      </div>
    )
  return (
    <div className="w-32">
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
    </div>
  )
}
