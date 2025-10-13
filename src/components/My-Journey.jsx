import React from 'react'
import './styles/My-journey.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import Data from '../data/data.js';

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

  const {journeySteps}=Data;
 console.log(journeySteps);
  return (
    <div className='section journey-section'>
      <h1>My Learning Journey</h1>
      <div className='block' >
        {journeySteps.map((item,index)=>
          ( <div className="step" key={index}><div  className='text'>{item}</div></div>)
        )}
     </div>
    </div>
  )
}

export default MyJourney