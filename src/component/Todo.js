import React, { useState } from "react";
import TodoForm from "./TodoForm";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Checkbox from "@material-ui/core/Checkbox";

const Todo = ({ todos, completeTodo, removeTodo, editTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdatedTodo = (value) => {
    editTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdatedTodo} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todoRow complete" : "todoRow"}
      key={index}
    >
      <Checkbox
        style={{ color: "#ffffff" }}
        onChange={() => completeTodo(todo.id)}
      />
      <div key={todo.id}>{todo.text}</div>
      <div className="icons">
        <EditIcon
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="editIcon"
        />
        <DeleteIcon
          onClick={() => removeTodo(todo.id)}
          className="deleteIcon"
        />
      </div>
    </div>
  ));
};

export default Todo;
