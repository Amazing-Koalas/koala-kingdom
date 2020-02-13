---
title: Build system
---

## Client Build system

Using webpack

### File structure

Files:

- `client/tsconfig.json`: tsconfig that vscode uses for completion
- `client/tsconfig.for-webpack-config.json`: tsconfig that webpack uses
- `config/client.ts`: configuration for client
- `webpack.config.ts`

### Webpack

<!-- TODO: This needs confirmation -->

`tsconfig.json` is the base config. This is what vscode will use for auto
correct for the browser. `tsconfig-for-webpack-config.json` is what webpack will
use as node is used instead of the browser.

#### Webpack plugins

- `webpack-manifest-plugin`
: what does this do?

- ``
