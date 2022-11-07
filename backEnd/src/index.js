/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

const TaskControllers = require('./controllers/tasks');

app.use(cors());

app.use(bodyParser.json());

app.get('/tasks', TaskControllers.getAll);
app.get('/tasks/alpha', TaskControllers.getAllAlphabetic);
app.get('/tasks/status', TaskControllers.getAllStatus);

app.post('/tasks', TaskControllers.create);

app.put('/tasks/:id', TaskControllers.update);

app.delete('/tasks/:id', TaskControllers.exclude);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
