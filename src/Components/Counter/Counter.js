import React, { useEffect, useState } from 'react'

const Counter = () => {
const [count, setCount] = useState(0);
const increment = () => {
    setCount(count=>count+1);
    
}
const decrement = () => {
    if(count>0)
    setCount(count-1);
    
}
useEffect(() => {
    let memory=setInterval(() => {
        console.log("ComponentDidMount()")
        increment()
       
    }, 1000);
    return () => {
        clearInterval(memory)
    }
}, [])
console.log("render()")
    return (
        <div>
            <button onClick={increment}>+</button>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter
