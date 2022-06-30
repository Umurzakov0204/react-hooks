import React from "react";
import './App.css';
import Props from "./components/Props/Props";
import Hooks from "./components/Hooks/Hooks";

function App() {

    return (
        <>
            {/* <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="props">Props</Link>
                    <Link to="effects">Effects</Link>
                    <Link to="state">State</Link>
                </nav>
            </header> */}
            <Props name="Thomas" age="20" />
            <Hooks />
        </>
    );
}

export default App;
