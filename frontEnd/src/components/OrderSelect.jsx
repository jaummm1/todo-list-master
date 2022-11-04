/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react';
import TaskContext from '../context/TaskContext';

function OrderSelect() {
  const { setOrderButton } = useContext(TaskContext);
  const [selectValue, setSelectValue] = useState('date');

  const handleChange = ({ target }) => {
    const { value } = target;
    setOrderButton(value);
    setSelectValue(value);
  };

  return (
    <div className="select-container">
      <label htmlFor="select" id="select-label">
        Ordenar por:
      </label>
      <select
        id="select"
        className="select-order"
        value={selectValue}
        onChange={handleChange}
      >
        <option value="date">Data de Criação</option>
        <option value="name">Ordem Alfabética</option>
        <option value="status">Status</option>
      </select>
    </div>
  );
}

export default OrderSelect;
