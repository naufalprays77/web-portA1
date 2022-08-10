import React from 'react';
import { Route, Routes } from 'react-router-dom';

import App from './App';

import './Style/style.css';

function Url() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
}

export default Url;
