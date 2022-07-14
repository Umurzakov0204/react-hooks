import React from 'react'
import Effects from './Effect/Effects'
import State from './State/State'
import Ref from './useRef/Ref'
import Effects2 from "./Effect/Effects2";

function Hooks() {
  return (
    <>
    <Effects />
      <Effects2 />
    <State />
    <Ref />
    </>
  )
}

export default Hooks