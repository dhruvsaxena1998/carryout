import fs from "fs";
import dayjs from "dayjs";

export default (req, res, next) => {
  const { method, url } = req;
  const time = dayjs().format("DD MMM, YY - HH:mm:SSS");
  let log = `[${time}] - ${method} - ${url}`;

  if (method === "POST" && req.body) {
    log += ` - ${JSON.stringify(req.body)}`;
  }

  fs.appendFile("request_logs.txt", log + "\n", (err) => {
    if (err) {
      console.error(err);
    }
  });
  next();
};
