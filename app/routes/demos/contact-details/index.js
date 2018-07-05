
  // Set path
  var myPath = 'demos/contact-details';
  module.exports.myPath = myPath;

  module.exports = function(router) {
    
  // Import routes
  require('./contact-details')(router, myPath)

  }

