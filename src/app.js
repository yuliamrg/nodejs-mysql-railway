import express from 'express';
import { getConnectionDb } from './db.js';

const app = express();

const port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.send('welcome to server');
});

app.get('/ping', async (req, res) => {
  try {
    const connection = await getConnectionDb();
    const query = await connection.query('SELECT "hello world" as RESULT');
    res.send('welcome to server');
    console.log(query);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port);
console.log(`server on port ${port}`);
