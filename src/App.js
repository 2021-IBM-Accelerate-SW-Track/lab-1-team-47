
import React from 'react';
import "./App.css";
import Header from "./component/header";
import TodoList from "./component/TodoList";

function App() {
  return (
    <div className="todo">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
