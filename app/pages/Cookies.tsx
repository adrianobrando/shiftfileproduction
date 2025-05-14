import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="p-8">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to converter
          </Link>

          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
            <p className="mb-4">
              Cookies are small pieces of text used to store information on web browsers. They are used to store and receive identifiers and other information on computers, phones, and other devices.
            </p>

            <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
            <p className="mb-4">
              We use cookies to track the number of file conversions performed by each user and to ensure our free tier limitations are properly enforced. We also use cookies to remember your preferences and provide a better user experience.
            </p>

            <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
            <p className="mb-4">
              - Essential cookies: Required for the operation of our website
              - Analytics cookies: Help us understand how visitors interact with our website
              - Preference cookies: Allow our website to remember choices you make
            </p>

            <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
            <p className="mb-4">
              Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact your experience using our website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;