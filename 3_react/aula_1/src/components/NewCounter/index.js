import { useState, useContext } from "react"
import { CounterContext } from "../../context/counter";

export default function NewCounter() {
    const { handleDown, handleUp } = useContext(CounterContext)
    return (
        <>
            <button onClick={handleDown}>Clique aqui</button>
            <button onClick={handleUp}>Clique aqui</button>
        </>
    )
}