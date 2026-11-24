import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "I was on time — in a parallel timeline. This timeline's server got distracted by a cat video, and honestly, so did I.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
process.stdout.write(ENTRY);
