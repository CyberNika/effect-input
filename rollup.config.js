import vue from 'rollup-plugin-vue'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.common.js',
    format: 'cjs',
    exports: 'named',
  },
  plugins: [
    vue(),
  ],
}
