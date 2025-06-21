import { defineConfig } from 'vite';
import { resolve } from 'path';
export default defineConfig({
    build: {
        assetsDir: './chanks',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                // Добавьте другие HTML-файлы, если они есть
            },
            output: {
                assetFileNames: 'chanks/[name].[ext]',
                entryFileNames: 'chanks/[name].js',
                chunkFileNames: 'chanks/[name].js'
            }
        }
    }
});
