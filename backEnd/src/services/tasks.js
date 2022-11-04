const TasksModels = require('../models/tasks');
const middlewares = require('./middlewares');

const getAll = async () => {
  const tasks = await TasksModels.getAll();
  return tasks;
};

const getAllAlphabetic = async () => {
  const tasks = await TasksModels.getAllAlphabetic();
  return tasks;
};

const getAllStatus = async () => {
  const tasks = await TasksModels.getAllStatus();
  return tasks;
};

const create = async (newTask) => {
  const { task, status } = newTask;

  const isValid = middlewares.validateEntries(task, status);
  if (isValid) return isValid;

  const createdTask = await TasksModels.create(newTask);
  const taskFromId = await TasksModels.getById(createdTask.insertedId);
  return taskFromId;
};

const exclude = async (id) => {
  const isValid = middlewares.validateId(id);
  if (isValid) return isValid;

  const task = await TasksModels.exclude(id);
  if (!task) {
    return {
      code: 404,
      message: 'There is no match with this ID',
    };
  }

  return task;
};

const update = async (id, task, status) => {
  const isValid = middlewares.validateId(id);
  if (isValid) return isValid;

  const entries = middlewares.validateEntries(task, status);
  if (entries) return entries;

  const updatedTask = await TasksModels.update(id, task, status);
  if (!updatedTask) {
    return {
      code: 404,
      message: 'There is no match with this ID',
    };
  }
  return updatedTask;
};

module.exports = {
  getAll,
  getAllAlphabetic,
  getAllStatus,
  exclude,
  create,
  update,
};
