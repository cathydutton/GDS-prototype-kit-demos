const helpers = require('../../../helpers')
module.exports = function (router, myPath) {

  router.get('/' + myPath + '/tea', function (req, res) {
    res.render(myPath + '/tea',{
      tea: req.session.tea,
      errors: req.session.errors,
    })
  })
  
  router.post('/' + myPath + '/tea', function (req, res) {

    // Errors
    req.checkBody("tea", "Select an option").notEmpty();
    var errors = helpers.formatErrors(req)

    // Save values
    req.session.tea = req.body.tea;

    if (errors) {
      req.session.errors = errors; 
      res.redirect(req.get('referer'));
    } else {
      req.session.errors = null;
      if (req.session.tea === 'yes') {
        return res.redirect('yes');
      } else {
        return res.redirect('no');
      }
    } 

  })

}
