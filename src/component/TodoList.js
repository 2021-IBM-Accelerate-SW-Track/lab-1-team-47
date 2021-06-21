import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  const addTodo = (todo) => {
    if (
      todos.some(
        (cTodo) => cTodo.text.toUpperCase() === todo.text.toUpperCase()
      )
    ) {
      alert("Todo already exists");
    } else {
      const newTodos = [todo, ...todos];
      setTodos(newTodos);
      console.log(...todos);
    }
  };

  const editTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArray = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArray);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onSubmit={addTodo} />

      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default TodoList;
