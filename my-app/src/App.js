import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Componants/HomePage'; // Import the Header component
import JobsFilter from "./Componants/Jobs/JobsFilter";
import Header from "./NavBar/Header";
import AllJobs from "./Componants/Jobs/AllJobs";
import ApplyForm from "./Componants/ApplyForm/ApplyForm";
import Company from "./Componants/ApplyForm/Company";


function App() {
  return (
    <Router>
      <div className="App">
      <Header/>
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/filterjob" element={<JobsFilter />} />
          <Route path="/alljobs" element={<AllJobs />} />
          <Route path="/apply/:jobId" element={<ApplyForm />} />
          <Route path="/company-jobs/:companyId" element={<Company />} />
          
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
