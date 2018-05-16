const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssModules: true,
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' }
    }
  }
  // assetPrefix: '.'
})
