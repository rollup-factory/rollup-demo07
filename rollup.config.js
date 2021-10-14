// rollup.config.js
import babel from 'rollup-plugin-babel'

export default {
  input: "src/main.js",
  output: [{
    file: "dist/bundle.amd.js", //  五种输出格式："amd", "cjs", "system", "es", "iife" or "umd"
    format: "amd",
    name: "A", //当format为iife和umd时必须提供，将作为全局变量挂在window(浏览器环境)下：window.A=...
    sourcemap: true, //生成bundle.map.js文件，方便调试
  }, {
    file: "dist/bundle.cjs.js",
    format: "cjs",
    name: "A",
    sourcemap: true,
  }, {
    file: "dist/bundle.system.js",
    format: "system",
    name: "A",
    sourcemap: true,
  }, {
    file: "dist/bundle.es.js",
    format: "es",
    name: "A",
    sourcemap: true,
  }, {
    file: "dist/bundle.umd.js",
    format: "umd",
    name: "A",
    sourcemap: true,
  }],
  plugins: [
    babel({
      exclude: 'node_modules'
    })
  ]
};
