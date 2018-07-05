const helpers = require('../../../helpers')

module.exports = function (router, myPath) {


  router.get('/' + myPath + '/name', function (req, res) {
    res.render(myPath + '/name',{
      firstNameValue: req.session.firstName,
      lastNameValue: req.session.lastName, 
      errors: req.session.errors,
    })
  })
  
  router.post('/' + myPath + '/name', function (req, res) {

    // Save values
    req.session.firstName = req.body.firstName;
    req.session.lastName = req.body.lastName;
    var returnURL = req.query.returnUrl

    // Errors
    req.checkBody("firstName", "Enter your first name.").notEmpty();
    req.checkBody("lastName", "Enter your last name.").notEmpty();
    var errors = helpers.formatErrors(req)

    if(req.query.returnUrl) {
      return res.redirect('check-answers');
    } else {
      if (errors) {
        req.session.errors = errors; 
        res.redirect(req.get('referer'));
      } else {
        req.session.errors = null;
        return res.redirect('age-range');
      } 
    }

  })



}
