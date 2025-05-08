import React from 'react';
import { FileIcon, X, Download } from 'lucide-react';

interface ConvertedFileProps {
  file: File;
  onDownload: () => void;
  onCancel: () => void;
}

const ConvertedFile: React.FC<ConvertedFileProps> = ({ file, onDownload, onCancel }) => {
  // Format file size
  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' bytes';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };

  const convertedFilename = file.name.replace(/\.heic$/i, '.jpg');

  return (
    <div className="mb-6">
      <div className="border border-green-200 bg-green-50 rounded-lg p-4 mb-4 flex items-center">
        <div className="bg-green-100 p-3 rounded-lg mr-3">
          <FileIcon className="w-6 h-6 text-green-600" />
        </div>
        <div className="flex-grow">
          <p className="font-semibold truncate">{convertedFilename}</p>
          <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
          <p className="text-xs text-green-600 font-medium">Conversion complete!</p>
        </div>
        <button 
          onClick={onCancel}
          className="text-gray-400 hover:text-gray-600"
          aria-label="Remove file"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="flex justify-between">
        <button 
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
        >
          Cancel
        </button>
        <button 
          onClick={onDownload}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
        >
          <Download className="w-4 h-4 mr-2" />
          Download JPG
        </button>
      </div>
    </div>
  );
};

export default ConvertedFile;