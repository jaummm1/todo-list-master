import React from 'react';
import './App.css';
import OrderSelect from './components/OrderSelect';
import TaskList from './components/TasksList';
import NewTask from './components/NewTask';

function App() {
  return (
    <>
      <NewTask />
      <OrderSelect />
      <TaskList />
    </>
  );
}

export default App;
