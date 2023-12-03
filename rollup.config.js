import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import sucrase from "@rollup/plugin-sucrase";
import bundleScss from "rollup-plugin-bundle-scss";
import pkg from "./package.json" assert { type: "json" };

export default {
  input: "index.ts",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
    resolve(),
    commonjs(),
    terser(),
    bundleScss(),

    sucrase({
      exclude: ["node_modules/**"],
      transforms: ["typescript", "jsx"],
    }),
  ],
  external: Object.keys(pkg.peerDependencies),
};
