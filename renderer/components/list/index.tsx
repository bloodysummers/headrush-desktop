import { useRouter } from 'next/router'
import ListItem from './list-item'

export default function List({
  data,
  href,
  ext
}: {
  data: string[]
  href: string
  ext: string
}) {
  const router = useRouter()

  const goto = (item: string) => {
    router.push(`${href}${item}${ext}`)
  }

  return (
    <ul
      className="overflow-y-auto scrollbar-thin scrollbar-track-neutral-600 scrollbar-thumb-presetGreen scrollbar-thumb-rounded-md"
      style={{ height: 'calc(100% - 112px)' }}
    >
      {data &&
        data.map(item => (
          <ListItem key={item} onClick={() => goto(item)}>
            {item.replace('.setlist', '')}
          </ListItem>
        ))}
    </ul>
  )
}
