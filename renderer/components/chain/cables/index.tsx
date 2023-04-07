import { useEffect, useRef } from 'react'

export default function Cables() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const context = canvasRef.current.getContext('2d')
    context.shadowBlur = 3
    context.shadowColor = 'black'
    context.shadowOffsetY = 1
    context.strokeStyle = '#555'
    context.lineWidth = 2
    context.lineCap = 'round'
    context.lineJoin = 'round'
    context.beginPath()
    context.moveTo(0, 40)
    context.lineTo(260, 40)
    context.lineTo(260, 76)
    context.lineTo(25, 76)
    context.lineTo(25, 110)
    context.lineTo(290, 110)
    context.stroke()

    return () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight)
    }
  })

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  )
}
