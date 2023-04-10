import { ChangeEvent, useState } from 'react'
import Button from '../button'

export default function NewSetlistModal({
  onConfirm,
  onCancel
}: {
  onConfirm: (name: string) => void
  onCancel: () => void
}) {
  const [name, setName] = useState('')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value.toUpperCase())
  }
  const _onConfirm = () => {
    if (name) {
      onConfirm(name)
      setName('')
    }
  }
  const _onCancel = () => {
    setName('')
    onCancel()
  }
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold text-white">
        Write the name of the new setlist
      </h1>
      <input
        type="text"
        placeholder="Search"
        autoFocus
        className="bg-black h-12 w-1/2 px-2 text-white outline-none mt-2 mb-4"
        onChange={onChange}
        value={name}
        onKeyDown={e => {
          var regex = new RegExp('^[A-Za-z0-9 _-]+$')
          if (!regex.test(e.key)) {
            e.preventDefault()
            return false
          }
        }}
      />
      <div className="flex gap-4">
        <Button onClick={_onConfirm}>Save</Button>
        <Button onClick={_onCancel}>Cancel</Button>
      </div>
    </div>
  )
}
