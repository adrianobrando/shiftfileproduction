import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      validateAndUploadFile(file);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      validateAndUploadFile(file);
    }
  };

  const validateAndUploadFile = (file: File) => {
    // In a real app, we would validate the file type is HEIC
    // For this demo, we'll accept any file
    onFileUpload(file);
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div 
      className={`border-2 border-dashed rounded-lg p-6 mb-6 cursor-pointer text-center transition-all duration-300 ${
        isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
      }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileInputChange} 
        className="hidden" 
        accept=".heic"
      />
      <div className="flex flex-col items-center justify-center">
        <Upload className="w-8 h-8 mb-2 text-gray-600" />
        <h3 className="text-xl font-bold mb-2">
          Drag and drop your file
          <br />or click to upload
        </h3>
        <p className="text-sm text-gray-500">
          Max 10 MB/file (Auto-optimized for web)
        </p>
      </div>
    </div>
  );
};

export default FileUpload;