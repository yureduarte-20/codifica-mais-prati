import { useState } from "react";

export default function SimpleCounter() {
    const [count, setCount] = useState(0)
    const increment = () => setCount(state => state + 1);
    const decrement = () => setCount(state => state > 0 ? state - 1 : state);
    return (
        <div className="container">
            <h1>Contador Simples</h1>
            <h3>{count}</h3>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}