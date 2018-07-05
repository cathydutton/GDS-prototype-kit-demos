const helpers = require('../../../helpers')
module.exports = function (router, myPath) {
  router.get('/' + myPath + '/travel', function (req, res) {
    res.render(myPath + '/travel',{
      travel: req.session.travel,
      errors: req.session.errors,
    })
  })
  
  router.post('/' + myPath + '/travel', function (req, res) {

    // Save values
    req.session.travel = req.body.travel;

    // Errors
    req.checkBody("travel", "Select an option").notEmpty();
    var errors = helpers.formatErrors(req)

    if(req.query.returnUrl) {
      return res.redirect('check-answers');
    } else {
      if (errors) {
        req.session.errors = errors; 
        res.redirect(req.get('referer'));
      } else {
        req.session.errors = null;
        return res.redirect('check-answers');
      } 
    }


  })

}
