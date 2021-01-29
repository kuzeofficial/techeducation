import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom" 
// PAGES IMPORT 
import Home from "./pages/home"
import Specialities from "./pages/specialities"
import Speciality from "./pages/speciality"
import Courses from "./pages/courses"
import Course from "./pages/course"
import Teachers from "./pages/teachers"
import Workshop from "./pages/workshop"
import Login from "./pages/login"
import Register from "./pages/register"
import Page404 from "./pages/page404"
// ROUTER COMPONENT IMPORT 
import Protected from './routes/protected'
import Public from './routes/public'



const App = () => {
  return (
    <Router>
      <Switch>
        <Protected path="/" exact component={Home} />
        <Protected path="/specialities" exact component={Specialities} />
        <Protected path="/speciality/:id" component={Speciality} />
        <Protected path="/courses" exact component={Courses} />
        <Protected path="/course/:id"  component={Course} />
        <Protected path="/teachers" exact component={Teachers} />
        <Protected path="/class/:id"  component={Workshop} />
      
        <Public path="/login" exact component={Login} />
        <Public path="/register" exact component={Register} />

        <Route component={Page404}/>
      </Switch>
    </Router>
    )

}

export default App;
