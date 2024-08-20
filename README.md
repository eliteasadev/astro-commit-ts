# 🚀 Astro Commit

# Installation with npm

```bash
npm install astro-commit-ts --save-dev
```

## Add the following configuration file

```javascript
// astrocommit.config.mjs
import { createCommit } from "astro-commit-ts";

createCommit().catch((error) => {
  console.error("Error:", error);
});
```

## Add the following script to the package.json file

```javascript
// package.json
"scripts" {
    "commit": "node astrocommit.config.mjs"
}
```

## How to use

```bash
# Add changes to the git stage
git add .

# Commit changes
npm run commit
```
