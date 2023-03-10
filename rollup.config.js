/*
 * @description Rollup configuration for the bundle
 */

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import url from "@rollup/plugin-url";
import pkg from "./package.json";

export default {
  // From where
  input: "src/index.ts",
  // To where (binarys)
  output: [
    // Create the commonJS package
    { file: pkg.main, format: "cjs", sourcemap: true },
    // Create the ESModule package
    { file: pkg.module, format: "esm", sourcemap: true },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    url(),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
};
