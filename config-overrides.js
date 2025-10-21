const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  return alias({
    '@src': 'src',
    '@assets': 'src/assets',
    '@components': 'src/components',
    '@pages': 'src/pages',
    '@redux': 'src/redux',
    '@scss': 'src/scss',
    '@utils': 'src/utils',
  })(config);
};
