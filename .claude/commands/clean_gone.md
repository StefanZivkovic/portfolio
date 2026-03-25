---
description: Switch to main, pull latest, delete all non-main local branches (including gone ones and their worktrees).
---

## Your Task

Clean up local branches by switching to main and removing all other branches.

## Commands to Execute

1. **Switch to main and pull latest**

   ```bash
   git checkout main && git pull
   ```

2. **Remove worktrees and delete all non-main branches**

   ```bash
   git fetch --prune

   # Delete [gone] branches (worktrees first)
   git branch -vv | grep '\[gone\]' | sed 's/^[+* ]*//' | awk '{print $1}' | while read branch; do
     worktree=$(git worktree list | grep "\[$branch\]" | awk '{print $1}')
     if [ ! -z "$worktree" ] && [ "$worktree" != "$(git rev-parse --show-toplevel)" ]; then
       git worktree remove --force "$worktree"
     fi
     git branch -D "$branch"
   done

   # Delete all remaining non-main branches
   git branch | grep -v '^\* main' | xargs -r git branch -d
   ```

## Expected Behavior

- Switched to main and pulled latest
- All non-main local branches deleted
- Worktrees for gone branches removed
- Report what was cleaned up, or confirm nothing needed cleaning
