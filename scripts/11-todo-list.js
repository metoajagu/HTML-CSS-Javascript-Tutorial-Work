const todoList = [];


function renderTodoList(){
   let todoListHTML = '';

   for (let i = 0; i < todoList.length; i++){
      const todoObject = todoList[i];

      const { name, dueDate } = todoObject;

      // This works with the grid, we put each part of the todo list into a div so that it fits into the css grid with the columns
      const html = `
         <div>${name}</div>
         <div>${dueDate}</div>
         <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
         " class ="delete-todo-button">Delete</button> 
      `;

      todoListHTML += html;
   }

   document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML;
}
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