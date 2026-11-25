// The Tired Dark Lord: A 100-Word Villain Monologue
// program/v1 entry: writes one monologue to /output/entry.txt.
// Node 22, stdlib only, no network, no wall clock, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Exactly 100 words, 485 characters. The tiredness lives in the rhythm:
// the lost place in the chant, the short bursts, the deflections, and a
// scheme (the tower, the black gate, the dead building by night) that the
// speaker now supervises from his bed. The words "tired", "weary" and
// "exhausted" never appear; the judge brief asks for it felt, not said.
const MONOLOGUE = [
  "Again? Very well. Rise, rise... where was I. Ah. The chant.",
  "Forty long years I have raised this same army. You heroes kill them.",
  "I raise them. You kill them. It is not war any more. It is a rota.",
  "My scheme? Still the tower. Still the black gate. Only now the dead",
  "build by night and I... sit. Sit and watch the torches gutter. No.",
  "Do not cheer. I am not done. I am never done. That is the curse no",
  "bard sings of. Begin the great assault at dawn. Dawn. I shall watch",
  "it all from my bed.",
].join(" ");

function main(): void {
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), MONOLOGUE, "utf8");
}

main();
