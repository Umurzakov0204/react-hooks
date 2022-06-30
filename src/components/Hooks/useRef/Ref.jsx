import React from 'react'
import { useRef } from 'react'

function Ref() {

    const nameField = useRef(null);
    const send = () => {
        const inputElemnt = nameField.current;
        console.log("Name: " + inputElemnt.value);
    }

  return (
    <>
    <input type="text" ref={nameField} />
    <button onClick={send}>Send</button>
    </>
  )
}

export default Ref