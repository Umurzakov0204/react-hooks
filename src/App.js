import React, {useState} from "react";
import './App.css';
import Props from "./components/Props/Props";
import {Link} from "react-router-dom"

function App() {
    // const [number, setNumber] = useState(0);
    // // initial state => начальное состояние
    // // use state => состояние использования
    // // console.log(numberState);
    // // numberState -> array <{ const numberState: [number, Dispatch<SetStateAction<number>>] }>
    //
    // function increment() {
    //     setNumber((previous) => {
    //         return previous + 1
    //     });
    //     setNumber((previous) => {
    //         return previous + 1
    //     });
    //     // ^ две функции setNumber работают асинхронна "async" ^
    //     // setNumber(number + 1)
    // }
    //
    // function decriment() {
    //     setNumber(number - 1)
    // }

    return (
        <>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="props">Props</Link>
                    <Link to="effects">Effects</Link>
                    <Link to="state">State</Link>
                </nav>
            </header>
            {/*<div className="container">*/}
            {/*    <div className="btn-group">*/}
            {/*        <h1>Номер: {number}</h1>*/}
            {/*        <button onClick={increment} className="success">Создать</button>*/}
            {/*        <button onClick={decriment} className="danger">Удалить</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Props name="Thomas" age="20" />
        </>
    );
}

export default App;
