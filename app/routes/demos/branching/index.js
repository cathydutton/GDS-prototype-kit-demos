
  // Set path
  var myPath = 'demos/branching';
  module.exports.myPath = myPath;

  module.exports = function(router) {

  // Import routes
  require('./tea')(router, myPath)

  
  }

