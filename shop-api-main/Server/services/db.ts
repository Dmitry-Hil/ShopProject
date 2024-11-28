import mysql, { Connection } from "mysql2/promise";

export async function initDataBase(): Promise<Connection | null> {
  const { DB_HOST, DB_PORT, DB_PASSWORD, DB_USER, DB_NAME } = process.env;

  try {
    const connection = await mysql.createConnection({
      password: DB_PASSWORD,
      port: Number(DB_PORT),
      host: DB_HOST,
      database: DB_NAME,
      user: DB_USER,
    });

    console.log(`Connection to DB ProductsApplication established`);
    return connection;
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(`Error connecting to the database: ${e.message}`);
    } else {
      console.error('An unknown error occurred while trying to connect to the database:', e);
    }
    return null;
  }
}
