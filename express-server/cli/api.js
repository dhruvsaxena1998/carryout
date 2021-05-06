const fs = require("fs");
const path = require("path");

const [, , name, version = "v1"] = process.argv;
const dir = path.join(__dirname, `../src/api/${version}`);
const capitalize = (apiName) =>
  apiName.charAt(0).toUpperCase() + apiName.slice(1);

const pathdir = dir + `/${name}`;

const templates = {
  routes: fs.readFileSync(
    path.join(__dirname, "./templates/routes.js"),
    "utf-8"
  ),
  model: fs.readFileSync(path.join(__dirname, "./templates/model.js"), "utf-8"),
  config: fs.readFileSync(
    path.join(__dirname, "./templates/config.json"),
    "utf-8"
  ),
  controller: fs.readFileSync(
    path.join(__dirname, "./templates/controller.js"),
    "utf-8"
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

if (version === "v2") {
  fs.writeFileSync(
    `${pathdir}/controllers/config.json`,
    templates.config.replace(/#tablename#/, name.toLowerCase()),
    "utf-8"
  );
}

if (version === "v1") {
  // Model
  fs.mkdirSync(`${pathdir}/model`, (err) => {
    if (err) {
      console.log(err);
      throw err;
    }
  });

  fs.writeFileSync(
    `${pathdir}/model/index.js`,
    templates.model.replace(/#model#/, capitalize(name)),
    "utf-8"
  );
}

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
