import React, { useState } from 'react'
import './styles/Skills.css'

const frontData=['React','TypeScript','HTML','CSS','Design','Javascript'];
function Skills() {
  const [curr,setCurr]=useState(0);
  const viscount=5,len=frontData.length;

  const prevSlide=()=>{
    setCurr((prev)=>(prev-viscount+len)%len);
  }

  const nextSlide=()=>{
    setCurr((prev)=>(prev+viscount)%len);
  }

  return (
    <div className='section skills-section'>
      <h1>Skills</h1>

            <div className="skills-container">
              <div className="role-section">
                <div className="job-title">
                  <h2>
                    Frontend Developer
                  </h2>
                  </div>
                  
                    <div className="tag-cloud">
                       <button className="carousel-btn" onClick={prevSlide}>‹</button>
                  {[
                  ...frontData.slice(curr, curr + viscount),
                  ...(curr + viscount > frontData.length
                    ? frontData.slice(0, (curr + viscount) % frontData.length)
                    : [])
                ].map(tag => (
                  <div key={tag} className="tag">{tag}</div>
                ))}
                <button className="carousel-btn" onClick={nextSlide}>›</button>
              </div>
              </div>

              <div className="role-section">
                <div className="job-title">
                  <h2>
                    Backend Developer
                  </h2>
                  </div>
                    <div className="tag-cloud">
                {['NodeJS','Firebase',].map(tag => (
                  <div key={tag} className="tag">{tag}</div>
                ))}
              </div>
              </div>

              <div className="role-section">
                <div className="job-title">
                  <h2>
                    Mobile App Developer
                  </h2>
                  </div>
                    <div className="tag-cloud">
                {['React Native','Expo'].map(tag => (
                  <div key={tag} className="tag">{tag}</div>
                ))}
              </div>
              </div>
              
            </div>
            
          </div>
  )
}

export default Skills