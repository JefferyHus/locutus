module.exports = function (arg) {
  //  discuss at: http://phpjs.org/functions/escapeshellarg/
  // original by: Felix Geisendoerfer (http://www.debuggable.com/felix)
  // improved by: Brett Zamir (http://brett-zamir.me)
  //   example 1: escapeshellarg("kevin's birthday");
  //   returns 1: "'kevin\\'s birthday'"

 var ret = ''

  ret = arg.replace(/[^\\]'/g, function (m, i, s) {
    return m.slice(0, 1) + '\\\''
  })

  return "'" + ret + "'"
}
