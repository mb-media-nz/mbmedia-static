
module.exports = {
    root: 'src',
    build: {
      outDir: '../dist',
      emptyOutDir: true,
      rollupOptions: {
        // https://rollupjs.org/guide/en/#big-list-of-options
        makeAbsoluteExternalsRelative: true
      }
    }
}