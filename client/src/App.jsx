import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './dashboard'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Register' element={<Signup/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Dashboard' element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
