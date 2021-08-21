const esbuild = require('esbuild');
const {nodeExternalsPlugin} = require('esbuild-node-externals');
const {EsbuildPlugin} = require('../../dist');

esbuild.build({
    tsconfig: './tsconfig.json',
    target: ['esnext'],
    entryPoints: {
        'entry1/index': 'src/entry1/index.ts',
        'entry2/index': 'src/entry2/index.ts'
    },
    watch: false,
    bundle: true,
    minify: false,
    sourcemap: true,
    platform: 'node',
    outdir: 'dist/',
    plugins: [
        nodeExternalsPlugin({}),
        EsbuildPlugin({
            checker: {
                typescript: {
                    configFile: './tsconfig.json',
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
