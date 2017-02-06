var todoList = {
  todos: [],
  
  displayTodos: function () {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    } else {
      console.log('My Todos:')
      for (var i = 0; i < this.todos.length; i++) {
        console.log(this.todos[i].todoText);

        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].completed);
        } else {
          console.log('( )', this.todos[i].completed);
        }
      }
    }
  },

  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },

  changeTodo: function (position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  deleteTodo: function (position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },

  toggleCompleted: function (position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
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
    this.displayTodos();
  }
};

var handlers = {
  displayTodos: function () {
    todoList.displayTodos();
  },

  toggleAll: function () {
    todoList.toggleAll();
  },

  addTodo: function () {
    var addTodoInput = document.getElementsByName('addTodoInput')[0];
    if (addTodoInput.value === '') {
      return;
    } else {
      todoList.addTodo(addTodoInput.value);
      addTodoInput.value = '';
    }
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
  },

  deleteTodo: function () {
    var deleteTodo = document.getElementsByName('deleteTodo')[0];
    if (deleteTodo.value === '') {
      return;
    } else {
      todoList.deleteTodo(deleteTodo.value);
      deleteTodo.value = '';
    }
  },

  toggleCompleted: function () {
    var toggleCompleted = document.getElementsByName('toggleCompleted')[0];
    if (toggleCompleted.value === '') {
      return;
    } else {
      todoList.toggleCompleted(toggleCompleted.value);
      toggleCompleted.value = '';
    }
  }
};
