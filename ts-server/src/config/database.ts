import mysql, { RowDataPacket } from "mysql2/promise";

export const connection = async () =>
  await mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "carryout",
    connectionLimit: 10,
  });

export const VerifyDB = async () => {
  const client = await connection();

  const [result] = await client.execute<RowDataPacket[]>(
    `SELECT 1+1 as solution`
  );

  return result[0].solution === 2;
};

export default connection;
