import './App.css';
import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import News from './Component/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default function App () {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/business" element={<News key="business" category="business" />} />
            <Route path="/entertainment" element={<News key="entertainment" category="entertainment" />} />
            <Route path="/general" element={<News key="general" category="general" />} />
            <Route path="/health" element={<News key="health" category="health" />} />
            <Route path="/science" element={<News key="science" category="science" />} />
            <Route path="/sports" element={<News key="sports" category="sports" />} />
            <Route path="/technology" element={<News key="technology" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
}
