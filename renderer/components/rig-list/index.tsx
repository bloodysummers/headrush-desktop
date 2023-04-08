import { useRouter } from 'next/router'
import ListItem from './list-item'
import { Rig } from '@/types/rig'

export default function RigList({
  data,
  href
}: {
  data: Rig[]
  href?: string
}) {
  const router = useRouter()

  const goto = (item: string) => {
    if (href) router.push(`${href}${item}`)
  }

  return (
    <ul
      className="overflow-y-auto scrollbar-thin scrollbar-track-neutral-600 scrollbar-thumb-presetGreen scrollbar-thumb-rounded-md"
      style={{ height: 'calc(100% - 112px)' }}
    >
      {data &&
        data.map(item => (
          <ListItem
            key={item.name}
            onClick={() => goto(item.name)}
            color={item.color}
          >
            {item.name}
          </ListItem>
        ))}
    </ul>
  )
}
