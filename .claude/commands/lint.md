---
allowed-tools: Bash(npx oxlint@latest:*), Bash(npm run lint:*)
description: Run oxlint on the project
---

## Your task

Run the linter and report any issues.

If a `lint` script exists in package.json, run:

```
npm run lint
```

Otherwise run oxlint directly:

```
npx oxlint@latest src/
```

Report all errors and warnings. If there are fixable issues, ask the user whether to apply auto-fixes.
