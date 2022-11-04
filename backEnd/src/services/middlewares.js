const { ObjectId } = require('mongodb');

const validateEntries = (task, status) => {
  if (!task) {
    return {
      code: 404,
      message: 'Task not found',
    };
  }
  if (!status) {
    return {
      code: 404,
      message: 'Status not found',
    };
  }
  return false;
};

const validateId = (id) => {
  if (!ObjectId.isValid(id)) {
    return {
      code: 400,
      message: 'Inserted ID is invalid',
    };
  }
  return false;
};

module.exports = {
  validateEntries,
  validateId,
};
