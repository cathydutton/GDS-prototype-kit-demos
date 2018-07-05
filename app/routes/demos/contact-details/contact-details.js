const helpers = require('../../../helpers')
module.exports = function (router, myPath) {
  router.get('/' + myPath + '/contact-details', function (req, res) {
    res.render(myPath + '/contact-details',{
      emailValue: req.session.email,
      phoneNumberValue: req.session.phoneNumber, 
      faxNumberValue: req.session.faxNumber, 
      errors: req.session.errors,
    })
  })
  
  router.post('/' + myPath + '/contact-details', function (req, res) {

    // Save values
    req.session.email = req.body.email;
    req.session.phoneNumber = req.body.phoneNumber;
    req.session.faxNumber = req.body.faxNumber;


    // Errors
    req.checkBody("email", "Enter your email address.").notEmpty();
    req.checkBody("phoneNumber", "Enter your phone number.").notEmpty();
    var errors = helpers.formatErrors(req)
   
    if (errors) {
      req.session.errors = errors; 
      res.redirect(req.get('referer'));
    } else {
      req.session.errors = null;
      return res.redirect('success');
    } 
 

  })



}
