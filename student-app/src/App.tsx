import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, NavLink
} from "react-router-dom";

import Students from "./students"
import StudentInput from "./student_input"
import "./index.css"

const App = ():JSX.Element => {
  return (
    <Router>
      {/*Creating the Navigation Links*/}
      <nav>
        <ul>
          <li>
            <NavLink to='/'>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to='/students'>
              Students
            </NavLink>
          </li>

          <li>
            <NavLink to='/create-students'>
              Add Students
            </NavLink>
          </li>

        </ul>
      </nav>

      <Switch>
      {/*The content to go in the navigation*/}
        <Route path="/students">
          <section>
            <h1>System Students</h1>
            <Students/>
          </section>
        </Route>
        
        <Route path="/create-students">
          <section>
            <StudentInput/>
          </section>
        </Route>

        <Route path="/">
          <section>
            <h1>Home Information</h1>
          </section>
        </Route>

      </Switch>
    </Router>
  )
}

export default App