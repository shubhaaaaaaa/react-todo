import { addTodo } from '../jsonserver.js'
import { addItem } from '../script.js'
import {defaultFilterAll} from '../js/filter.js'

const modal = document.getElementById('js-modal');
const userInput = document.getElementById('js-user-input')

window.toggleModal = () => {
    modal.classList.toggle('hidden');
    modal.classList.toggle('flex');
};

//focus on input as soon as modal opens
window.onclick = function (event) {
    if (event.target == modal) {
        toggleModal()
    } else if (modal.classList.contains('flex')) {
        userInput.focus();
    }
};

//Modal - Add button functionality
window.addButtonModal = async () => {

    const newTodo = await addTodo({text: userInput.value, completed: false });
    addItem(newTodo);
    
    userInput.value = ''
    toggleModal()
    defaultFilterAll()
}

//Pressing enter to add new item
userInput.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        addButtonModal()
    }    
})    