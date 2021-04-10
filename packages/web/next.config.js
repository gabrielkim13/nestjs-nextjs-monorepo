const withImages = require('next-images');

module.exports = withImages({
  esModules: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
});
