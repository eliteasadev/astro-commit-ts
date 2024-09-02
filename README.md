# 🚀 Astro Commit

# Installation with npm

```bash
npm install astro-commit-ts --save-dev
```

## Run the command to configure the tool

```bash
npx astro-commit-init
```

## Select the language

(Move up and down to reveal more choices)

```bash
? What language do you want to work with? (Use arrow keys)
❯ Español
  English
```

## Select the file name (optional)

```bash
? What name do you want to give to the configuration file? (commit.config.mjs)
```

## Add the following script to the package.json file

```javascript
// package.json
"scripts" {
    "commit": "node commit.config.mjs"
}
```

## How to use

```bash
# Add changes to the git stage
git add .

# Commit changes
npm run commit
```
