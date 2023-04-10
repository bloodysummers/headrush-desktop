import Image from 'next/image'
import { MouseEvent } from 'react'

export default function ListItem({
  children,
  onClick,
  onEdit,
  onDelete
}: {
  children: React.ReactNode
  onClick: () => void
  onEdit?: () => void
  onDelete?: () => void
}) {
  const _onEdit = (e: MouseEvent<HTMLImageElement>) => {
    e.stopPropagation()
    if (onEdit) onEdit()
  }
  const _onDelete = (e: MouseEvent<HTMLImageElement>) => {
    e.stopPropagation()
    if (onDelete) onDelete()
  }
  return (
    <div
      className="flex flex-row justify-between text-white  cursor-pointer bg-neutral-500 bg-opacity-90 hover:bg-opacity-100 hover:bg-presetGreen hover:text-black transition-all border-neutral-700 border-b-2"
      onClick={onClick}
    >
      <h1 className="uppercase p-2">{children}</h1>
      <div className="flex">
        <Image
          src="/img/edit-button.svg"
          width={22}
          height={22}
          alt="Edit"
          className="mr-6 hover:brightness-0 transition-all"
          onClick={_onEdit}
        />
        <Image
          src="/img/delete-button.svg"
          width={22}
          height={22}
          alt="Remove"
          className="mr-6 hover:brightness-0 transition-all"
          onClick={_onDelete}
        />
      </div>
    </div>
  )
}
