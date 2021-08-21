## Fork typescript | *.vue checker plugin for vite | esbuild
This plugin is written based on the plugin from Type Strong for the webpack (https://github.com/TypeStrong/fork-ts-checker-webpack-plugin).

Attention! The plugin is currently being tested. Please report any problems found in the Issue.

## Features

* Speeds up [TypeScript](https://github.com/Microsoft/TypeScript) type checking and [ESLint](https://eslint.org/) linting (by moving each to a separate process) 🏎
* Supports [Vue Single File Component](https://vuejs.org/v2/guide/single-file-components.html)
* Displays nice error messages with the [code frame](https://babeljs.io/docs/en/next/babel-code-frame.html) formatter
* Prompt errors in Vite HMR overlay and terminal console
* Support both serve and build mode

**Motivation:** Vite and Esbuild are new and very fast build tools. But they do not have typescript type checking, as well as scripts in *.vue files. This plugin solves this problem. The "watch" mode is supported.

## Installation

This plugin requires minimum **Node.js 10**, **Vite 2**, **EsBuild 0.12,** **Webpack 4**, **TypeScript 2.7** and optionally **ESLint 6**


```sh
# with npm
npm install --save-dev fork-ts-checker-worker

# with yarn
yarn add --dev fork-ts-checker-worker

# with pnpm
pnpm add -D fork-ts-checker-worker
```

All plugin settings are suitable from the webpack version, follow the link https://github.com/TypeStrong/fork-ts-checker-webpack-plugin.

## Playground:
Examples of using the plugin are located in the "example" folder.
### EsBuild
```sh
cd example/esbuild
pnpm install
pnpm start
```
### EsBuild multiple entry points
```sh
cd example/esbuild2entry
pnpm install
pnpm start
```
### Vite
```sh
cd example/vite
pnpm install
pnpm dev | pnpm build
```

## Vite example
```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePlugin }  from 'fork-ts-checker-worker';

export default defineConfig({
    plugins: [vue(), VitePlugin({
        vite: {
            overlay: true
        },
        checker: {
            typescript: {
                extensions: {
                    vue: {
                        enabled: true,
                        compiler: '@vue/compiler-sfc'
                    }
                }
            }
        }
    })]
})
```
## Esbuild example
```js
const esbuild = require('esbuild');
const {nodeExternalsPlugin} = require('esbuild-node-externals');
const {EsbuildPlugin} = require('fork-ts-checker-worker');

esbuild.build({
    tsconfig: './src/tsconfig.json',
    target: ['esnext'],
    entryPoints: ['src/index.ts'],
    watch: false,
    bundle: true,
    minify: false,
    sourcemap: true,
    platform: 'node',
    outfile: 'dist/index.js',
    plugins: [
        nodeExternalsPlugin({}),
        EsbuildPlugin({
            checker: {
                typescript: {
                    configFile: './src/tsconfig.json',
                    extensions: {
                        vue: {
                            enabled: true,
                            compiler: '@vue/compiler-sfc'
                        }
                    }
                }
            }
        })
    ],
}).catch(() => process.exit(1));

```

## Credits

I express my great gratitude to TypeStrong, the author of the plugin for webpack (https://github.com/TypeStrong/fork-ts-checker-webpack-plugin). 

## License

MIT License
