import { defineConfig } from "vite";
import vitePluginPugStatic from "@macropygia/vite-plugin-pug-static";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist/",
    emptyOutDir: true,
    rollupOptions: {
      input: "src/index.pug",
      output: {
        entryFileNames: `assets/js/[name].js`,
        chunkFileNames: `assets/js/[name].js`,
        assetFileNames: (assetInfo) => {
          if (/\.( gif|jpeg|jpg|png|svg|webp| )$/.test(assetInfo.name)) {
            return "assets/images/[name].[ext]";
          }
          if (/\.css$/.test(assetInfo.name)) {
            return "assets/css/[name].[ext]";
          }
          return "assets/[name].[ext]";
        },
      },
    },
  },
  //pug設定
  plugins: [
    vitePluginPugStatic({
      buildOptions: { basedir: "src" },
      serveOptions: { basedir: "src" },
    }),
  ],
  //表示機能
  server: {
    open: true,
    host: true,
    port: 3000,
  },
});
