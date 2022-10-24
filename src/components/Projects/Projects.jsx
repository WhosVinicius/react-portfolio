import React from 'react'
import './Projects.css'
import { projects } from './projetos'

function Projects() {
  return (
    <div className='projects-container'>
      <div className="icone1">
        {'< />'}
      </div>
      <div className='card-container'>
        {projects.map((projeto)=>(
        <a 
        href={projeto.repo}
        key={projeto.titulo}
        target="_blank" rel='noopener noreferrer'
        >
        <div className="card">
          <img src= {projeto.img} alt="" />
          <p>{projeto.titulo}</p>
          <div>{projeto.desc}</div>
          <div>{projeto.ref}</div>
        </div>  
        </a>
        ))}
      </div>
    </div>
  )
}

export default Projects