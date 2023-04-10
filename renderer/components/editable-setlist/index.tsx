import { SetlistWithFullRigs } from '@/types/setlist'
import ListItem from './list-item'

export default function EditableSetlist({
  items
}: {
  items: SetlistWithFullRigs
}) {
  return (
    <div className="p-4 overflow-y-auto scrollbar-thin h-full scrollbar-track-neutral-600 scrollbar-thumb-presetGreen scrollbar-thumb-rounded-md">
      {items.rigs_data.map(rig => {
        return <ListItem key={rig.id} item={rig} />
      })}
    </div>
  )
}
