import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
    <div className='nav-container'>
        <div className='logo'>{'<VINICIUS G />'}</div>
        <div>
            <ul>
                <li>home</li>
                <li>about</li>
                <li>projects</li>
                <li>skills</li>
                <li>contact</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar