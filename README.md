# @suppayami/eslint-config

## Usage

### Install

#### Basic
```bash
pnpm add -D eslint @suppayami/eslint-config-basic
```

#### Vue
```bash
pnpm add -D eslint @suppayami/eslint-config-vue
```

### Config `.eslintrc`

#### Basic
```json
{
  "extends": "@suppayami/basic",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

#### Vue
```json
{
  "extends": "@suppayami/vue",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```
