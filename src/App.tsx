import React, {useState} from 'react';
import './App.css';
import Counter from "./Components/Counter/Counter";


function App() {
    const [count,setCount] = useState(0);
    return (
        <div className="App">
            <ul>
                <Counter
                        count={count}/>
            </ul>


        </div>

    )


}

export default App;
