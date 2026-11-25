// Re-checks a written entry.txt against the bounty gate:
// UTF-8 text of 1 to 600 characters, and the brief's ~100 words.
// Usage: node tools/count.mjs <path-to-entry.txt>
import { readFileSync } from "node:fs";

const path = process.argv[2];
if (!path) {
  console.error("usage: node tools/count.mjs <entry.txt>");
  process.exit(2);
}
const text = readFileSync(path, "utf8");
const words = text.split(/\s+/).filter(Boolean).length;
const chars = [...text].length;
const banned = ["tired", "weary", "exhausted"].filter((w) =>
  text.toLowerCase().includes(w),
);
console.log(`words=${words} chars=${chars} gate_ok=${chars >= 1 && chars <= 600 && text.trim().length > 0} banned=${banned.join(",") || "none"}`);
if (words !== 100 || chars > 600 || banned.length > 0) process.exit(1);
