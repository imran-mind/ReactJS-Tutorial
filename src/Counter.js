import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(5);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }
    // Mutable
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>Counter</button>
        </div>
    )
}

export default Counter