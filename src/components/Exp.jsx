import React from 'react'
import './styles/Exp.css'
import certificate from '../assets/certificate.png'

function Exp() {
  return (
    <div className='section exp-section'>
      <h1>Experience</h1>
        <div className='exp-container'>

          <div className="card">
            <img src={certificate} alt="certificate" className='certificate'  />
            <div className="exp-title">
              <h3>ElevateLabs Frontend Intern</h3>
              <p>gained hands on experience on Lorem ipsum dolor sit.</p>
            </div>
          </div>

          <div className="card">
            <img src={certificate} alt="certificate" className='certificate'  />
            <div className="exp-title">
              <h3>ElevateLabs Frontend Intern</h3>
              <p>gained hands on experience on Lorem ipsum dolor sit.</p>
            </div>
          </div>

          <div className="card">
            <img src={certificate} alt="certificate" className='certificate'  />
            <div className="exp-title">
              <h3>ElevateLabs Frontend Intern</h3>
              <p>gained hands on experience on Lorem ipsum dolor sit.</p>
            </div>
          </div>

          <div className="card">
            <img src={certificate} alt="certificate" className='certificate'  />
            <div className="exp-title">
              <h3>ElevateLabs Frontend Intern</h3>
              <p>gained hands on experience on Lorem ipsum dolor sit.</p>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Exp