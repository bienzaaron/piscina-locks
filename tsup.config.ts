import { defineConfig } from "tsup";

export default defineConfig({
  outDir: "dist/lib",
  entry: ["./lib/index.ts"],
  format: ["cjs", "esm"],
  target: "node18",
  sourcemap: true,
  clean: true,
  minify: false,
  shims: true,
  dts: true,
});
