"use client"

import { useState, useEffect } from "react"

interface FormatSelectorProps {
  fileType: string
  selectedFormat: string | null
  onFormatSelect: (format: string) => void
}

export default function FormatSelector({ fileType, selectedFormat, onFormatSelect }: FormatSelectorProps) {
  const [availableFormats, setAvailableFormats] = useState<string[]>([])

  useEffect(() => {
    // Determine available formats based on file type
    const type = fileType.split("/")[0]
    const extension = fileType.split("/")[1]

    let formats: string[] = []

    switch (type) {
      case "image":
        if (extension === "jpeg" || extension === "jpg") {
          formats = [".PNG", ".WEBP", ".GIF", ".TIFF", ".PDF"]
        } else if (extension === "png") {
          formats = [".JPG", ".WEBP", ".GIF", ".TIFF", ".PDF"]
        } else if (extension === "gif") {
          formats = [".PNG", ".JPG", ".WEBP", ".TIFF", ".PDF"]
        } else if (extension === "webp") {
          formats = [".PNG", ".JPG", ".GIF", ".TIFF", ".PDF"]
        } else {
          formats = [".PNG", ".JPG", ".GIF", ".WEBP", ".TIFF", ".PDF"]
        }
        break
      case "video":
        if (extension === "mp4") {
          formats = [".MOV", ".AVI", ".MKV", ".WEBM", ".GIF"]
        } else if (extension === "webm") {
          formats = [".MP4", ".MOV", ".AVI", ".MKV", ".GIF"]
        } else {
          formats = [".MP4", ".MOV", ".AVI", ".MKV", ".WEBM", ".GIF"]
        }
        break
      case "audio":
        if (extension === "mp3") {
          formats = [".WAV", ".FLAC", ".AAC", ".OGG"]
        } else if (extension === "wav") {
          formats = [".MP3", ".FLAC", ".AAC", ".OGG"]
        } else {
          formats = [".MP3", ".WAV", ".FLAC", ".AAC", ".OGG"]
        }
        break
      case "application":
        if (extension === "pdf") {
          formats = [".DOCX", ".JPG", ".PNG", ".TXT"]
        } else if (extension === "msword" || extension.includes("document")) {
          formats = [".PDF", ".TXT", ".RTF"]
        } else if (extension === "vnd.ms-excel" || extension.includes("sheet")) {
          formats = [".PDF", ".CSV", ".TXT"]
        } else if (extension === "json") {
          formats = [".XML", ".CSV", ".TXT"]
        } else if (extension === "xml") {
          formats = [".JSON", ".CSV", ".TXT"]
        } else {
          formats = [".PDF", ".TXT"]
        }
        break
      case "text":
        if (extension === "plain") {
          formats = [".PDF", ".DOCX", ".HTML", ".RTF"]
        } else if (extension === "html") {
          formats = [".PDF", ".TXT", ".DOCX"]
        } else if (extension === "csv") {
          formats = [".XLSX", ".TXT", ".JSON"]
        } else {
          formats = [".PDF", ".DOCX", ".TXT"]
        }
        break
      default:
        formats = [".PDF", ".TXT"]
    }

    // Rimuovi il formato attuale del file dall'elenco
    const currentExtension = `.${extension.toUpperCase()}`
    setAvailableFormats(formats.filter((format) => format !== currentExtension))
  }, [fileType])

  return (
    <div className="w-full my-4">
      <p className="text-center mb-2 font-medium">Seleziona il formato di output</p>
      <div className="flex flex-wrap justify-center gap-2">
        {availableFormats.map((format) => (
          <button
            key={format}
            className={`format-button ${selectedFormat === format ? "selected" : ""}`}
            onClick={() => onFormatSelect(format)}
          >
            {format}
          </button>
        ))}
      </div>
    </div>
  )
}

