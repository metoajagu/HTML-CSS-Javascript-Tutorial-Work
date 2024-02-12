const todoList = [];


function renderTodoList(){
   let todoListHTML = '';
   todoList.forEach((todoObject, index) =>{

      const { name, dueDate } = todoObject;

      // This works with the grid, we put each part of the todo list into a div so that it fits into the css grid with the columns
      const html = `
         <div>${name}</div>
         <div>${dueDate}</div>
         <button class ="delete-todo-button js-delete-todo-button">Delete</button> 
      `;
      todoListHTML += html;
   })


   document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML;

      // querySelectorAll selects all elements with the given class name to add the addlistener we treat like an array and loop through it using forEach
   document.querySelectorAll('.js-delete-todo-button')
      .forEach((deleteButton, index) => {
         deleteButton.addEventListener('click', () => {
            console.log(index);
            todoList.splice(index, 1);
            renderTodoList();
         })
      });
      
}

document.querySelector('.js-add-todo-button')
   .addEventListener('click', () => {
      addTodo();
   })
function addTodo(){
   const inputElement = document.querySelector('.js-name-input')
   ;
   const name = inputElement.value
// Practicing getting values out of input elements using document.querySelector and suing .value
   const dateInputElement = document.querySelector('.js-due-date-input');
   const dueDate = dateInputElement.value;


   todoList.push({
   name,
   dueDate
});


   inputElement.value = '';

   renderTodoList();
}