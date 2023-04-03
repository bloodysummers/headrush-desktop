import Image from 'next/image'
import { ChangeEvent } from 'react'

type SearchboxProps = {
  onChange?: (value: string) => void
  value: string
}
export default function Searchbox({ onChange, value }: SearchboxProps) {
  const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.currentTarget.value)
    }
  }
  return (
    <div className="relative flex">
      <Image
        src="/img/search-button.svg"
        alt="search"
        width={22}
        height={22}
        unoptimized
        className="absolute top-3 left-3"
      />
      <input
        type="text"
        placeholder="Search"
        autoFocus
        className="bg-black h-12 w-screen pl-12 text-white outline-none"
        onChange={_onChange}
        value={value}
      />
    </div>
  )
}
