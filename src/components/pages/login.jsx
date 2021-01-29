import React from 'react'
import Axios from 'axios'

const authentication = e => {
  e.preventDefault()
  const form = e.target
  const data = {
    "email": form.email.value,
    "password": form.password.value
  }
  Axios.post("https://api-edteam.alejogs4.now.sh/login", data)
  .then(r => console.log(r))
  .catch(e => console.log(e))
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
      </div>
    </div>
  )
}

export default Login
