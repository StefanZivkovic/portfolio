---
description: Switch to main, pull latest, prune gone branches, then ask user which remaining branches to delete.
---

## Your Task

1. **Switch to main and pull latest**

   ```bash
   git checkout main && git pull
   ```

2. **Fetch and list branch state**

   ```bash
   git fetch --prune
   git branch -vv
   ```

3. **Delete all [gone] branches** (those marked `[gone]` in the output above) without asking.

4. **List remaining non-main branches**

   ```bash
   git branch
   ```

   If there are any, present them as a numbered list and ask the user which ones to delete. Wait for their response before deleting anything. Accept "all", "none", or specific numbers/names.

5. Delete the branches the user selected.

## Expected Behavior

- Switched to main and pulled latest
- Gone branches deleted automatically
- User prompted to pick which remaining branches to remove
- Report what was cleaned up
