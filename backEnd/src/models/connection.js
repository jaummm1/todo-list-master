const { MongoClient } = require('mongodb');
require('dotenv').config();

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = process.env.MONGO_DB_URL || 'mongodb+srv://jaummmm1:1234@cluster0.slmqsxs.mongodb.net/?retryWrites=true&w=majority';
const DB_NAME = 'TodoList';

let db = null;

const connection = () => (
  db ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
      .then((conn) => {
        db = conn.db(DB_NAME);
        return db;
      })
);

module.exports = connection;
