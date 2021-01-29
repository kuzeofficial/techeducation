import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../../assets/images/logo.png"
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
            <nav className="main-menu">
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/specialities">Specialities</NavLink></li>
                <li><NavLink to="/courses">Courses</NavLink></li>
                <li><NavLink to="/teachers">Teachers</NavLink></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
  )
}

export default Header
