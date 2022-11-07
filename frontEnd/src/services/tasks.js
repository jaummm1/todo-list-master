import axios from 'axios';

const PORT = process.env.PORT || 8080;

const api = axios.create({
  baseURL: `http://localhost:${PORT}`,
});

export const fetchTasks = async (order) => {
  let res;
  switch (order) {
    case 'name':
      res = await api.get('/tasks/alpha');
      break;
    case 'status':
      res = await api.get('/tasks/status');
      break;
    default:
      res = await api.get('/tasks');
  }
  return res.data;
};

export const setTask = async ({ task, status }) => {
  await api.post('/tasks', { task, status });
};

export const deleteTask = async (id) => {
  await api.delete(`/tasks/${id}`);
};

export const updateTask = async (id, task, status) => {
  await api.put(`/tasks/${id}`, { task, status });
};
