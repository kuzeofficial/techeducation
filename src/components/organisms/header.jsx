import React, {createRef} from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../../assets/images/logo.png"

const menu = createRef()
const toggleMenu = () => menu.current.classList.toggle('show')
const removeToken = () => {
  localStorage.removeItem('token')
  window.location = "/login"
}


const tokenPointer = {
  cursor: 'pointer',
};

const Header = () => {
  return (
      <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
          <div class="s-cols-4 lg-cols-1 s-cross-center">
            <NavLink to="/">
              <img 
                src={Logo} 
                alt="TEducationLogo" 
                className="main-logo"
                />
            </NavLink>
          </div>
          <div className="s-cols-1 lg-cols-3 s-cross-center s-main-end">
            <nav className="main-menu" ref={menu}>
              <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/specialities">Specialities</NavLink></li>
                <li><NavLink to="/courses">Courses</NavLink></li>
                <li><NavLink to="/teachers">Teachers</NavLink></li>
                <li><span style={tokenPointer} onClick={() => removeToken()}>Log out</span></li>
              </ul>
            </nav>
            <div className="main-menu-toggle to-l" onClick={() => toggleMenu()}>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header
