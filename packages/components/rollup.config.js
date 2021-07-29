// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';

const config = {
  input: 'src/index.js',
  output: {
    // 必须，输出文件 (如果要输出多个，可以是一个数组)
    exports: 'named', // 输出多个文件
    format: 'esm',
    name: 'bundle',
    external: ['lodash'], //告诉rollup不要将此lodash打包，而作为外部依赖
    globals: {
      vue: 'Vue', // 告诉rollup全局变量Vue即是vue
    },
  },
  plugins: [
    // 引入的插件在这里配置
    resolve(),
    vue({
      css: true,
      compileTemplate: true,
    }),
    babel({
      presets: ['@vue/babel-preset-jsx'],
      exclude: '**/node_modules/**',
      babelHelpers: 'bundled',
    }),
    commonjs(),
    image(),
  ],
};

export default config;
