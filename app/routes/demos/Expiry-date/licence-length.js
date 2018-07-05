const helpers = require('../../../helpers')
module.exports = function (router, myPath) {

  router.get('/' + myPath + '/licence-length', function (req, res) {
    res.render(myPath + '/licence-length',{

    })
  })
  
  router.post('/' + myPath + '/licence-length', function (req, res) {
    req.session.licenceLength = req.body.licenceLength
   
    // Errors
    req.checkBody("licenceLength", "Select an option").notEmpty();
    var errors = helpers.formatErrors(req)

    // Calculate start date
    var date = new Date();
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var n = month[date.getMonth()];

    // String date for summary page
    req.session.startDate = date.getUTCDate()
    req.session.startMonth = n
    req.session.startYear = date.getFullYear()

    // Calculate end dates
    if (req.session.licenceLength === '1 day') {
      var tomorrow = new Date(Date.parse(date));
      tomorrow.setDate(tomorrow.getDate() + 1);
      req.session.endDate = tomorrow.getUTCDate()
      req.session.endMonth = month[tomorrow.getMonth()];
      req.session.endYear = tomorrow.getFullYear()
      req.session.endTime = req.session.startTime
    
    } else if (req.session.licenceLength === '8 days') {
      var eightDays = new Date(Date.parse(date));
      eightDays.setDate(eightDays.getDate() + 8);
      req.session.endDate = eightDays.getUTCDate()
      req.session.endMonth = month[eightDays.getMonth()];
      req.session.endYear = eightDays.getFullYear()
      req.session.endTime = req.session.startTime
    
    } else {
      var threeSixFiveDays = new Date(Date.parse(date));
      threeSixFiveDays.setDate(threeSixFiveDays.getDate() + 364);
      req.session.endDate = threeSixFiveDays.getUTCDate()
      req.session.endMonth = month[threeSixFiveDays.getMonth()];
      req.session.endYear = threeSixFiveDays.getFullYear()
    }

      return res.redirect('confirmation');
    

  })

}
