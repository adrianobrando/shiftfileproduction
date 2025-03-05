import { FileIcon, ImageIcon, FileTextIcon, FileVideoIcon, FileAudioIcon } from "lucide-react"

interface FileInfoProps {
  file: File
}

export default function FileInfo({ file }: FileInfoProps) {
  const getFileIcon = () => {
    const type = file.type.split("/")[0]

    switch (type) {
      case "image":
        return <ImageIcon className="w-16 h-16 text-green-500" />
      case "video":
        return <FileVideoIcon className="w-16 h-16 text-blue-500" />
      case "audio":
        return <FileAudioIcon className="w-16 h-16 text-purple-500" />
      case "text":
      case "application":
        return <FileTextIcon className="w-16 h-16 text-orange-500" />
      default:
        return <FileIcon className="w-16 h-16 text-gray-500" />
    }
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i]
  }

  return (
    <div className="flex flex-col items-center my-4">
      {getFileIcon()}
      <p className="font-medium mt-2">{file.name}</p>
      <p className="text-sm text-gray-500">{formatFileSize(file.size)}</p>
    </div>
  )
}

