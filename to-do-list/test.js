/* TODO
1. Agregar elemento
2. Modificar elementos
3. Marcar como hechos
4. Eliminar

Revisar capitulo 3 - Ceviche.js
*/
const itemLink = document.querySelector('#addItem');
const newItem = document.querySelector('#item');

const todoList = document.querySelector('#todoContainer');

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
  let newItemValue = newItem.value;
  let addTodoItem = document.createElement('li')
  addTodoItem.innerHTML = '<input type="checkbox" class="doneCheck"><label>' + newItemValue + '</label> <a href="#" class="deleteItem">Delete this item</a>';
  todoList.appendChild(addTodoItem);
  newItem.value = '';

  console.log('Added Item');

  //mark as done
  const doneItem = addTodoItem.querySelector('input.doneCheck');
  doneItem.addEventListener('change', markAsDone);


  //delete this item
  const deleteLink = addTodoItem.querySelector('a.deleteItem');
  deleteLink.addEventListener('click', deleteListItem);
});