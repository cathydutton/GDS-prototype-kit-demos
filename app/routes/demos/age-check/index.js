
  // Set path
  var myPath = 'demos/age-check';
  module.exports.myPath = myPath;

  module.exports = function(router) {

  // Import routes
  require('./date-of-birth')(router, myPath)

  }

