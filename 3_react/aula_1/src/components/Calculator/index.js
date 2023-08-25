import { useEffect, useState } from "react";

export default function Calculator() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [numR, setNumR] = useState(0);

    function sumCalc() {
        setNumR(+num1 + +num2)
    }

    function subCalc() {
        setNumR(+num1 - +num2)
    }

    function mulCalc() {
        setNumR(+num1 * +num2)
    }

    function divCalc() {
        setNumR(+num1 / +num2)
    }

    var [soma, setSoma] = useState(0);
    useEffect(() => {
        setSoma(+num1 + +num2)
    }, [num1, num2])
    return (
        <div>
            <h1>Desafio: calculadora</h1>
            <div id='total'>
                <input type='number' class='input' onChange={(e) => setNum1(e.target.value)} />
                <div id='buttons'>
                    <button onClick={() => sumCalc()}>+</button>
                    <button onClick={() => subCalc()}>-</button>
                    <button onClick={() => mulCalc()}>*</button>
                    <button onClick={() => divCalc()}>/</button>
                </div>
                <input type='number' class='input' onChange={(e) => setNum2(e.target.value)} />

                <a> é {numR}</a>
                <p>Soma: {soma}</p>
            </div>
        </div>
    )
}