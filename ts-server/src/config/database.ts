import mysql, { RowDataPacket, Connection } from "mysql2/promise";

export const connection = async () =>
  await mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "carryout",
    connectionLimit: 10,
  });

export let client: Connection;
export const setup = async () => {
  try {
    client = await connection();

    const [result] = await client.execute<RowDataPacket[]>(
      `SELECT 1+1 as solution`
    );

    return result[0].solution === 2;
  } catch (err) {
    console.log("🐛 Something went wrong with connection");
    return false;
  }
};

export default connection;
