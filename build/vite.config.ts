import { defineConfig } from "vite";

export default defineConfig({
    css: { 
        postcss: "./build/postcss.config.mjs" 
    },
    plugins: [],
    build: {
        rollupOptions: {
            input: {
                base: "css/base.css",
                handheld: "css/handheld.css",
                screen: "css/screen.css",
                ice: "css/ice.css",
                index: "index.html",
            },
            output: {
                entryFileNames: `assets/[name].js`,
                chunkFileNames: `assets/[name].js`,
                assetFileNames: `assets/[name].[ext]`
            }
        }
    },
    root: "../"
})