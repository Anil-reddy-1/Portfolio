import React, { useEffect } from 'react'
import './styles/Projects.css'
import data from '../data/data.js'
import todoImg from '../assets/todo.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

function Projects() { 

const {projectsData}=data;

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
     projectsData.forEach((_, index) => {
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
 

  useEffect(() => {
    const cards = document.querySelectorAll('.project-card'); // Fixed: Added dot
    
    const handleCardClick = (e) => {
      const cardIndex = Array.from(cards).indexOf(e.currentTarget);
      const projectUrl = projectsData[cardIndex]?.github || 'https://github.com/Anil-reddy-1';
      window.open(projectUrl, '_blank');
    };
    cards.forEach((card) => {
      card.addEventListener('click', handleCardClick);
    });

    // Cleanup 
    return () => {
      cards.forEach((card) => {
        card.removeEventListener('click', handleCardClick);
      });
    };
  }, [projectsData]);
  

  return (
    <div className='section projects-section' id='projects'>
      <h1 className='Tittle'>Projects</h1>
            <div className="container projects-grid">
              
              {projectsData.map((item,index)=>(
                <div key={item.id}  className="wf-box project-card" >
                  <img src={todoImg} alt="Image " />
                  <h3 className='title'>{item.title} </h3>
                  <p className='discript'>{item.description}</p>
                </div>
              ))}
   
            </div>
    </div>
  )
}

export default Projects