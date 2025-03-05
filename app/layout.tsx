import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import Background from "@/components/background"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "FileShifter - Convertitore di File",
  description: "Converti tutto quello che vuoi in massima sicurezza",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={`${inter.variable} font-sans`}>
        <Background />
        {children}
      </body>
    </html>
  )
}



import './globals.css'