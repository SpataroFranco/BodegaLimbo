import { useState } from "react";
import "./s.css";

export default function ItemQuantitySelector({ initial, onAdd }) {
    const [count, setCount] = useState(initial);
    function increment() {
        setCount(count + 1)
    };
    function decrement() {
        setCount(count - 1)
    };
    return (
        <div>
            <div className="itemCount">
                <button className="restButton" onClick={() => decrement()} disabled={count === initial} >-</button>
                <h3 className="number">{count}</h3>
                <button className="addButton" onClick={() => increment()} >+</button>
            </div>
            <div className="itemCountButton">
                <button onClick={() => onAdd(count)}>Comprar</button>   
            </div>
        </div>
    );
};