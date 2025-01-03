import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {

  return (
    <>
      <div style={{height:"100dvh"}} className='conatiner d-flex flex-column justify-content-center align-items-center bg-dark'>
          <div style={{fontSize:"5rem"}} className='fw-semibold text-light'>Counter App</div>
          <Counter/>
      </div>
      
    </>
  )
}

export default App
