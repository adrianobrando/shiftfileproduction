import { CheckCircle } from "lucide-react"

interface ConversionCompleteProps {
  fileName: string
  fileSize: string
  onDownload: () => void
}

export default function ConversionComplete({ fileName, fileSize, onDownload }: ConversionCompleteProps) {
  return (
    <div className="flex flex-col items-center my-4">
      <CheckCircle className="w-16 h-16 text-green-500" />
      <p className="font-medium mt-2">{fileName}</p>
      <p className="text-sm text-gray-500">{fileSize}</p>
      <p className="font-medium text-xl mt-4 mb-6">Conversione effettuata!</p>
      <button
        onClick={onDownload}
        className="w-full py-3 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
      >
        Scarica
      </button>
    </div>
  )
}

