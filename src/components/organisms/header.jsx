import React, {createRef} from 'react'
import Logo from "../../assets/images/logo.png"
import PrivateMenu from '../molecules/privatemenu'
import PublicMenu from '../molecules/publicmenu'
import { NavLink } from 'react-router-dom'

const menu = createRef()
const toggleMenu = () => menu.current.classList.toggle('show')


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
              {
                localStorage.getItem('token') ? 
                <PrivateMenu/> :
                <PublicMenu/>
              }
            </nav>
            <div className="main-menu-toggle to-l" onClick={() => toggleMenu()}>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header
