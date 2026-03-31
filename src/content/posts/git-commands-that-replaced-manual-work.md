---
title: "Two Claude Commands That Replaced a Lot of Manual Git Work"
date: 2026-03-31
tags: ["git", "workflow", "claude", "ai"]
description: "How two Claude Code slash commands changed the way I handle git — not by doing something new, but by removing the friction from things I was already doing."
---

There are things in a development workflow that you do constantly, do correctly maybe 80% of the time, and quietly resent. For me, it was the git ceremony around finishing a piece of work — branching, committing, pushing, opening a PR — and then the cleanup afterwards.

Not complicated. Just repetitive. Repetitive enough and tempting to occasionally cut corners: commit directly to main, skip the PR, leave merged branches sitting around until the list grow bigger.

I've been using two slash commands that handle both ends of this. They didn't teach me anything new about git but the overall flow is smoother.

## The problem with low-friction shortcuts

The shortcut I used most was `git checkout -b "my_branch" && git add . && git commit -m "wip" && git push`. It was that doing it right required switching context: think of a branch name, write a real commit message, open GitHub, fill in a PR description.

The fix wasn't discipline. It was removing the friction.

## `/commit-push-pr`

This command handles the full flow: read the current diff, create a branch with a name that matches the changes, write a conventional commit message, push, and open a PR with a summary and test plan. One instruction, no browser tab, no mental overhead.

The commit messages got better too. Not because I'm putting more thought in, but because the AI reads the actual diff and produces a message that describes what changed. That's more than I was doing when I typed `"wip"`.

## `/clean_gone`

After a PR is merged, the branch is usually deleted on GitHub automatically. The local copy stays. Over a few weeks you accumulate a list of branches that don't correspond to anything anymore — ghost branches. This is the command needed to execute
`git checkout main && git pull && git branch` - with this list of git branches is displayed where then branch name should be copied manually and used in `git branch -D "my_branch"`.

`/clean_gone` switches to main, pulls latest, prunes remote-tracking refs, and lists branches where user specifies which ones to remove.

The whole thing takes a few seconds and I never have to think about it. I run it after merging a PR and the list stays clean.

## The actual shift

Neither of these commands does anything you couldn't do manually. The git commands underneath them are the same ones you already know.

What's different is that the right way to do things is now the easy way. That's the shift. When the overhead of doing something properly matches the overhead of cutting a corner, you stop cutting corners — not because you're more disciplined, but because the trade-off changed.

That's what good tooling does. It doesn't add new capabilities. It makes the correct path the path of least resistance.
