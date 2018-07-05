
  // Set path
  var myPath = 'demos/simple-application';
  module.exports.myPath = myPath;

  module.exports = function(router) {

  // Import routes
  require('./start')(router, myPath),
  require('./name')(router, myPath),
  require('./age-range')(router, myPath),
  require('./travel')(router, myPath),
  require('./check-answers')(router, myPath),
  require('./terms')(router, myPath),
  require('./complete')(router, myPath)
}

