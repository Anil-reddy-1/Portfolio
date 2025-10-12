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
    <div className='section skills-section' id='skills'>
      <h1>Skills</h1>
            <div className="skills-container">
              <div className="role-section">
                <div className="job-title">
                  
                    Frontend Developer
                  
                  </div>
                  
                    <div className="tag-cloud">
                       
                  {frontData.map(tag => (
                  <div key={tag} className="tag">
                    <img src={tag} alt={tag} className='tag-img' />
                  </div>
                ))}
                
              </div>
              </div>

              <div className="role-section">
                <div className="job-title">
                  
                    Backend Developer
                  
                  </div>
                    <div className="tag-cloud">
                {['NodeJS','Firebase',].map(tag => (
                  <div key={tag} className="tag">
                    <img src={tag} alt={tag} className='tag-img' />
                  </div>
                ))}
              </div>
              </div>

              <div className="role-section">
                <div className="job-title">
                  
                    Mobile App Developer
                  
                  </div>
                    <div className="tag-cloud">
                {['React Native','Expo'].map(tag => (
                  <div key={tag} className="tag">
                    <img src={tag} alt={tag} className='tag-img' />
                  </div>
                ))}
              </div>
              </div>
              
            </div>
            
          </div>
  )
}

export default Skills