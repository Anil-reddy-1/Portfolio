import React from 'react'
import './styles/Projects.css'
import data from '../data/data.js'
import todoImg from '../assets/todo.png'

function Projects() {

  return (
    <div className='section projects-section'>
      <h1>Projects</h1>
            <div className="grid projects-grid">
              {data.map((item) => (
                <div key={item.id} className="wf-box project-card">
                  <img src={todoImg} alt="Image " />
                  <h3 className='title'>{item.title}</h3>
                  <p className='discript'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quis?</p>
                </div>
              ))}
            </div>
    </div>
  )
}

export default Projects