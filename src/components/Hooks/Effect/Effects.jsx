import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './Effects.css'

function Effects() {

     const [count, setCount] = useState(0);

     useEffect(() => {
        document.title = `You clicked ${count} time`
     })

    return(
        <>
        <h2>Count: {count}</h2>
        <button
        onClick={() => setCount(count + 1)}>+1</button>
        </>
    );
}

export default Effects;
