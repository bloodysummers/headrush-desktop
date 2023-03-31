type ButtonProps = {
  children: React.ReactNode
  type?: 'submit' | 'reset' | 'button' | undefined
}

export default function Button({ children, type }: ButtonProps) {
  return (
    <button
      type={type}
      className="bg-red-800 text-white uppercase p-4 hover:bg-red-600 transition-all"
    >
      {children}
    </button>
  )
}
