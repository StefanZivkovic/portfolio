---
allowed-tools: Bash(git checkout --branch:*), Bash(git add:*), Bash(git status:*), Bash(git push:*), Bash(git commit:*), Bash(gh pr create:*)
description: Commit, push, and open a PR
---

## Context

- Current git status: !`git status`
- Current git diff (staged and unstaged changes): !`git diff HEAD`
- Current branch: !`git branch --show-current`

## Your task

Based on the above changes:

1. **Always create a new branch** — never push directly to main, even if already on main with unpushed commits. Create a descriptive branch name based on the changes (e.g. `feat/add-blog-layout`, `fix/typo-in-post`).
2. Create a single commit with an appropriate message (skip if working tree is clean and branch already has commits).
3. Push the branch to origin with `-u`.
4. Create a pull request using `gh pr create` with a summary and test plan.
5. Return the PR URL.

You have the capability to call multiple tools in a single response. You MUST do all of the above in a single message. Do not use any other tools or do anything else. Do not send any other text or messages besides these tool calls.
