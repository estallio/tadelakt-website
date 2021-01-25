const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  target: 'serverless',
  optimizeImagesInDev: true,
  responsive: {
    adapter: require('responsive-loader/sharp'),
  },
});
