import React, { useState, useEffect } from 'react';
import "./App.css";
import resumeData from "./assets/resume_data.json";
import Skills from "./components/Skills/Skills.js";
import JobHistory from "./components/JobHistory/JobHistory.js";
import Profile from "./components/Profile/Profile.js";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails.js";
import Education from './components/Education/Education.js';
import Training from './components/Training/Training.js';
import References from './components/References/References.js';
import ThemeToggle from './components/ThemeToggle/ThemeToggle.js';
import logo from './assets/images/logo.svg';

const App = () => {

  return (
    <div className="main-container pb-4">
      <header>
        <ThemeToggle />
      </header>
      <div className="resume-container">
        <div className="top-section">
          <div className="left-column-top">
            <Profile profile={resumeData.profile} />
          </div>
          <div className="right-column-top">
            <PersonalDetails profile={resumeData.profile} />
          </div>
        </div>

        <div className="section-separator" />

        {/* Bottom portion */}
        <div className="bottom-section">
          <div className="left-column-bottom">
            <JobHistory jobHistory={resumeData.jobHistory} />
          </div>
          <div className="right-column-bottom">
            <Skills skills={resumeData.skills} />
          </div>
        </div>

        <div className="section-separator" />
        <div className="bottom-section">
              <div className="bottom-left-column">
                  <Education educationData={resumeData.education} />
                  <Training trainingData={resumeData.training} />
                  <References />
              </div>    
          </div>
          <div class="flex justify-center items-center">
              <img src={logo} alt="Elemental Symmetry, LLC" className="mt-3 w-60" />
          </div>
      </div>
    </div>
  );
};

export default App;
