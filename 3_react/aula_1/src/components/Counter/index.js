import './style.css'
import { useState } from "react";

export default function Counter() {
    const [num, setNum] = useState(0);

    function sum() {
        setNum(num + 1)
    }

    function sub() {
        setNum(num - 1)
    }
    return (
        <div id='counter'>
            <button onClick={sum}> + </button>
            <p>{num}</p>
            <button onClick={sub}> - </button>
        </div>
    )
}