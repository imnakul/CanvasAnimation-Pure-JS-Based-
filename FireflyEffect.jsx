'use client'
import { useEffect, useRef } from 'react'

const FireflyEffect = () => {
   const canvasRef = useRef(null)

   useEffect(() => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      let w, h
      const fireflies = Array.from({ length: 50 }, () => ({
         x: Math.random() * window.innerWidth,
         y: Math.random() * window.innerHeight,
         vx: (Math.random() - 0.5) * 2,
         vy: (Math.random() - 0.5) * 2,
         size: Math.random() * 3 + 2,
         opacity: Math.random(),
      }))

      const resizeCanvas = () => {
         w = canvas.width = window.innerWidth
         h = canvas.height = window.innerHeight
      }

      const draw = () => {
         ctx.clearRect(0, 0, w, h)

         fireflies.forEach((firefly) => {
            firefly.x += firefly.vx
            firefly.y += firefly.vy

            if (firefly.x < 0 || firefly.x > w) firefly.vx *= -1
            if (firefly.y < 0 || firefly.y > h) firefly.vy *= -1

            ctx.globalAlpha = firefly.opacity
            ctx.fillStyle = '#FFDD44'
            ctx.beginPath()
            ctx.arc(firefly.x, firefly.y, firefly.size, 0, Math.PI * 2)
            ctx.fill()
         })

         requestAnimationFrame(draw)
      }

      resizeCanvas()
      draw()
      window.addEventListener('resize', resizeCanvas)

      return () => window.removeEventListener('resize', resizeCanvas)
   }, [])

   return <canvas ref={canvasRef} className='fixed inset-0 z-0 w-full h-full' />
}

export default FireflyEffect
