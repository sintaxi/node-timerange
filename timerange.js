var moment = require("moment")

module.exports = function(date){
  var start, end;
  var m = moment(date)
  
  if(!m.isValid()){
    var m = moment()
    date = null
  }

  if(date){
    var dateArray = date.split("-")
  }else{
    var dateArray = []
  }

  if(dateArray.length == 3){
    var delta = "day"
  }else if(dateArray.length == 2){
    var delta = "month"
  }else if(dateArray.length == 1){
    var delta = "year"
  }

  if(delta){
    var s = m.startOf(delta)
    var e = m.endOf(delta)
    start = s.valueOf()
    end   = e.valueOf()
  }else{
    start = 0
    end   = m.valueOf()
  }
  
  return {
    start: start,
    end: end
  }
}
