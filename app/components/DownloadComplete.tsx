import React from 'react';
import { CheckCircle } from 'lucide-react';

interface DownloadCompleteProps {
  onConvertAnother: () => void;
}

const DownloadComplete: React.FC<DownloadCompleteProps> = ({ onConvertAnother }) => {
  return (
    <div className="mb-6 text-center">
      <div className="flex justify-center mb-4">
        <CheckCircle className="w-16 h-16 text-green-500" />
      </div>
      <h3 className="text-xl font-bold mb-2">Download Started!</h3>
      <p className="text-gray-600 mb-4">Your file has been successfully converted and downloaded.</p>
      <button 
        onClick={onConvertAnother}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mx-auto"
      >
        Convert Another File
      </button>
    </div>
  );
};

export default DownloadComplete;