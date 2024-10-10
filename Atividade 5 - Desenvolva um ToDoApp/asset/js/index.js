function todoFactory() {
    return {
        name: '',
        complete: false
    }
}

const createButton = document.querySelector("#create-button")

createButton?.addEventListener('click', (e) => {
    let name = document.querySelector('#input-name-create').value
    if (name) {
        try {
            let todo = todoFactory()
            todo.name = name;
            window.appRepository.create(todo)
            window.toast.showToast("Criado com sucesso!")
            renderTodos()
            document.querySelector('#input-name-create').value = ''
        } catch (e) {
            window.toast.showToast(e.message, '#danger-toast')
        }
    } else {
        window.toast.showToast("O nome da tarefa não pode estar vazia!", '#danger-toast')
    }
});

function deleteTodo(id) {
    try {
        window.appRepository.delete(id)
        window.toast.showToast("Deletado com sucesso!")
        renderTodos()
    } catch (e) {
        window.toast.showToast(e.message, '#danger-toast')
    }
}
function updateTodo(id) {
    try {
        const name = document.querySelector(`#todo-name-${id}`).value
        const complete = document.querySelector(`#todo-complete-${id}`).checked
        window.appRepository.update(id, { name, complete })
        window.toast.showToast("Atualizado com sucesso!")
        renderTodos()
    } catch (e) {
        window.toast.showToast(e.message, '#danger-toast')
    }
}
function renderTodos() {
    const todos = window.appRepository.list()
    const todosList = document.querySelector('#todos')
    while (todosList.firstChild) {
        todosList.removeChild(todosList.lastChild);
    }
    todos.forEach(todo => {
        const li = document.createElement("li")
        li.classList.add('list-group-item')
        li.innerHTML = ` <div class="row justify-content-md-between ">
            <div class="col-12 col-md-6">
                ${todo.complete ? '<span class="badge bg-success">Concluído</span>' : ""}
                <div class="form-group">
                    <label>Nome da tarefa</label>
                    <input class="form-control" id="todo-name-${todo.id}" value="${todo.name}" >
                 </div>
            </div>
            <div class="col-12 col-md-6 mt-3 d-md-flex d-block gap-2 align-items-center justify-content-end mt-md-0">    
                <div class="form-check ">
                    <input onchange="updateTodo(${todo.id})" name="todo-complete-${todo.id}"  id="todo-complete-${todo.id}"  ${todo.complete ? "checked" : ""} class="form-check-input" type="checkbox">
                    <label class="form-check-label" for="todo-complete-${todo.id}">
                        Concluído
                    </label>
                </div>
                <div class="d-flex d-md-block flex-column gap-2">
                    <button onclick="updateTodo(${todo.id})" class="btn btn-primary">Atualizar</button>
                    <button onclick="deleteTodo(${todo.id})" class="btn btn-danger">Deletar</button>
                </div>
            </div>
         </div>`;
        todosList.appendChild(li)
    });
}
renderTodos()