
import React, { useReducer } from 'react'
import './App.css'
//import ChildOne from './Components/Immutable State/Optimization/ChildOne'
import GrandParent from './Components/Immutable State/Optimization/GrandParent'
//import { ParentOne } from './Components/Immutable State/Optimization/ParentOne'
function App() {
  return (
    <div className='App'>
       <GrandParent />
    </div>
  )
}
export default App
