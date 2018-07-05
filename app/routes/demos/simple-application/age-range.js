const helpers = require('../../../helpers')
module.exports = function (router, myPath) {

  router.get('/' + myPath + '/age-range', function (req, res) {
    res.render(myPath + '/age-range',{
      ageRange: req.session.ageRange,
      errors: req.session.errors,
    })
  })
  
  router.post('/' + myPath + '/age-range', function (req, res) {

    // Save values
    req.session.ageRange = req.body.ageRange;

    // Errors
    req.checkBody("ageRange", "Select an option").notEmpty();
    var errors = helpers.formatErrors(req)
    if(req.query.returnUrl) {
      return res.redirect('check-answers');
    } else {
      if (errors) {
        req.session.errors = errors; 
        res.redirect(req.get('referer'));
      } else {
        req.session.errors = null;
        return res.redirect('travel');
      } 
    }


  })

}
