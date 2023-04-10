import ListItem from './list-item'
import { Rig } from '@/types/rig'

export default function RigList({
  data,
  onClick
}: {
  data: Rig[]
  onClick?: (item: Rig) => void
}) {
  return (
    <ul className="overflow-y-auto scrollbar-thin h-full scrollbar-track-neutral-600 scrollbar-thumb-presetGreen scrollbar-thumb-rounded-md">
      {data &&
        data.map(item => (
          <ListItem
            key={item.name}
            onClick={() => onClick(item)}
            color={item.color}
          >
            {item.name}
          </ListItem>
        ))}
    </ul>
  )
}
