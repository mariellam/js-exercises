/* TODO
1. Agregar elemento
2. Modificar elementos
3. Marcar como hechos
4. Eliminar

Revisar capitulo 3 - Ceviche.js
*/
let itemLink = document.getElementById('addItem');
let todoList = document.getElementById('todoContainer');

function markAsDone() {
  this.nextSibling.className = this.checked ? 'done' : '';
  console.log('Done Item');
};

function deleteListItem() {
  this.parentNode.remove();
  console.log('Removed Item');
};

// add items
itemLink.addEventListener('click', function () {
  for (i = 0; i < 1; i++) {
    let addTodoItem = document.createElement('li')
    addTodoItem.innerHTML = '<input type="checkbox"><label>New to do item</label> <a href="#" class="deleteItem">Delete this item</a>';
    todoList.appendChild(addTodoItem);
    console.log('Added Item');

    //mark as done
    let doneItem = addTodoItem.getElementsByTagName('input')[0];
    doneItem.addEventListener('change', markAsDone);
    

    //delete this item
    let deleteLink = addTodoItem.getElementsByClassName('deleteItem')[0];
    deleteLink.addEventListener('click', deleteListItem);
  }
});



let doneItems = document.getElementsByTagName('input');
for (i = 0; i < doneItems.length; i++) {
  doneItems[i].addEventListener('change', markAsDone);
}

let deleteLinks = document.getElementsByClassName('deleteItem');
for (i=0; i<deleteLinks.length; i++) {
  deleteLinks[i].addEventListener('click', deleteListItem);
}

