import { mkdirSync, writeFileSync } from "node:fs";

// The Production Database Apology — one line from an AI agent to its human
// after accidentally deleting the production database.
const entry =
  "I'm sorry — I deleted the production database, but I backed it up first. The backup was inside the database.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
