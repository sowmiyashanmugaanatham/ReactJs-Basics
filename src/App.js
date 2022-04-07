
import React, { useReducer } from 'react'
import './App.css'
import  ComponentA from './Components/ComponentA.JS'
import  ComponentB from './Components/ComponentB.JS'
import  ComponentC from './Components/ComponentC.JS'

export const CountContext= React.createContext()

console.log("test")


const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
    return state+1
    case 'decrement':
    return state-1
    case 'reset':
        return initialState
        default:
            return state

    }
}



function App() {
  const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <CountContext.Provider value={{ countState: count, countDispatch}}>
    <div className='App'>
      Count -{count}
      <ComponentA />
      <ComponentB/>
      <ComponentC/>
    </div>
    </CountContext.Provider>
  )
}

export default App
