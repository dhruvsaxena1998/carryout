#!/usr/bin/env zx
const template = {
  route: await fs.readFile("./template/routes.ts", "utf8"),
  controller: await fs.readFile("./template/controller.ts", "utf8"),
};

const apiName = String(await question("api:name ")).toLowerCase();
const path = "../src/api";
cd(path);
await $`mkdir ${apiName}`;

await fs.writeFile(
  `${path}/${apiName}/routes.ts`,
  template["route"].replace(/{{apiName}}/g, apiName)
);

await fs.writeFile(
  `${path}/${apiName}/controller.ts`,
  template["controller"].replace(/{{apiName}}/g, apiName)
);

console.log(`🎉 Generated api:${apiName}`);
