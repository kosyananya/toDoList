import React from 'react';
import './App.css';
import List from './components/List';
import ToDoHeader from './components/ToDoHeader';

function App() {
  return (
    <div className="App">
      <ToDoHeader />
      <List />
    </div>
  );
}

export default App;
