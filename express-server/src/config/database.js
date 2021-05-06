import mysql from "mysql2";

export const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "root",
  database: process.env.DB_NAME || "carryout",
  port: process.env.DB_PORT || 3306,
});

// Test
connection.test = () => {
  connection.execute(
    `select 1*1 as MultiplicationResult`,
    (err, [result], fields) => {
      if (err) {
        console.log(err);
        process.exit(1);
      }

      if (result.MultiplicationResult === 1)
        console.log(`Connected to database - ${process.env.DB_NAME}`);
    }
  );
};

export default connection;
