import React, {useEffect, useState} from "react";
import './Effects.css'
// import {createRoot} from "react-dom";

// const root = createRoot(
//     document.getElementById("app")
// )

function Effects() {

    // const [name, setName] = useState("Tom");
    //   const [name, setName] = useState("Tommi");
    //   const [age, setAge] = useState(54);
    //   const [name, setName] = useState("Tom");

    // useEffect(() => {
    //     document.title = `Privet ${name} ${age}`;
    //     console.log("useEffect");
    // },
        // []);  // эффект срабатывает только один раз - при самом первом рендеринге
        // [name]); // эффект срабатывает только при изменении name

    // useEffect(() => {
    //     document.title = `Privet ${name}`
    // })
    // меняет заголовок страницы

    // function changeName(event) {
    //     setName(event.target.value);
    // }

    // const changeName = (event) => setName(event.target.value);
    // const changeAge = (event) => setAge(event.target.value);

    return(
        <>
            {/*<div>*/}
            {/*    <h2>Name: {name}</h2>*/}
            {/*    <div>*/}
            {/*        <p>Name <input type="text" value={name} onChange={changeName}/></p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <h2>Name: {name}</h2>*/}
            {/*    <h2>Age: {age}</h2>*/}
            {/*    <div>*/}
            {/*        <p>Name <input type="text" onChange={changeName}/></p>*/}
            {/*        <p>Age <input type="number" onChange={changeAge}/></p>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div id="app"></div>
            <button id="unmountBtn">Unmount</button>
        </>
    );
}

export default Effects;
