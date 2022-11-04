const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAll = async () => {
  const db = await connection();
  const tasks = await db.collection('tasks').find().toArray();
  return tasks;
};

const getAllAlphabetic = async () => {
  const db = await connection();
  const tasks = await db.collection('tasks')
    .find()
    .sort({ task: 1 })
    .toArray();
  return tasks;
};

const getAllStatus = async () => {
  const db = await connection();
  const tasks = await db.collection('tasks')
    .find()
    .sort({ status: 1 })
    .toArray();
  return tasks;
};

const getById = async (id) => {
  const db = await connection();
  const searchedTask = await db.collection('tasks')
    .findOne(new ObjectId(id));
  return searchedTask;
};

const create = async (toDo) => {
  const { date, status, task } = toDo;
  const db = await connection();
  const createdTask = await db
    .collection('tasks')
    .insertOne({ date, status, task });
  return createdTask;
};

const exclude = async (id) => {
  const db = await connection();
  const task = await getById(id);
  await db.collection('tasks').deleteOne({ _id: ObjectId(id) });
  return task;
};

const update = async (id, task, status) => {
  const db = await connection();
  await db.collection('tasks')
    .updateOne({ _id: ObjectId(id) }, { $set: { task, status } });

  const updatedTask = await getById(id);
  return updatedTask;
};

module.exports = {
  getAll,
  getAllAlphabetic,
  getAllStatus,
  getById,
  exclude,
  create,
  update,
};
