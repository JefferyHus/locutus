module.exports = function (str) {
  //  discuss at: http://phpjs.org/functions/lcfirst/
  // original by: Brett Zamir (http://brett-zamir.me)
  //   example 1: lcfirst('Kevin Van Zonneveld');
  //   returns 1: 'kevin Van Zonneveld'

 str += ''
  var f = str.charAt(0)
    .toLowerCase()
  return f + str.substr(1)
}
