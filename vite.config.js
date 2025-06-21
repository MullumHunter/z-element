import { defineConfig } from 'vite';
import { resolve } from 'path';
export default defineConfig({
    build: {
        assetsDir: './z-element',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            }
        }
    }
});
