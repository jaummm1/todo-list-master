import React, { useState, useContext } from 'react';
import TaskContext from '../context/TaskContext';
import { setTask } from '../services/tasks';

function NewTask() {
  const { getAtt, setGetAtt } = useContext(TaskContext);
  const [newTask, setNewTask] = useState({ status: 'Pendente', task: '' });

  const handleChange = ({ target }) => {
    const { value } = target;
    setNewTask({ ...newTask, task: value });
  };

  const onClick = async () => {
    await setTask(newTask);
    setGetAtt(!getAtt);
    newTask.task = '';
  };

  const isDisabled = () => {
    if (newTask.task.length > 0) {
      return false;
    }
    return true;
  };

  return (
    <div className="new-task-container">
      <textarea
        maxLength="180"
        className="insert-task"
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTask.task}
        onChange={handleChange}
      />
      <button
        className="new-task-btn"
        type="button"
        onClick={onClick}
        disabled={isDisabled()}
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}

export default NewTask;
