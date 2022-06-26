import React, {useState} from "react";
import './State.css'

function State() {

    // const [name, setName] = useState("Thomas");
    // const [age, setAge] = useState(20);
    const [user, setUser] = useState({name: "Tom", age: 20});

    function handleNameChange(event) {
        // setName(event.target.value);
        // setUser({name: event.target.value, age: user.age});
        setUser({...user, name: event.target.value})
    }

    function handleAgeChange(event) {
        // setAge(event.target.value);
        // setUser({name: user.name, age: event.target.value});
        setUser({...user, age: event.target.age})
    }

    const [count, setCount] = useState(0);
    // const [count, setCount] = useState("Hello");

    return (
        <>
            <div className="data">
                {/*<p>Name:<b>{name}</b></p>*/}
                {/*<p>Age:<b>{age}</b></p>*/}
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
                <div>
                    {/*<p>Name: <input type="text" onChange={handleNameChange}/></p>*/}
                    {/*<p>Age: <input type="number" onChange={handleAgeChange}/></p>*/}
                    <p>Name: <input type="text" value={user.name} onChange={handleNameChange}/></p>
                    <p>Age: <input type="number" value={user.age} onChange={handleAgeChange}/></p>
                </div>
            </div>
            <h2>Count:{count}</h2>
            <button onClick={() => setCount(count - 1)}>Click -1</button>
            <button onClick={() => setCount(count + 1)}>Click +1</button>
            {/*<button onClick={() => setCount(count + "_____")}>Click -1</button>*/}
            {/*<button onClick={() => setCount(count + "World")}>Click +1</button>*/}
        </>
    );
}

export default State;

// just?
