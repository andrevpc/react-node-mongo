import { useState } from "react"

export default function ConditionalRender() {
    var [num, setNum] = useState(0);

    function handleFive() {
        setNum(5);
    }

    function handleZero() {
        setNum(0);
    }

    const RenderButtonZero = () => {
        if (num === 0)
            return <button disabled onClick={handleZero}>Clique aqui</button>

        return <button onClick={handleZero}>Clique aqui</button>
    }

    const RenderButtonFive = () => {
        if (num === 5)
            return <button disabled onClick={handleFive}>Clique aqui</button>

        return <button onClick={handleFive}>Clique aqui</button>
    }

    var [pessoas] = useState([
        {
            id: 0,
            name: 'Alisson'
        },
        {
            id: 1,
            name: 'João'
        },
        {
            id: 2,
            name: "Queila"
        }
    ]);

    const RenderPessoas = () => {
        return pessoas.map(pessoa => {
            return (
                <tr key={pessoa.id}>
                    <td>{pessoa.id}</td>
                    <td>{pessoa.name}</td>
                </tr>
            )
        })
    }
    return (
        <>
            {/* {num === 0 ? <></> : <button onClick={handleZero}>Clique aqui</button>}
            {num}
            {num === 5 ? <></> : <button onClick={handleFive}>Clique aqui</button>} */}

            <RenderButtonZero />
            {num}
            <RenderButtonFive />

            <table>
                <thead>
                <tr>
                    <th>id</th>
                    <th>Nome</th>
                </tr>
                </thead>
                <tbody>
                    <RenderPessoas />
                </tbody>
            </table>
        </>
    )
}