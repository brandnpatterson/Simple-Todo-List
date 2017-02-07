// model
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

    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    if (completedTodos === totalTodos ) {
      for (var i = 0; i < this.todos.length; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (var i = 0; i < this.todos.length; i++) {
        this.todos[i].completed = true;
      }
    }
  }
};

// controller
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
  deleteTodo: function () {
    var deleteTodo = document.getElementsByName('deleteTodo')[0];

    if (deleteTodo.value === '') {
      return;
    } else {
      todoList.deleteTodo(deleteTodo.value);
      deleteTodo.value = '';
    }
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

// view
var view = {
  displayTodos: function () {
    var todosUl = document.querySelector('.todos');
    todosUl.innerHTML = '';
s
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todo = todoList.todos[i];

      var todoTextWithCompletion = '';
      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }

      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
};
