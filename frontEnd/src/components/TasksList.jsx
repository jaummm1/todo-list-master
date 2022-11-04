/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import DeleteTask from './DeleteTask';
import UpdateTask from './UpdateTask';

function TaskList() {
  const { tasks } = useContext(TaskContext);

  const getStatus = (value) => {
    switch (value) {
      case 'Pendente':
        return 'status-pending';
      case 'Em andamento':
        return 'status-ongoing';
      default:
        return 'status-done';
    }
  };

  return (
    <div className="task-container">
      {tasks.map((task, index) => (
        <div key={index} className="single-task">
          <span id="task">{task.task}</span>
          <span id="status" className={getStatus(task.status)}>
            {task.status}
          </span>
          <span id="date">{task.date}</span>
          {'  '}
          <div className="btn-container">
            <DeleteTask task={task} />
            <UpdateTask task={task} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
