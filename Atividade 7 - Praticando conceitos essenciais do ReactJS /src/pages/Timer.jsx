import { useEffect, useState } from "react";

export default function Timer() {
    const [second, setSecond] = useState(60);
    const [isPaused, pause] = useState(false);
    const handleTick = () => {
        if(!isPaused)
            setSecond(state => state > 0 ? state - 1 : state)
    }
    useEffect(() => {
        const i = setInterval(() => { handleTick() }, 1000);
        return () => clearInterval(i)
    }, [isPaused, second])
    return (
        <div className="container">
            <h2>{second} segundos</h2>
            <button onClick={() => pause(state => !state)}>Pausar/Continuar</button>
            <button  onClick={() => setSecond(60)}>Reiniciar</button>
        </div>
    );
}