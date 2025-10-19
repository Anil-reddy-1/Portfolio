import React, { useState } from 'react'
import './styles/Skills.css'
import logos from "./logo.js"



const frontData=['React','TypeScript','HTML','CSS','Javascript'];
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
      <h1 className='Tittle'>Skills</h1>
            <div className="skills-container">
              <div className="role-section">
                <div className="job-title">
                    Frontend Developer
                  </div>
                  <div className="tag-cloud">    
                  
                  <div  className="tag">
                    <img src={logos.React} alt="React" className='tag-img' />
                  </div>
                  <div  className="tag">
                    <img src={logos.JavaScript} alt='Javascript' className='tag-img' />
                  </div>
                  <div  className="tag">
                    <img src={logos.HTML} alt='HTML' className='tag-img' />
                  </div>
                  <div  className="tag">
                    <img src={logos.CSS} alt='CSS' className='tag-img' />
                  </div> 
                          
              </div>
              </div>
              <div className="role-section">
                <div className="job-title">                 
                    Backend Developer                  
                  </div>
                    <div className="tag-cloud">
                
                  <div  className="tag">
                    <img src={logos.NodeJS} alt='Node js' className='tag-img' />
                  </div>
                  <div  className="tag">
                    <img src={logos.Firebase} alt='FireBase' className='tag-img' />
                  </div>
             
              </div>
              </div>

              <div className="role-section">
                <div className="job-title">
                  
                    Mobile App Developer
                  
                  </div>
                    <div className="tag-cloud">
                
                  <div  className="tag">
                    <img src={logos.ReactNative} alt='React Native' className='tag-img' />
                  </div>
                  <div  className="tag">
                    <img src={logos.Expo} alt='Expo' className='tag-img' />
                  </div>
                
              </div>
              </div>
              
            </div>
            
          </div>
  )
}

export default Skills