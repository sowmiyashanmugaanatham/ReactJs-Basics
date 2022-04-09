import React, { useState } from 'react'
import  { MemoizedChildTwo}  from './ChildTwo'


export const ParentTwo = () => {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('Charu')

    console.log('ParentTwo Render')
    return (
        <div>
            <button onClick={() => setCount((c) => c+1)}>count -{count}</button>
            <button onClick={() => setName('Codevolution')}>Change name</button>
            <MemoizedChildTwo name={name} />
        </div>
    )
}