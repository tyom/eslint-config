# Tyom's ESLint config

Base for JS projects.

## Configs

- **base**
Base ES 2018 config for use with node and on the client. 

- **prettier**
Includes *base* and Prettier plugin recommendations. Additional preferences.

- **jest**
Includes *base* and Jest plugin recommendations. Additional preferences.

- **Vue**
Includes *base* and Vue plugin strong recommendations. Additional preferences.

## Install

```
npm i eslint-config-tyom
```

```
yarn add eslint-config-tyom
```

Then to import everything in `eslintrc`:

```json
"extends": [
  "tyom"
]
```

individual configs:

```json
"extends": [
  "tyom/prettier",
  "tyom/vue"
]
```
