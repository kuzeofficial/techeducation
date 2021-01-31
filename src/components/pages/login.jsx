import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

const authentication = e => {
  e.preventDefault()
  const form = e.target
  const data = {
    "email": form.email.value,
    "password": form.password.value
  }
  Axios.post("http://chuly-api.herokuapp.com/api/signin", data)
  .then(r => {
    localStorage.setItem('token', r.data.token)
    window.location = "/"
  })
  .catch(e => {
    alert("Login Error")
  })
}





const Login = () => {
  return (
    <div className="ed-grid">
      <div className="l-block"></div>
      <div className="m-to-center m-60 lg-30">
        <h1 className="center">Login</h1>
        <form onSubmit={authentication.bind()}>
          <div className='form__item'>
            <label htmlFor="email">
              Email:
              <input 
              required 
              type="email" 
              name="email" 
              id="email" 
              placeholder='Email 
              Address' 
              />
            </label>
          </div>
          <div className='form__item'>
            <label htmlFor="password">
              Password:
              <input 
              required 
              type="password" 
              name="password" 
              id="password" 
              placeholder='Password' 
              />
            </label>
          </div>
          <div className="form__item">
            <input type="submit" className="button full" value="Log in" />
          </div>
        </form>
        <div className="center">
          <p> You do not have an account? <Link to="/register">Create Account</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login
