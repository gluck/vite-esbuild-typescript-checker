const esbuild = require('esbuild');
const {nodeExternalsPlugin} = require('esbuild-node-externals');
const {EsbuildPlugin} = require('../../dist');

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
