import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="p-8">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to converter
          </Link>

          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information that you provide directly to us, including information about your use of our services, such as the number of file conversions performed.
            </p>

            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to provide, maintain, and improve our services, including tracking the number of conversions for free tier limitations.
            </p>

            <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
            <p className="mb-4">
              We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
            </p>

            <h2 className="text-2xl font-semibold mb-4">4. File Processing</h2>
            <p className="mb-4">
              Files uploaded for conversion are processed in your browser and are not stored on our servers. The conversion process happens entirely on your device.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;