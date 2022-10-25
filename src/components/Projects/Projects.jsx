import React from 'react'
import './Projects.css'
import { projects } from './projetos'

function Projects() {
  return (
    <div className='projects-container'>
      <div className="icone1">
        <h4>
        {'< Projetos feitos />'}
        </h4>
      </div>
      <div className='card-container'>
        {projects.map((projeto)=>(
      <div className="card">
        <a 
        href={projeto.repo}
        key={projeto.titulo}
        target="_blank" rel='noopener noreferrer'
        >
        <img src= {projeto.img} alt="" />
        <div className="items-cont">
          <h2>{projeto.titulo}</h2>
          <div>{projeto.desc}</div>
          <div>Referencia:<br/>{projeto.ref}</div>
        </div>  
        </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects