import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Componants/HomePage'; // Import the Header component



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
      
          
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;