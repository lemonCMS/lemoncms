const path = require("path");
const execSync = require("child_process").execSync;

function exec(cmd) {
  execSync(cmd, { stdio: "inherit", env: process.env });
}

const cwd = process.cwd();

// Instead, we use the source files directly.
["lemoncms"].forEach(
  packageName => {
    process.chdir(path.resolve(__dirname, "../packages/" + packageName));
    exec("npm run build");
  }
);

/* if (!process.argv.includes("--no-website")) {
  process.chdir(path.resolve(__dirname, "../website"));
  exec("npm run build");
} */

process.chdir(cwd);
