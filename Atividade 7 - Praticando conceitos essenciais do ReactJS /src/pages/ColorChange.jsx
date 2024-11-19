import { useCallback, useState } from "react";
import lodash from 'lodash';
export default function ColorChange()
{
    const genRandomColor = useCallback(() => {
        const max = 0xFFFFFF;
        const min = 0x000000;
        return (lodash.random(min, max, false) ).toString(16)
    }, [])
    const [color, setColor] = useState(genRandomColor())
    const newColor = () => setColor(genRandomColor()) 
    return (
        <div className="container" style={{ backgroundColor: `#${color}`, padding: 20, borderRadius:8 }}>
            <div>
                <p>Color atual #{color}</p>
            </div>
            <button onClick={newColor}>Gerar uma nova cor</button>
        </div>
    );

}