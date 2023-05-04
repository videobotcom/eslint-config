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

#### React
```bash
pnpm add -D eslint @suppayami/eslint-config-react
```

### Config `.eslintrc`

#### Basic
```json
{
  "extends": "@suppayami/basic"
}
```

#### Vue
```json
{
  "extends": "@suppayami/vue"
}
```

#### React
```json
{
  "extends": "@suppayami/react"
}
```

### Guide
- Use with formatter such as `prettier` for more consistent format, the lint is not supposed to be a full fledge formatter
- Use with tools such as EditorConfig for more consistent display on Code Editor/IDE
