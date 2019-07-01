const withGraphql = require('next-plugin-graphql');
const path = require('path');

module.exports = withGraphql({
  //   webpack: function(config, options) {
  //     config.resolve.alias['components'] = path.join(__dirname, 'components');
  //     config.resolve.alias['graphql'] = path.join(__dirname, 'graphql');
  //     config.resolve.alias['interfaces'] = path.join(__dirname, 'interfaces');
  //     config.resolve.alias['pages'] = path.join(__dirname, 'pages');
  //     config.resolve.alias['utils'] = path.join(__dirname, 'utils');
  //   }
});
