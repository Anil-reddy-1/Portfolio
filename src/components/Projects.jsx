import React from 'react'
import './styles/Projects.css'
import data from '../data/data.js'
import todoImg from '../assets/todo.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

function Projects() { 
  useGSAP(()=>{
    const tl=gsap.timeline({
      scrollTrigger:{
      trigger:'.projects-section',
      start:'top 80%',
      end:'bottom bottom',
      scrub:true,
      id: 'projects-trigger',
      onComplete: () => {
          // Disable ScrollTrigger after completion to prevent reverse
          ScrollTrigger.getById('projects-trigger')?.kill();
        },
      
    }
    })
     data.forEach((_, index) => {
      let yvalue=0;
  const direction = (index+1) % 2 === 0 ? (index+1)%3==0?-100:0 : 100; // Alternate left/right
  if (direction==0){ 
     yvalue=100;
  }
  tl.fromTo(`.project-card:nth-child(${index + 1})`, {
    opacity: 0,
    x: direction,
    y:yvalue
  }, {
    opacity: 1,
    x: 0,
    y:0,
    
    ease: 'power2.out'
  });
});
  },[])

  return (
    <div className='section projects-section' id='projects'>
      <h1>Projects</h1>
            <div className="container projects-grid">
              
              {data.map((item,index)=>(
                <div key={item.id} className="wf-box project-card" >
                  <img src={todoImg} alt="Image " />
                  <h3 className='title'>{item.title} </h3>
                  <p className='discript'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quis?</p>
                </div>
              ))}
                
                
                
            </div>
    </div>
  )
}

export default Projects