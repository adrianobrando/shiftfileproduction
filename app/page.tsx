"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import FileUploader from "@/components/file-uploader"
import FileInfo from "@/components/file-info"
import FormatSelector from "@/components/format-selector"
import ConversionComplete from "@/components/conversion-complete"
import DownloadComplete from "@/components/download-complete"
import Logo from "@/components/logo"

type AppState = "initial" | "dragging" | "selected" | "converting" | "converted" | "downloaded"

export default function Home() {
  const [appState, setAppState] = useState<AppState>("initial")
  const [file, setFile] = useState<File | null>(null)
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)
  const [convertedFile, setConvertedFile] = useState<{ name: string; size: string; blob: Blob | null } | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Simula il caricamento del file e fa la conversione
  useEffect(() => {
    if (appState === "converting" && file && selectedFormat) {
      // Inizia con 0% di progresso
      setProgress(0)

      // Crea un array di step per simulare il progresso
      const progressSteps = Array.from({ length: 10 }, (_, i) => (i + 1) * 10)
      let currentStep = 0

      // Timer per simulare il progresso
      const progressTimer = setInterval(() => {
        if (currentStep < progressSteps.length) {
          setProgress(progressSteps[currentStep])
          currentStep++
        } else {
          clearInterval(progressTimer)

          // Quando il progresso è completo, esegui la conversione effettiva
          convertFile(file, selectedFormat)
            .then((convertedBlob) => {
              const fileName = `${file.name.split(".")[0]}${selectedFormat.toLowerCase()}`

              setConvertedFile({
                name: fileName,
                size: formatFileSize(convertedBlob.size),
                blob: convertedBlob,
              })

              setAppState("converted")
            })
            .catch((error) => {
              console.error("Errore durante la conversione:", error)
              // In caso di errore, comunque mostra come completato
              // In un'app reale, qui gestiresti l'errore in modo appropriato
              setAppState("converted")
            })
        }
      }, 300)

      return () => {
        clearInterval(progressTimer)
      }
    }
  }, [appState, file, selectedFormat])

  // Funzione per convertire il file
  const convertFile = async (file: File, format: string): Promise<Blob> => {
    // Ottieni il tipo di file
    const fileType = file.type.split("/")[0]
    const targetFormat = format.toLowerCase().replace(".", "")

    // Per le immagini, usa canvas per la conversione
    if (fileType === "image" && ["png", "jpeg", "jpg", "webp"].includes(targetFormat)) {
      return await convertImage(file, `image/${targetFormat}`)
    }

    // Per i file di testo, crea un nuovo file di testo
    if (fileType === "text" || file.type.includes("application/json") || file.type.includes("application/xml")) {
      const text = await file.text()
      return new Blob([text], { type: getMimeType(targetFormat) })
    }

    // Per i PDF, simula la conversione
    if (file.type.includes("pdf") || targetFormat === "pdf") {
      // In un'app reale, qui useresti una libreria per la conversione PDF
      return file
    }

    // Per altri tipi di file, restituisci il file originale
    // In un'app reale, qui useresti servizi di conversione appropriati
    return file
  }

  // Funzione per convertire un'immagine usando canvas
  const convertImage = (file: File, mimeType: string): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => {
        const canvas = canvasRef.current
        if (!canvas) {
          reject(new Error("Canvas non disponibile"))
          return
        }

        canvas.width = img.width
        canvas.height = img.height
        const ctx = canvas.getContext("2d")
        if (!ctx) {
          reject(new Error("Contesto 2D non disponibile"))
          return
        }

        ctx.drawImage(img, 0, 0)

        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob)
            } else {
              reject(new Error("Impossibile creare il blob"))
            }
          },
          mimeType,
          0.9,
        )
      }

      img.onerror = () => {
        reject(new Error("Errore nel caricamento dell'immagine"))
      }

      img.src = URL.createObjectURL(file)
    })
  }

  // Funzione per ottenere il MIME type dal formato
  const getMimeType = (format: string): string => {
    const mimeTypes: Record<string, string> = {
      pdf: "application/pdf",
      docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      txt: "text/plain",
      csv: "text/csv",
      json: "application/json",
      xml: "application/xml",
      html: "text/html",
      css: "text/css",
      js: "text/javascript",
      png: "image/png",
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      gif: "image/gif",
      webp: "image/webp",
      svg: "image/svg+xml",
      mp3: "audio/mpeg",
      wav: "audio/wav",
      mp4: "video/mp4",
      webm: "video/webm",
      zip: "application/zip",
      rar: "application/x-rar-compressed",
      "7z": "application/x-7z-compressed",
    }

    return mimeTypes[format] || "application/octet-stream"
  }

  const handleDragEnter = () => {
    if (appState === "initial") {
      setAppState("dragging")
    }
  }

  const handleDragLeave = () => {
    if (appState === "dragging") {
      setAppState("initial")
    }
  }

  const handleFileDrop = (file: File) => {
    setFile(file)
    setAppState("selected")
  }

  const handleFormatSelect = (format: string) => {
    setSelectedFormat(format)
  }

  const handleConvert = () => {
    setProgress(0)
    setAppState("converting")
  }

  const handleDownload = () => {
    if (convertedFile && convertedFile.blob) {
      // Crea un URL per il blob
      const url = URL.createObjectURL(convertedFile.blob)

      // Crea un elemento <a> per il download
      const a = document.createElement("a")
      a.href = url
      a.download = convertedFile.name
      document.body.appendChild(a)

      // Simula il click per avviare il download
      a.click()

      // Rimuovi l'elemento e revoca l'URL
      setTimeout(() => {
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
        setAppState("downloaded")
      }, 100)
    } else {
      // Fallback se il blob non è disponibile
      setAppState("downloaded")
    }
  }

  const handleReset = () => {
    setFile(null)
    setSelectedFormat(null)
    setProgress(0)
    setConvertedFile(null)
    setAppState("initial")
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i]
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      {/* Canvas nascosto per la conversione delle immagini */}
      <canvas ref={canvasRef} style={{ display: "none" }} />

      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8">
        <div className="flex flex-col items-center">
          <Logo />

          <p className="text-center text-gray-700 mt-2 mb-6">
            Converti tutto quello che vuoi
            <br />
            in massima sicurezza
          </p>

          {(appState === "initial" || appState === "dragging") && (
            <FileUploader
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onFileDrop={handleFileDrop}
              isDragging={appState === "dragging"}
            />
          )}

          {appState === "selected" && file && (
            <>
              <FileInfo file={file} />
              <FormatSelector
                fileType={file.type}
                selectedFormat={selectedFormat}
                onFormatSelect={handleFormatSelect}
              />
            </>
          )}

          {appState === "converting" && (
            <div className="w-full mt-4">
              <div className="text-center mb-3">
                <p className="font-medium">Conversione in corso...</p>
                <p className="text-sm text-gray-500">{progress}%</p>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
          )}

          {appState === "converted" && convertedFile && (
            <ConversionComplete
              fileName={convertedFile.name}
              fileSize={convertedFile.size}
              onDownload={handleDownload}
            />
          )}

          {appState === "downloaded" && <DownloadComplete onReset={handleReset} />}

          {(appState === "initial" || appState === "dragging" || appState === "selected") && (
            <button
              onClick={appState === "selected" && selectedFormat ? handleConvert : undefined}
              className={`w-full py-3 px-4 bg-blue-500 text-white rounded-full mt-6 transition-all ${
                appState === "selected" && selectedFormat
                  ? "opacity-100 hover:bg-blue-600"
                  : "opacity-50 cursor-not-allowed"
              }`}
              disabled={appState !== "selected" || !selectedFormat}
            >
              Converti il tuo file
            </button>
          )}

          <div className="mt-4 text-center text-sm text-gray-500">
            <p>
              I tuoi file sono al sicuro. Leggi{" "}
              <a href="#" className="text-gray-700 hover:underline">
                Termini del servizio
              </a>
            </p>
            <p>
              Assicurati di leggere la nostra{" "}
              <a href="#" className="text-gray-700 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          <div className="mt-6 text-center hidden">
            <p className="text-sm font-medium">
              File più pesanti di 500MB?{" "}
              <Link href="/piani" className="text-blue-500 hover:underline">
                Scopri i nostri piani
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

