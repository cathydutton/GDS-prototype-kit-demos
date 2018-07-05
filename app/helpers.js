module.exports = {
  formatErrors: function (req) {
    var errors = req.validationErrors(true)
    var formattedErrors = null

    if (errors) {
      formattedErrors = {}
      Object.keys(errors).forEach(key => {
        if (errors[key].msg) {
          formattedErrors[key] = {}
          formattedErrors[key].text = errors[key].msg
        }
      })  
    }
    
    return formattedErrors
  }
}