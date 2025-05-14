import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';

const Pro = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="p-8">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to converter
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Upgrade to <span className="text-blue-600">PRO</span>
            </h1>
            <p className="text-xl text-gray-600">
              Unlock unlimited conversions and premium features
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="border rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Free</h2>
              <p className="text-gray-600 mb-6">Perfect for occasional use</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  20 conversions per month
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  Max 10MB file size
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  Basic compression
                </li>
              </ul>
              <p className="text-2xl font-bold mb-6">$0</p>
              <Link 
                to="/"
                className="block w-full py-3 px-6 text-center border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Current Plan
              </Link>
            </div>

            <div className="border-2 border-blue-600 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm py-1 px-3 rounded-full">
                Popular
              </div>
              <h2 className="text-2xl font-bold mb-4">PRO</h2>
              <p className="text-gray-600 mb-6">For power users</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  Unlimited conversions
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  Max 50MB file size
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  No compression
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  Batch conversion
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  Priority support
                </li>
              </ul>
              <p className="text-2xl font-bold mb-6">$9.99/month</p>
              <button 
                className="block w-full py-3 px-6 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Upgrade Now
              </button>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Pro;