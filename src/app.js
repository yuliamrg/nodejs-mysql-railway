import express from 'express';
import { getConnectionDb } from './db.js';
import { PORT } from './config.js';

const connection = await getConnectionDb();

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  const [result] = await connection.query('SELECT * FROM users')
  res.json(result)
});

app.get('/ping', async (req, res) => {
  try {
    const [result] = await connection.query('SELECT "hello world" as RESULT');
    console.log(result);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
});

app.get('/create', async (req, res) => {
  const result = await connection.query('INSERT INTO users(name) VALUES ("yuliam")')
  console.log(result);
  res.json(result[0]);
})

app.listen(PORT);
console.log(`server on port ${PORT}`);
