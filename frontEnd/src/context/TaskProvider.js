import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TaskContext from './TaskContext';
import { fetchTasks } from '../services/tasks';

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [orderButton, setOrderButton] = useState('date');
  const [getAtt, setGetAtt] = useState(false);

  const getTasks = async (order) => {
    const apiResult = await fetchTasks(order);
    setTasks(apiResult);
  };

  useEffect(() => {
    getTasks(orderButton);
  }, [orderButton, getAtt]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        orderButton,
        setOrderButton,
        getAtt,
        setGetAtt,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TaskProvider;
