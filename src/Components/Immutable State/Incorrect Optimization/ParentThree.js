import React, { useState } from 'react'
import  { MemoizedChildThree}  from './ChildThree'


export const ParentThree = () => {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('Charu')

    console.log('ParentThree Render') 
    return (
        <div>
            <button onClick={() => setCount((c) => c+1)}>count -{count}</button>
            <button onClick={() => setName('Codevolution')}>Change name</button>
            <MemoizedChildThree name={name}>
              <strong>Hello</strong>
                </MemoizedChildThree>
        </div>
    )
}