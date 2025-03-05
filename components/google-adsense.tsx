"use client"

import type React from "react"

import { useEffect } from "react"

interface GoogleAdSenseProps {
  adClient: string
  adSlot: string
  adFormat?: string
  fullWidthResponsive?: boolean
  style?: React.CSSProperties
}

export default function GoogleAdSense({
  adClient,
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  style = { display: "block" },
}: GoogleAdSenseProps) {
  useEffect(() => {
    // Load AdSense script if it hasn't been loaded yet
    const hasAdScript = document.querySelector('script[src*="pagead2.googlesyndication.com"]')

    if (!hasAdScript) {
      const script = document.createElement("script")
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      script.async = true
      script.crossOrigin = "anonymous"
      document.head.appendChild(script)
    }

    // Initialize ads
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (error) {
      console.error("AdSense error:", error)
    }
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
    />
  )
}

