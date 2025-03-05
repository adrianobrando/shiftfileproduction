"use client"

import { useEffect, useRef } from "react"

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match window size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawBackground()
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    function drawBackground() {
      // Fill background with dark color
      ctx.fillStyle = "#0a0a0a"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid lines
      ctx.strokeStyle = "#222"
      ctx.lineWidth = 1

      // Horizontal lines
      const gridSize = 40
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw random red elements
      const redElements = Math.floor((canvas.width * canvas.height) / 20000)

      for (let i = 0; i < redElements; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = 5 + Math.random() * 20

        // Random shape type (0: rectangle, 1: circle)
        const shapeType = Math.floor(Math.random() * 2)

        // Random red shade
        const redShade = 100 + Math.floor(Math.random() * 155)
        ctx.fillStyle = `rgb(${redShade}, 20, 20)`

        if (shapeType === 0) {
          // Rectangle
          ctx.fillRect(x, y, size, size * 2)
        } else {
          // Circle
          ctx.beginPath()
          ctx.arc(x, y, size / 2, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" style={{ pointerEvents: "none" }} />
}

