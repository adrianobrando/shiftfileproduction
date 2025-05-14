import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProBanner = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-gradient-to-r from-blue-800 via-teal-700 to-green-500 rounded-xl p-4 mb-6 text-white flex justify-between items-center cursor-pointer hover:opacity-90 transition-opacity"
      onClick={() => navigate('/pro')}
    >
      <div>
        <h3 className="text-xl font-semibold mb-1">Need more?</h3>
        <h4 className="text-2xl font-bold">Go <span className="text-yellow-300">PRO</span></h4>
      </div>
      <div className="text-right">
        <p className="text-sm">50 MB/file</p>
        <p className="font-semibold">Unlimited conversions</p>
        <p className="text-sm">No compression</p>
      </div>
    </div>
  );
};

export default ProBanner;