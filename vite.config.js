import { defineConfig } from 'vite'
import { resolve } from 'path';
// import autoprefixer from 'autoprefixer'


// VARS 
export const root = resolve(__dirname, 'public');
export const outDir = resolve(__dirname, 'build');
export const src = resolve(__dirname, 'src');


// modules
import alias from './modules/viteAlias';
import plugins from './modules/vitePlugins';



export default defineConfig({
  base: '/Dana/',
  plugins,
  server: { port: 3030 },
  resolve: { alias },
  build: {
    minify: true
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: { scss: { additionalData: `@import "@/styles/files/index.scss";` } },
    // postcss: { plugins: [autoprefixer()] }
  }
})
