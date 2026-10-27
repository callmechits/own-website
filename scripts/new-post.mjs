// scripts/new-post.mjs
// -----------------------------------------------------------------------------
// Daily-blogging helper. Run:
//     npm run new                    → today's post, untitled
//     npm run new -- "Some title"    → today's post with that title
// It creates src/content/blog/YYYY-MM-DD.md with frontmatter filled in.
// A second post on the same day becomes YYYY-MM-DD-2.md, and so on.
// -----------------------------------------------------------------------------
import { existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Local date (not UTC), so a post written at 11 pm is dated today.
const now = new Date();
const pad = (n) => String(n).padStart(2, '0');
const day = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;

// Find the first free filename for today.
const dir = 'src/content/blog';
let file = join(dir, `${day}.md`);
for (let i = 2; existsSync(file); i++) file = join(dir, `${day}-${i}.md`);

const title = process.argv.slice(2).join(' ') || 'Untitled';

// JSON.stringify quotes the title safely for YAML (handles colons, quotes).
writeFileSync(
  file,
  `---
title: ${JSON.stringify(title)}
date: ${day}
tags: [life]
mood:
draft: true
---

Write here. Set draft to false (or delete the line) when it's ready.
`,
);

console.log(`Created ${file}`);
