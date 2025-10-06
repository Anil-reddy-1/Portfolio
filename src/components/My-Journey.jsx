import React from 'react'
import './styles/My-journey.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

function MyJourney() {
  useGSAP(()=>{
    const section =gsap.utils.toArray('.step');
    const container = document.querySelector('.block')
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.journey-section',
        start:'top 70%',
        end:'bottom bottom',
        scrub:true,
        
        }
    })

    


    section.forEach((step,index)=>{
      let xValue = 0;
      let yValue = 0;
    if ((index + 1) % 3 === 0) {
      yValue = 100; 
    } else {
      xValue = (index % 2 === 0) ? 100 : -100; 
    }
      tl.fromTo(step,
      { x: xValue,
        y: yValue,
        opacity: 0
       },
      { 
        x: 0, 
        y: 0, 
        opacity: 1, 
        ease: 'power1.in',
      }); 
    })
  },[])


  return (
    <div className='section journey-section'>
      <h1>My Learning Journey</h1>
      <div className='block' >
        <div className="step"><div  className='text'>Started with fundamentals of C programing language</div></div>
        <div className="step"> <div className='text'>Learned HTML,CSS </div></div>
        <div className="step"> <div className='text'>Javascript</div></div>
        <div className="step"><div className='text'>built functonal static web pages  </div></div>
        <div className="step"> <div  className='text'>learned OOP via java</div></div>
        <div className="step"> <div  className='text'>react </div></div>
        <div className="step"> <div  className='text'>React Native&expo and built basic api integrated app</div></div>
        <div className="step"> <div  className='text'>Learning backend parallel with DSA</div></div>
      </div>
    </div>
  )
}

export default MyJourney