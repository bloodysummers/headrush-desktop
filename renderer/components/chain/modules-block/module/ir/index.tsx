import ImpulseResponseCab from './ir-cab'

export default function ImpulseResponse({
  double = true
}: {
  double: boolean
}) {
  return (
    <div className="flex flex-col w-24 items-center justify-center mx-4">
      <ImpulseResponseCab mini={double} />
      {double && <ImpulseResponseCab mini={double} />}
    </div>
  )
}
