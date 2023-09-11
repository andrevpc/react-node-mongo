import useCounter from '../../hooks/useCounter';

function UseCounter() {
    const { count, increment, decrement } = useCounter(0, 5)

    return (
        <div>
            <button onClick={increment}>+</button>
            <p>Count: {count}</p>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default UseCounter;