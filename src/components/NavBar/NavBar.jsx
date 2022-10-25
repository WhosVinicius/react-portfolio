import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
    <div className='nav-container'>
        <div className='logo'>{'<VINICIUS G />'}</div>
        <div>
            <ul>
                <li>sobre mim</li>
                <li>projeto</li>
                <li>tecnologias</li>
                <li>contato</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar