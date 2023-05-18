export default function Empty({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="relative flex justify-center items-center h-12 bg-neutral-600 text-white uppercase border-t-white border-t cursor-pointer"
    >
      [Empty]
      <span className="absolute right-4 text-4xl -mt-1">+</span>
    </div>
  )
}
