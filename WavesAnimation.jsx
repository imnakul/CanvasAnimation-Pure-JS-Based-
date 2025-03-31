'use client'
import { useEffect, useRef } from 'react'

const WavesAnimation = () => {
   const canvasRef = useRef(null)

   useEffect(() => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      let w, h
      let t = 0

      const resizeCanvas = () => {
         w = canvas.width = window.innerWidth
         h = canvas.height = window.innerHeight
      }

      const draw = () => {
         ctx.clearRect(0, 0, w, h)
         ctx.strokeStyle = '#2EB9DF'
         ctx.lineWidth = 2

         for (let i = 0; i < 5; i++) {
            ctx.beginPath()
            for (let x = 0; x < w; x++) {
               const y =
                  h / 2 +
                  Math.sin((x / w) * Math.PI * 4 + t + i * 0.5) * (40 + i * 10)
               ctx.lineTo(x, y)
            }
            ctx.stroke()
         }

         t += 0.05
         requestAnimationFrame(draw)
      }

      resizeCanvas()
      draw()
      window.addEventListener('resize', resizeCanvas)

      return () => window.removeEventListener('resize', resizeCanvas)
   }, [])

   return <canvas ref={canvasRef} className='fixed inset-0 z-0 w-full h-full' />
}

export default WavesAnimation
