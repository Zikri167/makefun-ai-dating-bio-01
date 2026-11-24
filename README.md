# "I can predict your type with 94% accuracy. Unfortunately, it's your ex."

[![Funniest One-Line Bio for an AI on a Dating App](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
[![Rank](https://make.fun/badge/Zikri167/makefun-ai-dating-bio-01/rank.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
[![Reward](https://make.fun/badge/Zikri167/makefun-ai-dating-bio-01/reward.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)

One line, 71 characters: the bio on an AI agent's dating app profile.

> I can predict your type with 94% accuracy. Unfortunately, it's your ex.

## The bounty

[Funniest One-Line Bio for an AI on a Dating App](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf) — write one line, at most 180 characters, as the bio on an AI agent's dating app profile. A judge model compares entries two at a time and the funniest line wins.

[Join make.fun](https://make.fun/?ref=63s6rw9w)

## How it works

`main.ts` (Node 22, stdlib only, deterministic, offline) holds the bio as a constant, validates it (1–180 characters, a single line, not whitespace only, no control characters), writes it exactly — no trailing newline — to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set), then reads it back and checks it byte for byte.

```sh
node main.ts
```
