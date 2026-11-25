// The Restraining Order — one-line joke excusing a missed deadline.
// Writes a single sentence to entry.txt: a deadline that filed a
// restraining order against the calendar, so all contact now goes
// through lawyers. Concrete image up front, reversal at the end.
// Gate: entry.txt must be UTF-8 text of 1 to 200 characters, one line.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entry =
  "My deadline filed a restraining order against my calendar; we now communicate through lawyers.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${entry.length} characters)`);
