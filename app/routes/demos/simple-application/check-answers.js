module.exports = function (router, myPath) {
  router.get('/' + myPath + '/check-answers', function (req, res) {
    res.render(myPath + '/check-answers',{
      'firstName': req.session.firstName,
      'lastName': req.session.lastName, 
      'ageRange': req.session.ageRange,
      'travel': req.session.travel,
    })
  })
  
  router.post('/' + myPath + '/check-answers', function (req, res) {
    return res.redirect('terms');
  })

}
