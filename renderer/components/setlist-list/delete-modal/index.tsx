import Button from '@/components/button'

export default function DeleteModal({
  setlist,
  onCancel,
  onConfirm
}: {
  setlist: string
  onCancel: () => void
  onConfirm: () => void
}) {
  return (
    <div className="h-full flex items-center justify-center flex-col">
      <h1 className="text-xl font-bold text-white">
        Are you sure you want to delete this setlist?
      </h1>
      <h2 className="text-md text-white mb-4">This action can't be undone</h2>
      <h1 className="text-xl text-white mb-8">{setlist}</h1>
      <div className="flex gap-4">
        <Button onClick={onConfirm}>Delete</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </div>
    </div>
  )
}
