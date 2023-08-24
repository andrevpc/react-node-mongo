import './style.css'
import { useEffect, useRef, useState } from "react";

export default function Counter() {
    const [num, setNum] = useState(0);
    var [text, setText] = useState('');

    function sum() {
        setNum(num + 1)
    }

    function sub() {
        setNum(num - 1)
    }

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

    var [name, setName] = useState();
    const refInp = useRef(null)
    function handleName() {
        if (name.length < 3)
            refInp.current.focus()
    }

    const [flag, setFlag] = useState(false)
    useEffect(() => {
        const interval = setInterval(() => {
            setFlag(true)
            document.title = 1 + + document.title
        }, 5000); 

        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        document.title = 0
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setFlag(false)
        }, 3000)
    }, [flag])
    

    return (
        <div id='counter'>
            <button onClick={sum}> + </button>
            <p>{num}</p>
            <button onClick={sub}> - </button>

            <hr />

            <label>Preencha aqui</label>
            <input onChange={(e) => setText(e.target.value)} />
            <button onClick={() => console.log(text)}>Enviar</button>

            <hr />

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

                <a>= {numR}</a>
                <p>Soma: {soma}</p>
            </div>

            <hr />

            <form>
                <input
                    ref={refInp}
                    onBlur={handleName}
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </form>

            <hr />

            {flag &&
                <h4>Alerta</h4>
            }
        </div>
    )
}