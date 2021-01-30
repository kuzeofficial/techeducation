import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

const registration = e => {
  e.preventDefault()
  const form = e.target

  const data = {
    "email": form.email.value,
    "displayName": form.fullname.value,
    "password": form.password.value
  }

  Axios.post("http://chuly-api.herokuapp.com/api/signup", data)
    .then(() => {
      alert("Usuario creado")
      window.location = "/login"
    })
    .catch(() => alert("Error al crear el usuario"))
}

const Register = () => {
  return (
    <div className="ed-grid">
      <div className="l-block"></div>
      <div className="m-to-center m-60 lg-30">
        <h1>Account Create</h1>
        <form onSubmit={registration.bind()}>
          <div className="form__item">
            <label htmlFor="fullname">
              Full Name
              <input type="text" name="fullname" id="fullname" placeholder="Type your complete name" />
            </label>
          </div>
          <div className="form__item">
            <label htmlFor="email">
              Email 
              <input type="text" name="email" id="email" placeholder="Email Address" />
            </label>
          </div>
          <div className="form__item">
            <label htmlFor="password">
              Password
              <input type="password" name="password" id="password" placeholder="Password" />
            </label>
          </div>
          <div className="form__item">
            <input type="submit" className="button full" value="Sign Up" />
          </div>
        </form>
        <div className="center">
          <p> You already have a user account? <Link to="/login">Log in</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register
