import Image from 'next/image'

export default function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="bg-red-600 rounded-full cursor-pointer shadow-black shadow-md"
      onClick={onClick}
    >
      <Image
        src="/img/close-button.svg"
        alt="Close"
        width={32}
        height={32}
        unoptimized
      />
    </div>
  )
}
