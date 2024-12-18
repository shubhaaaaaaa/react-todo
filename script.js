import { updateTodo, deleteTodo } from './jsonserver.js'
import { dragAndDrop } from './js/draggable.js'

const toDoList = document.getElementById('js-table-list')

function addItem(todo) {

    if (!todo.text.trim()) {
        return;  
    }

    //tr element
    const element_tr = document.createElement('tr')
    element_tr.classList.add('border-b', 'border-neutral-200', 'draggable')
    element_tr.draggable = true
    element_tr.id = todo.id
    
    //td element - checkbox col
    const element_complete = document.createElement('td')
    element_complete.classList.add('text-center', 'px-5')
    
    const element_task = document.createElement('td')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    element_complete.appendChild(checkbox)
    
    //show line through in checkbox if checked
    checkbox.checked = todo.completed;
    if (todo.completed) {
    element_task.classList.add('line-through');
    }
    else {
        element_task.classList.remove('line-through');
    }

    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            element_task.classList.add('line-through')
            updateTodo(todo.id, { id: todo.id, text: todo.text, completed: true })  
        }
        else {
            element_task.classList.remove('line-through')
            updateTodo(todo.id, { id: todo.id, text: todo.text, completed: false }) 
        }
    })
    

    //td element - list todo col
    element_task.textContent = todo.text
    element_task.classList.add('border-s', 'border-e', 'border-neutral-200', 'px-6', 'py-4', 'break-words', 'whitespace-normal', 'w-3/4')


    //td element - trash icon col
    const element_more = document.createElement('td')
    const trashIcon = document.createElement('i')
    trashIcon.classList.add('fas', 'fa-trash-alt', 'cursor-pointer', 'px-5', 'hover:text-red-600')
    element_more.appendChild(trashIcon)

    trashIcon.onclick = () => {
        deleteTodo(todo.id)
        element_tr.remove()
    }

    //appending all td inside tr 
    element_tr.appendChild(element_complete)
    element_tr.appendChild(element_task)
    element_tr.appendChild(element_more)

    //append the tr to main table
    toDoList.appendChild(element_tr)
    dragAndDrop()
}

dragAndDrop()

export {addItem}