import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Layout from './Pages/Layout'
import Pending from './Pages/Pending'
import Completed from './Pages/Completed'
import Createtask from './Pages/Createtask'

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path='/' element = {<LandingPage />} >
            <Route path='signup' element = {<Signup />} />
            <Route path='login' element = {<Login />} />
          </Route>
          <Route path='/dashboard' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='createTask' element={<Createtask />}/>
            <Route path='pending' element={<Pending />}/>
            <Route path='completed' element={<Completed />}/>
          </Route>
      </Routes>
    </Router>
  )
}

export default App