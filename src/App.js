import { Component } from 'react';
import './App.css';
import Header from './component/header/header';
import React from 'react';
import DenseAppBar from './components/app/appBar';
import Main from './components/app/toDo';


class App extends Component {
  render() {
    return(
      <div className="App">
        <Header />
        <DenseAppBar />
				<br />
				<Main />
      </div>  
    );
  }
}

export default App;







