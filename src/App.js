
import React from 'react'
import './App.css'
import  {ChildA} from './Components/Immutable State/Context/ContextChildren'
import { ContextParent } from './Components/Immutable State/Context/ContextParent'


function App() {
  return (
    <div className='App'>
       <ContextParent>
         <ChildA />
       </ContextParent>
    </div>
  )
}
export default App
