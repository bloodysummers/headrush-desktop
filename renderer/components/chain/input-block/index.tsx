import classNames from 'classnames'
import styles from './input-block.module.css'

export default function InputBlock({
  onClick
}: {
  onClick?: (module: string) => void
}) {
  return (
    <div
      className={classNames(styles.inputBlock, {
        'cursor-pointer': onClick,
        'cursor-default': !onClick
      })}
    >
      <div className="overflow-hidden text-ellipsis px-2 text-center">IN</div>
    </div>
  )
}
