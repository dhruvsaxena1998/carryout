import fs from "fs";
import chalk from "chalk";
import dayjs from "dayjs";

export default (req, res, next) => {
  const { method, url } = req;
  const { statusCode } = res;
  const log = `[${dayjs().format(
    "DD MMM, YY - HH:mm:SSS"
  )}] - ${method} - ${url} - ${statusCode}`;

  fs.appendFile("request_logs.txt", log + "\n", (err) => {
    if (err) {
      console.error(err);
    }

    console.log(chalk.blue("[logger] - ") + log);
  });
  next();
};
