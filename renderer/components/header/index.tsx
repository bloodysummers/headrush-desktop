import BackButton from '../back-button'
import Button from '../button'

type Cta = {
  onClick: () => void
  text: string
}

export default function Header({
  title,
  backButton,
  cta
}: {
  title: string
  backButton?: () => void
  cta?: Cta
}) {
  return (
    <div className="h-16">
      <header className="flex relative flex-row justify-between bg-neutral-500 w-screen text-center bg-opacity-50 h-16 overflow-hidden">
        {backButton && <BackButton onClick={backButton} />}
        <h1 className="text-white text-2xl uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-2xl text-ellipsis whitespace-nowrap">
          {title}
        </h1>
        {cta && <Button onClick={cta.onClick}>{cta.text}</Button>}
      </header>
    </div>
  )
}
