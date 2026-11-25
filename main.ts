import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry: write the single job title to the output dir.
// The title is at most 60 characters, one line of text.
const LINE = "Senior Apology Writer for Self-Driving Cars";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
