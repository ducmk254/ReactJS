import React, { Component } from 'react';
import './App.css';
import ToDoItem from './Components/ToDoItem';

class App extends Component{
  constructor() {
    super();
    this.todoItem = [
      "Mua bim bim",
      "Di cho",
      "Di do xang"
    ];
  }
  addNewItem(newItem){
    this.todoItem.push(newItem);
    return this;
  }

  render(){
    return (
      <div className="App">
        {
          this.todoItem.map((item,index)=><ToDoItem key={index} title={item} />)
        }
      </div>
    );
  }
}

export default App;
