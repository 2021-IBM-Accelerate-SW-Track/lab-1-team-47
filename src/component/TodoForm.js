import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const changeTodo = (e) => {
    setInput(e.target.value);
  };

  const submitTodo = (e) => {
    e.preventDefault();
    if (input !== "") {
      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input,
        isComplete: false,
        Date: new Date(),
      });
    }
    setInput("");
  };

  return (
    <form onSubmit={submitTodo} className="todoForm">
      {props.edit ? (
        <div>
          <input
            className="todoEdit"
            placeholder="Update item"
            value={input}
            onChange={changeTodo}
            name="text"
            ref={inputRef}
          />

          <button className="btnEdit" onClick={submitTodo}>
            Update
          </button>
        </div>
      ) : (
        <div>
          <input
            className="inputTodo"
            placeholder="Add a todo"
            value={input}
            onChange={changeTodo}
            name="text"
            ref={inputRef}
          />
          <button className="btn" onClick={submitTodo}>
            Add
          </button>
        </div>
      )}
    </form>
  );
}

export default TodoForm;
