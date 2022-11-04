const rescue = require('express-rescue');

const TasksServices = require('../services/tasks');

const getCurrentDate = () => {
  const today = new Date();
  const day = today.getDate();
  const month = Number(today.getMonth()) + 1;
  const year = today.getFullYear();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  return (
    `${day}-${month}-${year} ${hours}:${minutes}`
  );
};

const getAll = rescue(async (_req, res) => {
  const tasks = await TasksServices.getAll();
  res.status(200).json(tasks);
});

const getAllAlphabetic = rescue(async (_req, res) => {
  const tasks = await TasksServices.getAllAlphabetic();
  res.status(200).json(tasks);
});

const getAllStatus = rescue(async (_req, res) => {
  const tasks = await TasksServices.getAllStatus();
  res.status(200).json(tasks);
});

const create = rescue(async (req, res) => {
  const { task, status } = req.body;
  const newTask = {
    task,
    status,
    date: getCurrentDate(),
  };

  const createdTask = await TasksServices.create(newTask);
  if (createdTask.message) {
    return res
      .status(createdTask.code)
      .json({ message: createdTask.message });
  }

  return res.status(200).json(createdTask);
});

const exclude = rescue(async (req, res) => {
  const { id } = req.params;
  const task = await TasksServices.exclude(id);
  if (task.message) return res.status(task.code).json({ message: task.message });
  return res.status(200).json(task);
});

const update = rescue(async (req, res) => {
  const { id } = req.params;
  const { task, status } = req.body;

  const updatedTask = await TasksServices.update(id, task, status);
  if (updatedTask.message) {
    return res.status(updatedTask.code).json({ message: updatedTask.message });
  }
  return res.status(200).json(updatedTask);
});

module.exports = {
  getAll,
  getAllAlphabetic,
  getAllStatus,
  create,
  exclude,
  update,
};
