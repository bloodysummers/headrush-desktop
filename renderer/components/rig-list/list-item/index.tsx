import classNames from 'classnames'
import colorsCatalog from '@/tokens/catalogs/colors'
import colors from '@/tokens/colors'

export default function ListItem({
  children,
  onClick,
  color
}: {
  children: React.ReactNode
  onClick: () => void
  color: number
}) {
  return (
    <div
      className="flex flex-row items-stretch text-white  cursor-pointer bg-neutral-500 bg-opacity-90 hover:bg-opacity-100 hover:bg-presetGreen hover:text-black transition-all border-neutral-700 border-b-2"
      onClick={onClick}
    >
      <div
        className="w-6 mr-4"
        style={{ background: colors[colorsCatalog[color]] }}
      />
      <h1 className="uppercase p-2">{children}</h1>
    </div>
  )
}
