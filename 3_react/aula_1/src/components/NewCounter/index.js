import { useState, useContext } from "react"
import { CounterContext } from "../../context/counter";

export default function NewCounter({ children }) {
    const { handleDown, handleUp } = useContext(CounterContext)
    return (
        <>
            <button onClick={handleDown}>Clique aqui</button>
            { children }
            <button onClick={handleUp}>Clique aqui</button>
        </>
    )
}