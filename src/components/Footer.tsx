import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="text-center text-sm text-gray-500 space-x-4">
      <Link to="/terms" className="hover:text-gray-700 transition-colors">Terms of service</Link>
      <Link to="/privacy" className="hover:text-gray-700 transition-colors">Privacy Policy</Link>
      <Link to="/cookies" className="hover:text-gray-700 transition-colors">Cookie Policy</Link>
    </div>
  );
};

export default Footer;