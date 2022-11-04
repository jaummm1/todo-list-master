import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import TaskContext from '../context/TaskContext';
import { updateTask } from '../services/tasks';
// import { updateTask } from '../services/tasks';

function UpdateTask({ task }) {
  const { getAtt, setGetAtt } = useContext(TaskContext);
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const onClick = async () => {
    setEditing(true);
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setEditedTask({ ...editedTask, task: value });
  };

  const handleSelect = ({ target }) => {
    const { value } = target;
    setEditedTask({ ...editedTask, status: value });
  };

  const saveBtn = async () => {
    const { _id } = task;
    await updateTask(_id, editedTask.task, editedTask.status);
    setEditing(false);
    setGetAtt(!getAtt);
  };

  const cancelBtn = () => {
    setEditedTask(task);
    setEditing(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="button-settings"
        id="update"
      >
        Editar
      </button>
      {editing ? (
        <div>
          <textarea
            className="edit-input"
            type="text"
            placeholder="Digite a tarefa editada"
            value={editedTask.task}
            onChange={handleChange}
          />
          <select
            value={editedTask.status}
            onChange={handleSelect}
            className="edit-select"
          >
            <option value="Pendente">Pendente</option>
            <option value="Em andamento">Em andamento</option>
            <option value="Pronto">Pronto</option>
          </select>
          <button type="button" onClick={saveBtn} id="save-edit">
            Salvar
          </button>
          <button type="button" onClick={cancelBtn} id="cancel-edit">
            Cancelar
          </button>
        </div>
      ) : null}
    </>
  );
}

UpdateTask.propTypes = {
  task: PropTypes.object,
}.isRequired;

export default UpdateTask;
