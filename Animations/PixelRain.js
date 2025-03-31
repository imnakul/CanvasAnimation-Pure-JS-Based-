'use client'
import { useEffect, useRef } from 'react'

const PixelRain = ({
   rainColor = '#00FF9F',
   speed = 2,
   density = 80,
   opacity = 0.3,
}) => {
   const canvasRef = useRef(null)

   useEffect(() => {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      let animationFrameId
      let drops = []

      const resizeCanvas = () => {
         canvas.width = window.innerWidth
         canvas.height = window.innerHeight
      }

      const createRain = () => {
         drops = []
         for (let i = 0; i < density; i++) {
            drops.push({
               x: Math.random() * canvas.width,
               y: Math.random() * canvas.height,
               length: Math.random() * 20 + 10,
               speed: Math.random() * speed + 1,
            })
         }
      }

      const drawRain = () => {
         ctx.clearRect(0, 0, canvas.width, canvas.height)

         drops.forEach((drop) => {
            ctx.beginPath()
            ctx.moveTo(drop.x, drop.y)
            ctx.lineTo(drop.x, drop.y + drop.length)
            ctx.strokeStyle = rainColor
            ctx.lineWidth = 1.5
            ctx.globalAlpha = opacity
            ctx.stroke()

            drop.y += drop.speed
            if (drop.y > canvas.height) drop.y = 0
         })

         animationFrameId = requestAnimationFrame(drawRain)
      }

      resizeCanvas()
      createRain()
      drawRain()

      window.addEventListener('resize', resizeCanvas)

      return () => {
         cancelAnimationFrame(animationFrameId)
         window.removeEventListener('resize', resizeCanvas)
      }
   }, [rainColor, speed, density, opacity])

   return <canvas ref={canvasRef} className='fixed inset-0 z-0 w-full h-full' />
}

export default PixelRain
