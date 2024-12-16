import { useState } from 'react'

import './App.css'
import Parent from './Parent'
import { Route,Routes } from 'react-router-dom'
import Child from './Child'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Parent/>}/>
      <Route path='/view' element={<Child/>}/>
    </Routes>
   
    </>
  )
}

export default App
