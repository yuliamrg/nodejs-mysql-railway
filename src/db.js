import { createConnection } from 'mysql2/promise';

export const getConnectionDb = async () => {
  const connection = await createConnection({
    user: 'mroot',
    password: 'toor',
    host: 'localhost',
    port: 3306,
    database: 'usersdb',
  });

  return connection;
};
