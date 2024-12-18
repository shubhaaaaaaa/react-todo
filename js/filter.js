import { fetchTodos } from '../jsonserver.js'
import { addItem } from '../script.js'

const toDoList = document.getElementById('js-table-list')

const filterPending = document.getElementById('filter-pending')
const filterAll = document.getElementById('filter-all')
const filterDone = document.getElementById('filter-done')

window.onload = () => {
    defaultFilterAll()
};

//display all data on load
const defaultFilterAll = async () => {

    displayPending()
    displayDone()
}

const displayPending = async () => {
    toDoList.innerText = ''
    const todos = await fetchTodos();
    const getPending = todos.filter(todo => todo.completed == false)

    getPending.forEach((item) => addItem(item));
}

const displayDone = async () => {
    toDoList.innerText = ''
    const todos = await fetchTodos();
    const getDone = todos.filter(todo => todo.completed == true)

    getDone.forEach((item) => addItem(item));
}

//filter out todo
filterAll.addEventListener('click', async () => {
    filterPending.classList.remove('underline')
    filterAll.classList.add('underline')
    filterDone.classList.remove('underline')
    defaultFilterAll()
})

filterPending.addEventListener('click', async () => { 
    filterPending.classList.add('underline')
    filterAll.classList.remove('underline')
    filterDone.classList.remove('underline')
    displayPending()
})

filterDone.addEventListener('click', async () => {
    filterPending.classList.remove('underline')
    filterAll.classList.remove('underline')
    filterDone.classList.add('underline')
    displayDone()
})

export {defaultFilterAll}