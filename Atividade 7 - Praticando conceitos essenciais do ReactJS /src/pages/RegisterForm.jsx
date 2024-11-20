import { useState } from "react"

export default function RegisterForm() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [ok, setOk] = useState(false);
    const [formErrors, setFormErrors] = useState({
        name: { message: null },
        email: { message: null },
        password: { message: null }
    })
    const addField = (field, value) => {
        setForm(state => ({ ...state, [field]: value }))
    }
    const submit = (e) => {
        e.preventDefault();
        let error = false;
        if (!form.email) {
            setFormErrors(state => ({ ...state, email: { message: 'Email é Obrigatório' } }))
            error = true;
        }
        if (!form.name) {
            setFormErrors(state => ({ ...state, name: { message: 'Nome é Obrigatório' } }))
            error = true;
        }
        if (!form.password) {
            setFormErrors(state => ({ ...state, password: { message: 'Senha é Obrigatório' } }))
            error = true;
        }
        if (error) {
            return;
        }
        setOk(true);
    }
    return (
        <div className="container">
            <form onSubmit={submit}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Nome</label>
                    <input onChange={e => addField("name", e.target.value)} />
                    {formErrors.name.message && <small style={{ color: 'red' }}>{formErrors.name.message}</small>}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Email</label>
                    <input onChange={e => addField("email", e.target.value)} />
                    {formErrors.email.message && <small style={{ color: 'red' }}>{formErrors.email.message}</small>}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>Senha</label>
                    <input type="password" onChange={e => addField("password", e.target.value)} />
                    {formErrors.password.message && <small style={{ color: 'red' }}>{formErrors.password.message}</small>}
                </div>
                <button>Submeter</button>
            </form>
            {ok && <div>
                <h1>Seja Bem vindo ao sistema</h1>
            </div>}
        </div>
    )
}