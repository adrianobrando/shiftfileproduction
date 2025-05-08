import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import FileUpload from '../components/FileUpload';
import AdSpace from '../components/AdSpace';
import ProBanner from '../components/ProBanner';
import Footer from '../components/Footer';
import UploadedFile from '../components/UploadedFile';
import ConvertedFile from '../components/ConvertedFile';
import DownloadComplete from '../components/DownloadComplete';

export type ConversionStep = 'upload' | 'ready' | 'converted' | 'downloaded';

function Converter() {
  const navigate = useNavigate();
  const [conversionStep, setConversionStep] = useState<ConversionStep>('upload');
  const [file, setFile] = useState<File | null>(null);
  const [convertedFileUrl, setConvertedFileUrl] = useState<string | null>(null);
  const [conversionsLeft, setConversionsLeft] = useState<number>(20);
  const [userId] = useState(() => localStorage.getItem('userId') || crypto.randomUUID());

  useEffect(() => {
    localStorage.setItem('userId', userId);
    const conversionsCount = parseInt(localStorage.getItem(`conversions_${userId}`) || '0', 10);
    setConversionsLeft(20 - conversionsCount);
  }, [userId]);

  const handleFileUpload = (uploadedFile: File) => {
    if (conversionsLeft <= 0) {
      navigate('/pro');
      return;
    }
    setFile(uploadedFile);
    setConversionStep('ready');
  };

  const handleConvert = () => {
    const currentConversions = parseInt(localStorage.getItem(`conversions_${userId}`) || '0', 10);
    const newConversions = currentConversions + 1;
    localStorage.setItem(`conversions_${userId}`, newConversions.toString());
    setConversionsLeft(20 - newConversions);
    
    // Simulate conversion process
    setTimeout(() => {
      setConvertedFileUrl(URL.createObjectURL(file!));
      setConversionStep('converted');
    }, 1500);
  };

  const handleDownload = () => {
    if (convertedFileUrl) {
      const a = document.createElement('a');
      a.href = convertedFileUrl;
      a.download = file!.name.replace('.heic', '.jpg');
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      setConversionStep('downloaded');
    }
  };

  const handleReset = () => {
    setFile(null);
    if (convertedFileUrl) {
      URL.revokeObjectURL(convertedFileUrl);
    }
    setConvertedFileUrl(null);
    setConversionStep('upload');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-100">
        <div className="p-8">
          <Header conversionsLeft={conversionsLeft} />

          {conversionStep === 'upload' && (
            <FileUpload onFileUpload={handleFileUpload} />
          )}

          {conversionStep === 'ready' && file && (
            <UploadedFile 
              file={file} 
              onConvert={handleConvert} 
              onCancel={handleReset} 
            />
          )}
          
          {conversionStep === 'converted' && file && (
            <ConvertedFile 
              file={file} 
              onDownload={handleDownload} 
              onCancel={handleReset} 
            />
          )}
          
          {conversionStep === 'downloaded' && (
            <DownloadComplete onConvertAnother={handleReset} />
          )}
          
          <AdSpace />
          <ProBanner />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Converter;