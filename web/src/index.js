import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './css/index.css';
import { App } from './App';
import { Homepage } from './components/Homepage';
import { GetStarted } from './components/GetStarted';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="" element={<App />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/getstarted" element={<GetStarted />} />
      <Route path="" element={<App />} />
    </Routes>
  </Router>


);


