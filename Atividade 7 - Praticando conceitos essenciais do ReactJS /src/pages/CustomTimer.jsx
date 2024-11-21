import { useEffect, useState } from "react";

export default function CustomTimer() {
    const [initialValue, setInitialValue] = useState(60)
    const [second, setSecond] = useState(60);
    const [isPaused, pause] = useState(true);
    const handleTick = () => {
        if (!isPaused)
            setSecond(state => state > 0 ? state - 1 : state)
    }
    const restart = () => {
        setSecond(initialValue)
        pause(false)
    }
    // Ao iniciar o componente execute handleTick e manipula com base no estado atual do componente, 
    // e retirar o temporizador quando o componente for demontado
    useEffect(() => {
        const i = setInterval(() => { handleTick() }, 1000);
        return () => clearInterval(i)
    }, [isPaused, second])

    return (
        <div className="container">
            <h1>Contagem {second}s</h1>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Secundos</span>
                <input type="number" className="form-control" 
                placeholder="Valor inicial" 
                value={initialValue}
                min={0}
                onChange={e => setInitialValue(parseInt(e.target.value))}
                aria-label="Valor inicial" aria-describedby="basic-addon1" />
            </div>
            <button className="btn btn-primary" onClick={() => pause(state => !state)}>Pausar/Continuar</button>
            <button className="btn btn-primary" onClick={() => restart()}>Reiniciar</button>
        </div>
    );
}