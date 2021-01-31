import React from 'react'
import { NavLink } from 'react-router-dom'

const removeToken = () => {
  localStorage.removeItem('token')
  window.location = "/login"
}

const tokenPointer = {
  cursor: 'pointer',
};


const PrivateMenu = () => {
  return (
    <ul>
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/specialities">Specialities</NavLink></li>
      <li><NavLink to="/courses">Courses</NavLink></li>
      <li><NavLink to="/teachers">Teachers</NavLink></li>
      <li><span style={tokenPointer} onClick={() => removeToken()}>Log out</span></li>
    </ul>
  )
}

export default PrivateMenu
