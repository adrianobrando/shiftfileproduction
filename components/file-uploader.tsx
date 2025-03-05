"use client"

import { useRef, type DragEvent, type ChangeEvent } from "react"
import { Upload } from "lucide-react"

interface FileUploaderProps {
  onDragEnter: () => void
  onDragLeave: () => void
  onFileDrop: (file: File) => void
  isDragging: boolean
}

export default function FileUploader({ onDragEnter, onDragLeave, onFileDrop, isDragging }: FileUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    onDragEnter()
  }

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      onDragLeave()
    }
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    onDragLeave()

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFileDrop(e.dataTransfer.files[0])
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onFileDrop(e.target.files[0])
    }
  }

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <div
      className={`drop-zone w-full ${isDragging ? "active" : ""}`}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      {isDragging ? (
        <p className="text-xl font-medium text-gray-700">Lascia cadere il file!</p>
      ) : (
        <>
          <Upload className="w-10 h-10 text-gray-400 mb-4" />
          <p className="text-xl font-medium text-gray-700">
            Trascina i file qui
            <br />o clicca per selezionare
          </p>
          <p className="text-sm text-gray-500 mt-2">fino a 500MB</p>
        </>
      )}
      <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
    </div>
  )
}

