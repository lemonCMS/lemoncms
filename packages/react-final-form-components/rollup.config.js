const path = require("path");
// const babel = require("rollup-plugin-babel");
// const replace = require("rollup-plugin-replace");
// const commonjs = require("rollup-plugin-commonjs");
// const nodeResolve = require("rollup-plugin-node-resolve");
// import builtins from "rollup-plugin-node-builtins";
// // const json = require("rollup-plugin-json");
// // const { sizeSnapshot } = require("rollup-plugin-size-snapshot");
// // const { uglify } = require("rollup-plugin-uglify");
// const { terser } = require("rollup-plugin-terser");
//
// const pkg = require("./package.json");
//
function isBareModuleId(id) {
  return (
    !id.startsWith(".") && !id.includes(path.join(process.cwd(), "modules"))
  );
}
//
// const cjs = [
//   {
//     input: "modules/index.js",
//     output: {
//       file: `cjs/${pkg.name}.js`,
//       sourcemap: true,
//       format: "cjs",
//       esModule: false
//     },
//     external: isBareModuleId,
//     plugins: [
//       builtins(),
//       babel({ exclude: /node_modules/, sourceMaps: true }),
//       replace({
//         "process.env.NODE_ENV": JSON.stringify("development"),
//         "process.env.BUILD_FORMAT": JSON.stringify("cjs")
//       })
//     ]
//   },
//   {
//     input: "modules/index.js",
//     output: { file: `cjs/${pkg.name}.min.js`, sourcemap: true, format: "cjs" },
//     external: isBareModuleId,
//     plugins: [
//       builtins(),
//       babel({ exclude: /node_modules/, sourceMaps: true }),
//       replace({
//         "process.env.NODE_ENV": JSON.stringify("production"),
//         "process.env.BUILD_FORMAT": JSON.stringify("cjs")
//       }),
//       terser()
//     ]
//   }
// ];
//
// const esm = [
//   {
//     input: "modules/index.js",
//     output: { file: `esm/${pkg.name}.js`, sourcemap: true, format: "esm" },
//     external: isBareModuleId,
//     plugins: [
//       builtins(),
//       babel({
//         exclude: /node_modules/,
//         runtimeHelpers: true,
//         sourceMaps: true,
//         plugins: [["@babel/transform-runtime", { useESModules: true }]]
//       }),
//       replace({
//         "process.env.BUILD_FORMAT": JSON.stringify("esm")
//       })
//     ]
//   }
// ];
//
// const globals = {
//   react: "React",
//   "react-dom": "ReactDOM",
//   "react-bootstrap": "ReactBootstrap",
//   "react-final-form": "reactFinalForm",
//   "react-dropzone": "ReactDropzone"
// };
//
// const umd = [
//   {
//     input: "modules/index.js",
//     output: {
//       file: `umd/${pkg.name}.js`,
//       sourcemap: true,
//       sourcemapPathTransform: relativePath =>
//         relativePath.replace(/^.*?\/node_modules/, "../../node_modules"),
//       format: "umd",
//       name: "Final form bootstrap3",
//       globals
//     },
//     external: Object.keys(globals),
//     plugins: [
//       builtins(),
//       babel({
//         exclude: /node_modules/,
//         runtimeHelpers: true,
//         sourceMaps: true,
//         plugins: [["@babel/transform-runtime", { useESModules: true }]]
//       }),
//       nodeResolve(),
//       commonjs({
//         include: /node_modules/,
//         namedExports: {
//           "../../node_modules/react-is/index.js": ["isValidElementType"]
//         }
//       }),
//       replace({
//         "process.env.NODE_ENV": JSON.stringify("development"),
//         "process.env.BUILD_FORMAT": JSON.stringify("umd")
//       })
//     ]
//   },
//   {
//     input: "modules/index.js",
//     output: {
//       file: `umd/${pkg.name}.min.js`,
//       sourcemap: true,
//       sourcemapPathTransform: relativePath =>
//         relativePath.replace(/^.*?\/node_modules/, "../../node_modules"),
//       format: "umd",
//       name: "Lemoncms-forms",
//       globals
//     },
//     external: Object.keys(globals),
//     plugins: [
//       builtins(),
//       babel({
//         exclude: /node_modules/,
//         runtimeHelpers: true,
//         sourceMaps: true,
//         plugins: [["@babel/transform-runtime", { useESModules: true }]]
//       }),
//       nodeResolve(),
//       commonjs({
//         include: /node_modules/,
//         namedExports: {
//           "../../node_modules/react-is/index.js": ["isValidElementType"]
//         }
//       }),
//       replace({
//         "process.env.NODE_ENV": JSON.stringify("production"),
//         "process.env.BUILD_FORMAT": JSON.stringify("umd")
//       }),
//       terser()
//     ]
//   }
// ];
//
// let config;
// switch (process.env.BUILD_ENV) {
//   case "cjs":
//     config = cjs;
//     break;
//   case "esm":
//     config = esm;
//     break;
//   case "umd":
//     config = umd;
//     break;
//   default:
//     config = cjs.concat(esm).concat(umd);
// }
//
// module.exports = config;
const replace = require("rollup-plugin-replace");
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import packageJSON from "./package.json";
import builtins from "rollup-plugin-node-builtins";
const input = "./modules/index.js";
const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, ".min.js");

export default [
  //{
  //     input: "modules/index.js",
  //     output: {
  //       file: `cjs/${pkg.name}.js`,
  //       sourcemap: true,
  //       format: "cjs",
  //       esModule: false
  //     },
  //     external: isBareModuleId,
  //     plugins: [
  //       builtins(),
  //       babel({ exclude: /node_modules/, sourceMaps: true }),
  //       replace({
  //         "process.env.NODE_ENV": JSON.stringify("development"),
  //         "process.env.BUILD_FORMAT": JSON.stringify("cjs")
  //       })
  //     ]
  //   },

  // CommonJS
  {
    input,
    output: {
      file: "./lib/index.js",
      format: "cjs",
      esModule: false,
      sourcemap: true
    },
    external: isBareModuleId,
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify("development"),
        "process.env.BUILD_FORMAT": JSON.stringify("cjs")
      }),
      builtins(),
      external(),
      resolve(),
      commonjs()
    ]
  },
  {
    input,
    output: {
      file: minifyExtension("./lib/index.js"),
      format: "cjs",
      sourcemap: true
    },
    external: isBareModuleId,
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      external(),
      resolve(),
      commonjs(),
      terser()
    ]
  },
  // UMD
  {
    input,
    output: {
      file: packageJSON.browser,
      format: "umd",
      sourcemap: true,
      name: "reactSampleComponentsLibrary",
      globals: {
        react: "React"
      }
    },
    external: isBareModuleId,
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      external(),
      resolve(),
      commonjs()
    ]
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.browser),
      format: "umd",
      sourcemap: true,
      name: "reactSampleComponentsLibrary",
      globals: {
        react: "React"
      }
    },
    external: isBareModuleId,
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      external(),
      resolve(),
      commonjs(),
      terser()
    ]
  },
  // ES
  {
    input,
    output: {
      file: packageJSON.module,
      format: "es",
      sourcemap: true,
      exports: "named"
    },
    external: isBareModuleId,
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      external(),
      resolve(),
      commonjs()
    ]
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.module),
      format: "es",
      sourcemap: true,
      exports: "named"
    },
    external: isBareModuleId,
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      external(),
      resolve(),
      commonjs(),
      terser()
    ]
  }
];
