import React from 'react';

interface HeaderProps {
  conversionsLeft: number;
}

const Header: React.FC<HeaderProps> = ({ conversionsLeft }) => {
  return (
    <div className="text-center mb-5">
      <h1 className="text-4xl font-bold mb-2">
        <span className="font-black">Shift</span>
        <span className="font-normal">file</span>
      </h1>
      <h2 className="text-xl mb-1">Convert HEIC to JPG for <span className="font-bold">Free</span></h2>
      <p className="text-sm text-gray-600">{conversionsLeft} conversions/month left • Fast & Secure</p>
    </div>
  );
};

export default Header;