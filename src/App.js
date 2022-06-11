import React, {useState} from "react";
import './App.css';

function App() {
    const [number, setNumber] = useState(0);
    // initial state => начальное состояние
    // use state => состояние использования
    // console.log(numberState);
    // numberState -> array <{ const numberState: [number, Dispatch<SetStateAction<number>>] }>

    function increment() {
        setNumber((previous) => {
            return  previous + 1
        });
        setNumber((previous) => {
            return  previous + 1
        });
        // ^ две функции setNumber работают асинхронна "async" ^
        // setNumber(number + 1)
    }

    function decriment() {
        setNumber(number - 1)
    }

  return (
    <div className="container">
      <div className="btn-group">
          <h1>Номер: {number}</h1>
        <button onClick={increment} className="success">Создать</button>
        <button onClick={decriment} className="danger">Удалить</button>
      </div>
    </div>
  );
}

export default App;
