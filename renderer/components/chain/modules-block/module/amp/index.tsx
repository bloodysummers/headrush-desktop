import Image from 'next/image'
import styles from './amp.module.css'

export default function Amp({
  name,
  amp1,
  amp2,
  onClick
}: {
  name: string
  amp1: string
  amp2?: string
  onClick?: (module: string, type: string) => void
}) {
  const _onClick = (amp: string) => {
    if (onClick) {
      onClick(amp, name)
    }
  }
  return (
    <div className="flex flex-col w-24 items-center justify-center mx-4">
      <div
        className="hover:brightness-125 cursor-pointer transition-all"
        onClick={() => _onClick(amp1)}
      >
        <Image
          src={`/img/amps/${amp1}.png`}
          width={96}
          height={96}
          alt={`Amp ${amp1}`}
          className={styles.amp}
        />
      </div>
      {amp2 && (
        <div
          className="hover:brightness-125 cursor-pointer transition-all"
          onClick={() => _onClick(amp2)}
        >
          <Image
            src={`/img/amps/${amp2}.png`}
            width={96}
            height={96}
            alt={`Amp ${amp2}`}
            className={styles.amp}
          />
        </div>
      )}
    </div>
  )
}
