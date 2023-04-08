import Image from 'next/image'
import styles from './amp.module.css'

export default function Amp({ amp1, amp2 }: { amp1: string; amp2?: string }) {
  return (
    <div className="flex flex-col w-24 items-center justify-center mx-4">
      <div className="hover:brightness-125 cursor-pointer transition-all">
        <Image
          src={`/img/amps/${amp1}.png`}
          width={96}
          height={96}
          alt={`Amp ${amp1}`}
          className={styles.amp}
        />
      </div>
      {amp2 && (
        <div className="hover:brightness-125 cursor-pointer transition-all">
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
