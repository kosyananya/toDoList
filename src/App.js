import React from 'react';
import './App.css';
import { toDoItems } from "./mock/toDoItems";
import uuid from 'react-uuid'
import List from './components/List';
import ToDoHeader from './components/ToDoHeader';
import Button from './components/Button'

class App extends React.Component {
  state = {
    toDoItems
  }

  removeToDo = (id) => {
    const removeToDoIndex = this.state.toDoItems.findIndex((toDo) => toDo.id === id) 
    const newItems = [...this.state.toDoItems]
    newItems.splice(removeToDoIndex,1)
    this.setState({
        toDoItems: newItems
    })
}

editToDo = (id) => {
    const removeToDoIndex = this.state.toDoItems.findIndex((toDo) => toDo.id === id) 
    const editingToDoItem = this.state.toDoItems.find((toDo) => toDo.id === id) 
    const newItems = [...this.state.toDoItems]
    newItems.splice(removeToDoIndex,1, {...editingToDoItem,done: !editingToDoItem.done})
    this.setState({
        toDoItems: newItems
    })
}
  addToDO = (text) => {
    const newToDO = {
        id: uuid(),
        text: text,
        done: false
    }
    this.setState({
        toDoItems: [...this.state.toDoItems, newToDO]
    })
  }

  removeToDoSelectedItems = (item) => {
    const selectedToDoItems = this.state.toDoItems.filter((toDo) => toDo.done !== true)
    this.setState({
      toDoItems: selectedToDoItems
  })
  }

  render() {
    return (
      <div className="App">
        <ToDoHeader  add = {this.addToDO} />
        <List toDoItems = {this.state.toDoItems} remove = {this.removeToDo} edit = {this.editToDo} />
        {this.state.toDoItems.length ? <Button removeToDoSelectedItems ={this.removeToDoSelectedItems} />  : <></>}
        
      </div>
    );
  }

}

export default App;
