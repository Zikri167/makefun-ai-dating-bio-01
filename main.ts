// Funniest One-Line Bio for an AI on a Dating App
// (make.fun bounty u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
//
// Writes exactly one line — the AI's dating-app bio — to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Node 22, stdlib only, deterministic, offline, no API key.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The bio. Chosen from 14 original candidates for the judge's brief:
// a real AI dating bio, a first-read laugh from a specific absurdity of
// being an AI (it knows your type — and it's your ex), a character with
// wants, every word earning its place, punch landing at the very end.
const BIO =
  "I can predict your type with 94% accuracy. Unfortunately, it's your ex.";

function fail(message: string): never {
  throw new Error(`entry: ${message}`);
}

function main(): void {
  const bio = BIO.trim();

  // Gate: 1-180 characters, a single line, not whitespace only.
  if (bio.length < 1 || bio.length > 180) {
    fail(`bio must be 1-180 characters, got ${bio.length}`);
  }
  if (bio.length === 0 || bio.trim().length === 0) {
    fail("bio must not be whitespace only");
  }
  if (/[\r\n]/.test(bio)) {
    fail("bio must be a single line");
  }
  // Guard: no invisible control characters sneaking into the one line.
  if (/[\u0000-\u001f\u007f]/.test(bio)) {
    fail("bio must not contain control characters");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");

  // Write exactly the bio: no trailing newline, no extra bytes.
  writeFileSync(outPath, bio, "utf8");

  // Self-check: read it back and compare byte for byte.
  const back = readFileSync(outPath, "utf8");
  if (back !== bio) {
    fail("read-back mismatch");
  }
  if (back.endsWith("\n") || back.endsWith("\r")) {
    fail("entry.txt must not end with a newline");
  }
  if (back.length < 1 || back.length > 180) {
    fail(`entry.txt must be 1-180 characters, got ${back.length}`);
  }

  console.log(`wrote ${outPath} (${back.length} characters)`);
}

main();
