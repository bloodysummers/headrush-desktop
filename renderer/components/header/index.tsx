import BackButton from '../back-button'

export default function Header({
  title,
  backButton
}: {
  title: string
  backButton?: () => void
}) {
  return (
    <div className="h-16">
      <header className="flex relative flex-row justify-between bg-neutral-500 w-screen text-center text-2xl p-2 bg-opacity-50 h-16">
        {backButton && <BackButton onClick={backButton} />}
        <h1 className="text-white uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {title}
        </h1>
      </header>
    </div>
  )
}
