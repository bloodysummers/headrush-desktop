import colors from '@/tokens/colors'
import classNames from 'classnames'

export default function ColorSelector({
  selected,
  onSelect
}: {
  selected: string
  onSelect: (name: string) => void
}) {
  return (
    <div>
      {Object.keys(colors).map(name => (
        <div
          key={name}
          className={classNames(
            'inline-block w-6 h-6 border-black border-2 m-1 cursor-pointer',
            {
              'border-white': name === selected
            }
          )}
          style={{ background: colors[name] }}
          onClick={() => onSelect(name)}
        />
      ))}
    </div>
  )
}
