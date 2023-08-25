import { useRef, useState } from "react";

export default function Inputs() {
    var [name, setName] = useState();
    var [text, setText] = useState('');

    const refInp = useRef(null)
    function handleName() {
        if (name.length < 3)
            refInp.current.focus()
    }

    return (
        <div>
            <h1>Var alterada automaticamente e printa no enviar</h1>
            <input onChange={(e) => setText(e.target.value)} />
            <button onClick={() => console.log(text)}>Enviar</button>

            <h1>Foco (não sai até escrever 3 casas)</h1>
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

        </div>
    )
}