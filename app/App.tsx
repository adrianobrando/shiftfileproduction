import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Converter from './pages/Converter';
import Pro from './pages/Pro';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Converter />} />
        <Route path="/pro" element={<Pro />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;