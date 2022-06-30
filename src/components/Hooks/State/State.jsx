import React, { useState } from "react";
import './State.css'

function State() {

    const [count, setCount] = useState(0);

    const [age, setAge] = useState(20);
    const [name, setName] = useState("Thomas")

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleAgeChange(event) {
        setAge(event.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          console.log('do validate')
        }
      }
    

    return (
        <>
        <input type="text" onKeyDown={handleKeyDown} />
            <div>
                <h3>Count: {count}</h3>
                <button onClick={() => setCount(count + 1)}>Incriment</button>
                <button onClick={() => setCount(count - 1)}>Dicrement</button>
            </div>
            <div>
                <h3>Name: {name}</h3>
                <h3>Age: {age}</h3>
                <div>
                    <p>Name: <input type="text" onChange={handleNameChange}/></p>
                    <p>Name: <input type="number" onChange={handleAgeChange}/></p>
                </div>
            </div>
        </>
    );
}

export default State;

// just?