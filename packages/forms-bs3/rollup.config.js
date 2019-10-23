const babel = require("rollup-plugin-babel");
const replace = require("rollup-plugin-replace");
const commonjs = require("rollup-plugin-commonjs");
const nodeResolve = require("rollup-plugin-node-resolve");
const json = require("rollup-plugin-json");
const { sizeSnapshot } = require("rollup-plugin-size-snapshot");
const { uglify } = require("rollup-plugin-uglify");

const pkg = require("./package.json");

function isBareModuleId(id) {
  return !id.startsWith(".") && !id.startsWith("/");
}

const cjs = [
  {
    input: "modules/index.js",
    output: { file: `cjs/${pkg.name}.js`, format: "cjs" },
    external: isBareModuleId,
    plugins: [
      json(),
      babel({
        exclude: ["node_modules/**", "**/*.json", "*.json"]
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify("development"),
        "process.env.BUILD_FORMAT": JSON.stringify("cjs")
      })
    ]
  },
  {
    input: "modules/index.js",
    output: { file: `cjs/${pkg.name}.min.js`, format: "cjs" },
    external: isBareModuleId,
    plugins: [
      json(),
      babel({ exclude: ["node_modules/**", "**/*.json", "*.json"] }),
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
        "process.env.BUILD_FORMAT": JSON.stringify("cjs")
      }),
      uglify()
    ]
  }
];

const esm = [
  {
    input: "modules/index.js",
    output: { file: `esm/${pkg.name}.js`, format: "esm" },
    external: isBareModuleId,
    plugins: [
      json(),
      babel({
        exclude: ["node_modules/**", "**/*.json", "*.json"],
        runtimeHelpers: true,
        plugins: [["@babel/transform-runtime", { useESModules: true }]]
      }),
      replace({ "process.env.BUILD_FORMAT": JSON.stringify("esm") }),
      sizeSnapshot()
    ]
  }
];

const globals = { react: "React", "react-bootstrap": "ReactBootstrap" };

const umd = [
  {
    input: "modules/index.js",
    output: {
      file: `umd/${pkg.name}.js`,
      format: "umd",
      name: "Miniverse",
      globals
    },
    external: Object.keys(globals),
    plugins: [
      json(),
      babel({
        exclude: ["node_modules/**", "**/*.json", "*.json"],
        runtimeHelpers: true,
        plugins: [["@babel/transform-runtime", { useESModules: true }]]
      }),
      nodeResolve({
        mainFields: ["module", "main", "jsnext"],
        preferBuiltins: true,
        browser: true
      }),
      commonjs({
        include: /node_modules/,
        namedExports: {
          "node_modules/react-is/index.js": ["isValidElementType"],
          "node_modules/fast-equals/dist/fast-equals.js": ["deepEqual"]
        }
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify("development"),
        "process.env.BUILD_FORMAT": JSON.stringify("umd")
      }),
      sizeSnapshot()
    ]
  },
  {
    input: "modules/index.js",
    output: {
      file: `umd/${pkg.name}.min.js`,
      format: "umd",
      name: "Lemoncms-forms",
      globals
    },
    external: Object.keys(globals),
    plugins: [
      json(),
      babel({
        exclude: ["node_modules/**", "**/*.json", "*.json"],
        runtimeHelpers: true,
        plugins: [["@babel/transform-runtime", { useESModules: true }]]
      }),
      nodeResolve({
        mainFields: ["module", "main", "jsnext"],
        preferBuiltins: true,
        browser: true
      }),
      commonjs({
        include: /node_modules/,
        namedExports: {
          "node_modules/react-is/index.js": ["isValidElementType"],
          "node_modules/fast-equals/dist/fast-equals.js": ["deepEqual"]
        }
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
        "process.env.BUILD_FORMAT": JSON.stringify("umd")
      }),
      sizeSnapshot(),
      uglify()
    ]
  }
];

let config;
switch (process.env.BUILD_ENV) {
  case "cjs":
    config = cjs;
    break;
  case "esm":
    config = esm;
    break;
  case "umd":
    config = umd;
    break;
  default:
    config = cjs.concat(esm).concat(umd);
}

module.exports = config;
