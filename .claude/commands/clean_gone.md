---
description: Switch to main, pull latest, prune gone branches, then ask user which remaining branches to delete.
---

## Context

- Local branches: !`git branch`
- Gone branches (remote deleted): !`git fetch --prune 2>/dev/null; git branch -vv | grep '\[gone\]' | awk '{print $1}'`

## Your Task

1. **Switch to main and pull latest**

   ```bash
   git checkout main && git pull
   ```

2. **Delete all [gone] branches** (remote has been deleted) without asking.

3. **If there are remaining non-main branches**, present them as a numbered list and ask the user which ones to delete. Wait for their response before deleting anything. Accept "all", "none", or specific numbers/names.

4. Delete the branches the user selected.

## Expected Behavior

- Switched to main and pulled latest
- Gone branches deleted automatically
- User prompted to pick which remaining branches to remove
- Report what was cleaned up
