
  // Set path
  var myPath = 'demos/expiry-date';
  module.exports.myPath = myPath;

  module.exports = function(router) {

  // Import routes
  require('./licence-length')(router, myPath),
  require('./confirmation')(router, myPath)
  }

