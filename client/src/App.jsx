import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Register' element={<Signup/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
