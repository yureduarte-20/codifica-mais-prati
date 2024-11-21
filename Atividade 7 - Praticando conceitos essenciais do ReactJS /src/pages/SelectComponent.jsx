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
                <li> <Link to={routes.LIST_NAME.path} >Listagem de Nomes</Link> </li>
                <li> <Link to={routes.REGISTER_FORM.path} >Formulário de Registro</Link> </li>
                <li> <Link to={routes.POST.path} > Aplicação de Requisição de Dados Simples</Link> </li>
                <li> <Link to={routes.GALERY.path} >Galeria de Imagens com Visualização Detalhada</Link> </li>
                <li> <Link to={routes.CUSTOM_TIMER.path} >Timer com Intervalo</Link> </li>
                <li> <Link to={routes.TABS.path} >Componentes com Tabs Navegáveis</Link> </li>
            </ul>
        </div>
    );
}