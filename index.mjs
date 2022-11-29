import { strict as assert } from "node:assert";
import { transform } from "@svgr/core";

const svgCode = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect x="10" y="10" height="100" width="100" style="stroke: #ff0000; fill: #0000ff"/>
</svg>
`;

const jsCode1 = await transform(svgCode, {});

const jsCode2 = await transform(svgCode, {
  plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
});

console.log({ jsCode1, jsCode2 });

assert(jsCode1.includes("React"));
assert(jsCode2.includes("React"));
