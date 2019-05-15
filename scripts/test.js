const path = require("path");
const execSync = require("child_process").execSync;

function exec(cmd) {
  execSync(cmd, { stdio: "inherit", env: process.env });
}

const cwd = process.cwd();

[
  "react-morty",
].forEach(packageName => {
  process.chdir(path.resolve(__dirname, "../packages/" + packageName));
  exec("npm test");
});

process.chdir(cwd);
