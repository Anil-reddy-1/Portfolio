import React from 'react'
import './styles/Exp.css'
import certificate from '../assets/certificate.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap' 
function Exp() {
useGSAP(()=>{
  const tl= gsap.timeline({
    scrollTrigger:{
      trigger:'.exp-section',
      start:'top 80%',
      end:'bottom bottom',
      scrub:true,
    },
  })
  tl.fromTo('.card',{
    opacity:0,
    y:100,
    
  },{
    opacity:1,
    y:0,
    stagger:{
      from:'center',
      grid:[2,1],
      amount:0.2,
    },
    
    ease:"back.out(1.7)"
  }
)

tl.call(()=>{
  document.querySelectorAll('.card').forEach((card)=>{

    card.addEventListener("mouseenter",()=>{
      gsap.to(card,{
        scale:1.05,
         boxShadow: '0 12px 24px rgba(59, 157, 249, 0.479)',
         duration: 0.3,
         ease: 'power2.out'
      })
    })

    card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale:1,
            boxShadow: '5px 8px 20px rgba(59,157,249,0.10)',
            duration: 0.3,
            ease: 'power2.out'
          })
        })
  })
})
},[])

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