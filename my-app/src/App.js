import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Componants/HomePage'; // Import the Header component
import JobsFilter from "./Componants/Jobs/JobsFilter";
import Header from "./NavBar/Header";
import AllJobs from "./Componants/Jobs/AllJobs";



function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/filterjob" element={<JobsFilter />} />
          <Route path="/alljobs" element={<AllJobs />} />
          
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
