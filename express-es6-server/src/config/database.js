import mysql from "mysql2/promise";

const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } = process.env;

let connection = await mysql.createConnection({
  host: DB_HOST || "localhost",
  port: DB_PORT || 3306,
  user: DB_USER || "root",
  password: DB_PASS || "root",
  database: DB_NAME || "carryout",
});

const [result] = await connection.execute(`SELECT 1*1 as MultiplicationResult`);
if (result[0].MultiplicationResult !== 1) process.exit(1);
else console.log("Connected to database successfully");

export default connection;
