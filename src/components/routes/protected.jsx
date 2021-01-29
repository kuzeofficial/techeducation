import React from 'react'
import { Redirect, Route } from 'react-router-dom'


const Protected = ({ component: Component, ...rest }) => {
  
  const userLogged = true

  if ( !userLogged ) {
    return < Redirect to="/login/"/>
  }
  return <Route {...rest} render={Component}/>
}

export default Protected
