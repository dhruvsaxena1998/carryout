import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "carryout",
  pool: {
    max: 5,
    idle: 30000,
    acquire: 60000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected sucessfully");
  })
  .catch((err) => {
    console.log("Unable to connect", err);
    process.exit(1);
  });

export default () => sequelize;
