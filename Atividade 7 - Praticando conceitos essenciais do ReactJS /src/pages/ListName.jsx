import { useState } from "react"

export default function ListName() {
    const [names, setNames] = useState([])
    const [search, setSearch] = useState("")
    function addName(name) {
        setNames(state => [...state, name])
        setSearch('')
    }
    const namesFiltred = search ? names.filter(n => n.toLowerCase().includes(search.toLowerCase())) : names;
    return (
        <div className="container">
            <div>
                <div style={{ display:'flex', flexDirection:'column' }}>
                    <label>Pesquisar por nome</label>
                    <input value={search} onChange={e => setSearch(e.target.value)} />
                    <button onClick={e => search && addName(search)}>Adicionar este nome a lista</button>
                </div>
            </div>  
            <ul>
                {namesFiltred.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}