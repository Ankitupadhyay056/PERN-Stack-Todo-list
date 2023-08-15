import React from 'react';
import './App.css';
import InputTodo from './components/inputTodo';
import ListTodos from './components/ListTodos';
function App() {
  return (
   <>
    <div className='container'>
      <InputTodo/>
      <ListTodos/>
    </div>
   </>
  );
}

export default App;
