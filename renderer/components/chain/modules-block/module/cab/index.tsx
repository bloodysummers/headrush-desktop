import Image from 'next/image'
import styles from './cab.module.css'

export default function Cab({ cab1, cab2 }: { cab1: string; cab2?: string }) {
  return (
    <div className="flex flex-col w-24 items-center justify-center mx-4">
      <div className="hover:brightness-125 cursor-pointer transition-all">
        <Image
          src={`/img/cabs/${cab1}.png`}
          width={96}
          height={96}
          alt={`Cab ${cab1}`}
          className={styles.cab}
        />
      </div>
      {cab2 && (
        <div className="hover:brightness-125 cursor-pointer transition-all">
          <Image
            src={`/img/cabs/${cab2}.png`}
            width={96}
            height={96}
            alt={`Cab ${cab2}`}
            className={styles.cab}
          />
        </div>
      )}
    </div>
  )
}
