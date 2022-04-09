import React, { useState } from 'react'
import  { MemoizedChildFive} from './ChildFive'


export const ParentFour = () => {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('Charu')

    const person = {
        fname:'Bruce',
        lname:'Wayne'
    }
    const handleClick =() =>{}
    console.log('ParentFour Render') 
    return (
        <div>
            <button onClick={() => setCount((c) => c+1)}>count -{count}</button>
            <button onClick={() => setName('Codevolution')}>Change name</button>
            <MemoizedChildFive name={name} handleClick={handleClick}/>
           
        </div>
    )
}