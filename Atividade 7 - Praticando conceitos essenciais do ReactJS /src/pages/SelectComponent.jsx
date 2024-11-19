import { Link } from 'react-router-dom'
import { routes } from '../route/routes';

export default function SelectComponent()
{
    return (
        <div className='container'>
            <h1>Selecione um componente</h1>
            <ul>
                <li> <Link to={routes.SIMPLE_COUNTER.path} >Contador</Link> </li>
                <li> <Link to={routes.COLOR_CHANGE.path} >Mudança de Cor</Link> </li>
                <li> <Link to={routes.TODO.path} >Todo APP</Link> </li>
                <li> <Link to={routes.TIMER.path} >Timer</Link> </li>
            </ul>
        </div>
    );
}