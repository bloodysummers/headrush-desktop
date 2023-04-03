import { useRouter } from 'next/router'
import RigItem from './rig-item'

export default function RigList({ data }: { data: string[] }) {
  const router = useRouter()

  const editRig = (rig: string) => {
    router.push(`/assets/rig/editor/${rig}`)
  }
  return (
    <ul
      className="overflow-y-auto scrollbar-thin scrollbar-track-neutral-600 scrollbar-thumb-presetGreen scrollbar-thumb-rounded-md"
      style={{ height: 'calc(100% - 112px)' }}
    >
      {data &&
        data.map(rig => (
          <RigItem key={rig} onClick={() => editRig(rig)}>
            {rig.replace('.rig', '')}
          </RigItem>
        ))}
    </ul>
  )
}
