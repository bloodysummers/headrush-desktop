export default function ListItem({
  children,
  onClick
}: {
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <div
      className="flex flex-col text-white  cursor-pointer bg-neutral-500 bg-opacity-90 hover:bg-opacity-100 hover:bg-presetGreen hover:text-black transition-all border-neutral-700 border-b-2"
      onClick={onClick}
    >
      <h1 className="uppercase p-2">{children}</h1>
    </div>
  )
}
