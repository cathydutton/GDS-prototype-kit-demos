module.exports = function (router, myPath) {

  router.get('/' + myPath + '/confirmation', function (req, res) {

    res.render(myPath + '/confirmation',{
      'licenceLength': req.session.licenceLength,
      
      'startDate': req.session.startDate, 
      'startMonth': req.session.startMonth,
      'startYear': req.session.startYear,
      
      'endDate' : req.session.endDate,
      'endMonth': req.session.endMonth,
      'endYear' : req.session.endYear,

    })
  })
  

}
