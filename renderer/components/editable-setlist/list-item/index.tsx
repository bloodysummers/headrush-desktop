import colors from '@/tokens/colors'
import colorsCatalog from '@/tokens/catalogs/colors'
import { Rig } from '@/types/rig'
import Image from 'next/image'
import { MouseEvent, useState } from 'react'
import classNames from 'classnames'

export default function ListItem({
  item,
  onDelete
}: {
  item: Rig
  onDelete: () => void
}) {
  const [deleting, setDeleting] = useState(false)
  const _onDelete = (e: MouseEvent<HTMLImageElement>) => {
    e.stopPropagation()
    setDeleting(true)
    if (onDelete) onDelete()
  }

  return (
    <div
      className={classNames(
        'bg-slate-200 text-neutral-900 flex shadow-md rounded-lg transition-all',
        {
          'scale-0': deleting
        }
      )}
    >
      <div
        className="w-6 mr-1 rounded-l-md"
        style={{ background: colors[colorsCatalog[item.color]] }}
      />
      <div className="p-2 flex mr-2">
        <Image
          src="/img/draggable-button.svg"
          width={16}
          height={16}
          alt="Drag"
        />
      </div>
      <div className="px-2 py-4 flex-1 h-14">{item.name}</div>
      <div
        className="bg-red-500 w-8 h-8 flex justify-center items-center rounded-full mr-2 mt-2 cursor-pointer"
        onClick={_onDelete}
      >
        <Image
          src="/img/delete-button.svg"
          width={16}
          height={16}
          alt="Remove element"
        />
      </div>
    </div>
  )
}
