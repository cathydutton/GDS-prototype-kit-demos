module.exports = function (router, myPath) {

  router.get('/' + myPath + '/date-of-birth', function (req, res) {
    res.render(myPath + '/date-of-birth',{
      birthDay: req.session.birthDay,
      birthMonth: req.session.birthMonth,
      birthYear: req.session.birthYear,
    })
  })
  
  router.post('/' + myPath + '/date-of-birth', function (req, res) {
    req.session.birthDay = req.body.birthDay
    req.session.birthMonth = req.body.birthMonth
    req.session.birthYear = req.body.birthYear

    // Calculate age
    var dob = new Date(Date.UTC(req.session.birthYear, req.session.birthMonth - 1, req.session.birthDay));
    var options = {
      day: "numeric", month: "long", year: "numeric"
    };

    req.session.dateOfBirth = dob.toDateString("en-us", options)
    var today = new Date();
    var birthDate = new Date(Date.UTC(req.session.birthYear, req.session.birthMonth - 1, req.session.birthDay));
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    req.session.age = age
    console.log(age);

    if (req.session.age < 16) {
      return res.redirect('under-16')
    } else {
      return res.redirect('over-16')
    }

  })

}
