import React, {useState} from "react";

function State() {

    // const [count, setCount] = useState(0);
    const [count, setCount] = useState("Hello");

    return(
        <>
            <h2>Count:{count}</h2>
            {/*<button onClick={() => setCount(count -1)}>Click -1</button>*/}
            {/*<button onClick={() => setCount(count +1)}>Click +1</button>*/}

            <button onClick={() => setCount(count + "_____")}>Click -1</button>
            <button onClick={() => setCount(count + "World")}>Click +1</button>
        </>
    );
}

export default State;

// just?
