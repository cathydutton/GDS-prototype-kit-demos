module.exports = function (router, myPath) {
  router.get('/' + myPath + '/terms', function (req, res) {
    res.render(myPath + '/terms',{
      terms: req.session.terms,
      errors: req.session.errors,
    })
  })
  
  router.post('/' + myPath + '/terms', function (req, res) {

    // Save values
    req.session.terms = req.body.terms;

    // Errors
    // req.checkBody("terms", "You must agree to the terms and conditions").notEmpty();
    // var errors = req.validationErrors(true);



    // if (errors) {
    //   req.session.errors = errors; 
    //   res.redirect(req.get('referer'));
    // } else {
    //   req.session.errors = null;
      return res.redirect('complete');
    // } 

  })

}
