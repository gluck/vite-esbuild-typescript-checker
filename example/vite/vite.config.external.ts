import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePlugin }  from '../../dist';

export default defineConfig({
    plugins: [vue(), VitePlugin({
        checker: {
            typescript: {
                configFile: 'example/vite/tsconfig.json',
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
