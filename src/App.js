import { Component } from 'react';
import './App.css';
import Header from './component/header/header';
import React from 'react';
import DenseAppBar from './components/app/appBar';
import Main from './components/app/toDo';


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

