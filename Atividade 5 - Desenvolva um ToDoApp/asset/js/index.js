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
            window.todoController.create(todo)
            document.querySelector('#input-name-create').value = ''
        } catch (e) {
            window.toast.showToast(e.message, '#danger-toast')
        }
    } else {
        window.toast.showToast("O nome da tarefa não pode estar vazia!", '#danger-toast')
    }
});



window.todoController.renderTodos()