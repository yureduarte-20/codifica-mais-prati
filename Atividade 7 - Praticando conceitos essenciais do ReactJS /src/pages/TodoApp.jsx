import {  useState } from "react";

export default function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const addTodo = (title, description) => setTodos(state => ([...state, { title, description, id: Date.now(), complete: false }]));
    const removeTodo = (id) => setTodos(state => state.filter(todo => todo.id != id));
    const completeTodo = (id) => setTodos(state => {
        return state.map(todo => todo.id == id ? { ...todo, complete: true } : todo);
    })
    const [filter, setFilter] = useState(false)
    
    const filtredTodo = todos.filter(todo => filter ? !todo.complete : true)
    return (
        <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <div style={{ marginBottom: 10, display: 'flex', flexDirection: 'column' }}>
                        <label>Titulo</label>
                        <input onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div style={{ marginBottom: 10, display: 'flex', flexDirection: 'column' }}>
                        <label>Descrição</label>
                        <input onChange={e => setDescription(e.target.value)} />
                    </div>
                </div>
                <div>
                    <div>
                        <label>Apenas Pendentes</label>
                        <input type="checkbox" onChange={e => setFilter(e.target.checked)} />
                    </div>
                    <button onClick={() => addTodo(title, description)}>Adiconar Todo</button>
                    
                </div>
            </div>
            <ul>
                {filtredTodo.map(todo => <li key={todo.id}>
                    <div style={{ display: 'flex', marginBottom: 20 }}>
                        <div>
                        {todo.complete &&<strong>COMPLETO</strong>}
                            <p>{todo.title}</p>
                            <small>{todo.description}</small>
                        </div>
                        <div >
                            <button onClick={() => removeTodo(todo.id)}>Remover</button>
                            {!todo.complete && <button onClick={() => completeTodo(todo.id)}>Completar</button>}
                        </div>
                    </div>
                </li>)}
            </ul>
        </div>
    );
}