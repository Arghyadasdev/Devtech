import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // These two rules flag intentional patterns used throughout the
      // canvas/WebGL hero components and client-only randomization effects:
      // mutating a ref each render to keep a rAF loop's closure on the
      // latest values ("latest ref" pattern), and setting state inside an
      // effect to generate browser-only data (Math.random, matchMedia)
      // without causing a server/client hydration mismatch. Neither is a
      // bug here; both are standard escape hatches the rules don't model.
      "react-hooks/refs": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
