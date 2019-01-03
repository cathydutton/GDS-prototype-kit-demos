const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser');
var expressValidator = require('express-validator')

// Middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(expressValidator());


// Route index page & latest version
router.get('/', function (req, res) {
  res.render('index', { 
  })
})


// Add versions
require('./demos/simple-application')(router);
require('./demos/branching')(router);
require('./demos/age-check')(router);
require('./demos/contact-details')(router);
require('./demos/expiry-date')(router);
require('./demos/dashboard')(router);

module.exports = router
