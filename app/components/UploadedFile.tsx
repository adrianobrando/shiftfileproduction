import React from 'react';
import { FileIcon, X } from 'lucide-react';

interface UploadedFileProps {
  file: File;
  onConvert: () => void;
  onCancel: () => void;
}

const UploadedFile: React.FC<UploadedFileProps> = ({ file, onConvert, onCancel }) => {
  // Format file size
  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' bytes';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };

  return (
    <div className="mb-6">
      <div className="border border-gray-200 rounded-lg p-4 mb-4 flex items-center">
        <div className="bg-blue-100 p-3 rounded-lg mr-3">
          <FileIcon className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-grow">
          <p className="font-semibold truncate">{file.name}</p>
          <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
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
          onClick={onConvert}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Convert to JPG
        </button>
      </div>
    </div>
  );
};

export default UploadedFile;