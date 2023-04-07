import classNames from 'classnames'
import styles from './output-block.module.css'

export default function OutputBlock({
  onClick
}: {
  onClick?: (module: string) => void
}) {
  return (
    <div
      className={classNames(styles.outputBlock, {
        'cursor-pointer': onClick,
        'cursor-default': !onClick
      })}
    >
      <div className="overflow-hidden text-ellipsis px-2 text-center">OUT</div>
    </div>
  )
}
