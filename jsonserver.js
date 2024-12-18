const url = 'http://localhost:3000/todos'

const addTodo = async (todo) => {

        const existingTodo = await fetchTodos()
    
        const newOrder = existingTodo.length;
        const newTodo = { ...todo, order: newOrder }
    
        const response = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTodo)
        })
        return response.json()   
}

const fetchTodos = async () => {
    const response = await fetch(url)
    const todos = await response.json()
    return todos.sort((firstEl,secondEl)=> firstEl.order - secondEl.order)
}

const updateTodo = async (id, update) => {
    const response = await fetch(`${url}/${id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(update)
    })
    return response.json() 
}

const patchTodo = async (id, patch) => {
    const response = await fetch(`${url}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(patch)
    });
    return response.json();
}


const deleteTodo = async (id) => {
    await fetch(`${url}/${id}`, {
        method: 'delete'
    })
}

export { addTodo, fetchTodos, updateTodo, deleteTodo, patchTodo }
