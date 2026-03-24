---
allowed-tools: Bash(npm run format:*), Bash(npx prettier:*)
description: Format code with Prettier
---

## Your task

Run Prettier to format all project files.

If a `format` script exists in package.json, run:
```
npm run format
```

Otherwise run directly:
```
npx prettier --write .
```

Report which files were changed. If no files changed, confirm everything was already formatted.
