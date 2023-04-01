import Image from 'next/image'

export default function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick}>
      <Image
        src="/img/back-button.svg"
        alt="Back"
        width={36}
        height={36}
        unoptimized
      />
    </button>
  )
}
