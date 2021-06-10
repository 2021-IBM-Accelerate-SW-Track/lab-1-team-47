import Header from "./component/header"
import Input from '@material-ui/core/Input';
import './App.css';

import React, { useState } from "react";


function ItemInput(props) {
  const [item, setItem] = useState("")
  const updateItem = function (event) {
    setItem(event.target.value);
  }
  const addToList = function (event) {
    // prevent form from actually submitting
    event.preventDefault();
    if(item!=""){
    props.addItem(item);
    }
    setItem("");
  }
 
  return (
    <form onSubmit={addToList}>
      <input type="text" value={item} placeholder="enter new item" onChange={updateItem}/>
      <input type="submit" value="Add item"/>
      
    </form>
    
  );
}


function Items(props) {
  const items = [];

  for (let i = 0; i < props.items.length; i++) {
    const listItem = <li key={i}>{props.items[i]}<input type="checkbox" title="Default delivery centre" class="checkbox" /></li>;
    items.push(listItem);
  }

  return (
    <ul >{items} </ul>
  )
}

function App() {
  const [items, setItems] = useState([]);
  const addItem = function (item) {
    setItems(items.concat(item));
    
  }
  
  return (
    <div className="App">
       <div>
      <Header/>
    </div>
      <ItemInput addItem={addItem}/>
      <Items items={items} />
      
    
    </div>
   
  );
}

export default App;
