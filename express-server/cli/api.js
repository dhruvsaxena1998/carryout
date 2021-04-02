const fs = require("fs");
const path = require("path");

const [, , name, version = "v1"] = process.argv;
const dir = path.join(__dirname, `../src/api/${version}`);

const pathdir = dir + `/${name}`;

const templates = {
  routes: fs.readFileSync(path.join(__dirname, "./templates/routes.js")),
  controller: fs.readFileSync(
    path.join(__dirname, "./templates/controller.js")
  ),
};

// Remove if already exists...
const exists = fs.existsSync(pathdir);
if (exists) {
  fs.rmdirSync(pathdir, { require: true });
}

// Create Directory
fs.mkdirSync(pathdir, (err) => {
  if (err) {
    console.log(err);
    throw err;
  }
});

// Controllers
fs.mkdirSync(`${pathdir}/controllers`, (err) => {
  if (err) {
    console.log(err);
    throw err;
  }
});
fs.writeFileSync(
  `${pathdir}/controllers/index.js`,
  templates.controller,
  "utf-8"
);

// Routes
fs.mkdirSync(`${pathdir}/routes`, (err) => {
  if (err) {
    console.log(err);
    throw err;
  }
});
fs.writeFileSync(`${pathdir}/routes/index.js`, templates.routes, "utf-8");

// Services
fs.mkdirSync(`${pathdir}/services`);
