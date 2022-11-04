/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TaskContext from '../context/TaskContext';
import { deleteTask } from '../services/tasks';

function DeleteTask({ task }) {
  const { getAtt, setGetAtt } = useContext(TaskContext);

  const onClick = async () => {
    const { _id } = task;
    await deleteTask(_id);
    setGetAtt(!getAtt);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="button-settings"
      id="delete"
    >
      Deletar
    </button>
  );
}

DeleteTask.propTypes = {
  task: PropTypes.object,
}.isRequired;

export default DeleteTask;
