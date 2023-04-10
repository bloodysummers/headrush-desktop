import { useRouter } from 'next/router'
import ListItem from './list-item'
import { Rig } from '@/types/rig'

export default function RigList({
  data,
  onClick
}: {
  data: Rig[]
  onClick?: (item: string) => void
}) {
  const router = useRouter()

  return (
    <ul className="overflow-y-auto scrollbar-thin h-full scrollbar-track-neutral-600 scrollbar-thumb-presetGreen scrollbar-thumb-rounded-md">
      {data &&
        data.map(item => (
          <ListItem
            key={item.name}
            onClick={() => onClick(item.name)}
            color={item.color}
          >
            {item.name}
          </ListItem>
        ))}
    </ul>
  )
}
