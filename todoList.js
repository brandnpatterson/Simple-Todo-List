// model // represents data as an array and has methods to change the data
var todoList = {
  todos: [],
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function (position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function (position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function (position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function () {
    var totalTodos = this.todos.length,
    completedTodos = 0;

    this.todos.forEach(function(todo) {
      if (todo.completed === true) {
        completedTodos++;
      }
    });

    this.todos.forEach(function(todo) {
      if (completedTodos === totalTodos) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    });
  }
};

// controller // handles user interactions onclick
var handlers = {
  addTodo: function () {
    var addTodoInput = document.getElementsByName('addTodoInput')[0];

    if (addTodoInput.value === '') {
      return;
    } else {
      todoList.addTodo(addTodoInput.value);
      addTodoInput.value = '';
    }
    view.displayTodos();
  },
  changeTodo: function () {
    var changeTodoPosition = document.getElementsByName('changeTodoPosition')[0],
        changeTodoText     = document.getElementsByName('changeTodoText')[0];

    if (changeTodoPosition.value === '') {
      return;
    } else {
      todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoText.value);
      changeTodoPosition.value = '';
      changeTodoText.value = '';
    }
    view.displayTodos();
  },
  deleteTodo: function (position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function () {
    var toggleCompleted = document.getElementsByName('toggleCompleted')[0];

    if (toggleCompleted.value === '') {
      return;
    } else {
      todoList.toggleCompleted(toggleCompleted.value);
      toggleCompleted.value = '';
    }
    view.displayTodos();
  },
  toggleAll: function () {
    todoList.toggleAll();
    view.displayTodos();
  }
};

// view // only concerned with showing people what the todo list looks like
var view = {
  displayTodos: function () {
    var todosUl = document.querySelector('.todos');
    todosUl.innerHTML = '';

    todoList.todos.forEach(function(todo, position) {
      var todoLi = document.createElement('li');

      var todoTextWithCompletion = '';
      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }

      // each todoLi in the loop is assigned to an id position
      todoLi.id = position;
      // each li text has completion
      todoLi.textContent = todoTextWithCompletion;

      // append a delete button to each li element
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
      
      // this added to callback function, properly referring to the view object and not the window
    }, this);
  },
  createDeleteButton: function () {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';

    return deleteButton;
  },
  setUpEventListeners: function () {
    var todosUl = document.querySelector('.todos');

    // listen for all clicks on the unordered list
    todosUl.addEventListener('click', function (e) {
      console.log(e.target.parentNode.id);

      // Get the element that was clicked on
      var elementClicked = event.target;

      // Check if elementClicked is a delete button
      if (elementClicked.className === 'deleteButton') {

        // Event deligation to the parentNode
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};
view.setUpEventListeners();


// var students = ['John', 'Jane', 'Elliot'];
//
// function logName (name) {
//   console.log(name);
// }
//
// logName(students[0]); // John
//
// logName(students)
// for (var i = 0; i < students.length; i++) {
// 	logName(students[i]);
// } // John, Jane, Elliot
//
// // forEach = JavaScript method, higher order function // logName = callback functions
// students.forEach(function logName(name) {
//   console.log(name);
// }) // John, Jane, Elliot
//
// // custom forEach function
// function forEach(myArray, myFunction) {
//   for (var i = 0; i < myArray.length; i++) {
//     myFunction(myArray[i]);
//   }
// }
//
// forEach(students, logName); // John, Jane, Elliot
//
// // higher order function -- functions that accept other functions
// // callback functions    -- the functions that are passed into higher order functions
//
// function multiplyTwoNumbers(x, y) {
//   return x * y;
// }
//
// console.log(multiplyTwoNumbers(2, 4));
