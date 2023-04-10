import ImpulseResponseCab from './ir-cab'

export default function ImpulseResponse({
  ir1,
  ir2,
  irType,
  double,
  onClick
}: {
  ir1: string
  ir2: string
  irType: 'IR' | 'IR (1024)'
  double: boolean
  onClick: (module: string, type: string) => void
}) {
  const _onClick = (ir: string) => {
    if (onClick) {
      onClick(ir, irType)
    }
  }
  return (
    <div className="flex flex-col w-24 items-center justify-center mx-4">
      <ImpulseResponseCab mini={double} onClick={() => _onClick(ir1)} />
      {double && (
        <ImpulseResponseCab mini={double} onClick={() => _onClick(ir2)} />
      )}
    </div>
  )
}
