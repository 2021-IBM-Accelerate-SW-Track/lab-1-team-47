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

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      isComplete: false,
    });
    setInput("");
  };

  return (
    <form onSubmit={submitTodo} className="todoForm">
      {props.edit ? (
        <>
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
        </>
      ) : (
        <>
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
        </>
      )}
    </form>
  );
}

export default TodoForm;
