import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="p-8">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to converter
          </Link>

          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">1. Terms</h2>
            <p className="mb-4">
              By accessing this Website, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for compliance with any applicable local laws.
            </p>

            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Shiftfile's website for personal, non-commercial transitory viewing only.
            </p>

            <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
            <p className="mb-4">
              The materials on Shiftfile's website are provided "as is". Shiftfile makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
            <p className="mb-4">
              In no event shall Shiftfile or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Shiftfile's website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;