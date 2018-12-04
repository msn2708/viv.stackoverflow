module.exports.function = function getItems (fromdate, todate) {

  var fromDateEpoch = Math.floor(dates.ZonedDateTime.fromDate(fromdate).getMillisFromEpoch()/1000)
  var toDateEpoch = Math.floor(dates.ZonedDateTime.fromDate(todate).getMillisFromEpoch()/1000)


  var URL = "https://api.stackexchange.com/2.2/questions?fromdate=" + fromDateEpoch + "&todate=" + toDateEpoch + "&order=desc&sort=activity&tagged=bixby&site=stackoverflow"

  var options = {format:'json',cacheTime:15,passAsJson:false}

  var response = http.getUrl (URL, options)

  return response.items
}
