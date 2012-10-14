var should = require("should")
var timerange = require("../")

describe("all", function(){

  it("should return range for year", function(done){
    var tr = timerange("2012")
    tr.should.have.property("start")
    tr.should.have.property("end")
    console.log(tr)
    done()
  })

  it("should return range for month", function(done){
    var tr = timerange("2012-06")
    tr.should.have.property("start")
    tr.should.have.property("end")
    done()
  })

  it("should return range for day", function(done){
    var tr = timerange("2012-06-15")
    tr.should.have.property("start")
    tr.should.have.property("end")
    done()
  })

  it("should return range for null", function(done){
    var tr = timerange()
    tr.should.have.property("start")
    tr.should.have.property("end")
    done()
  })

  it("should gracefully deal with bad date", function(done){
    var tr = timerange("hello")
    tr.should.have.property("start")
    tr.should.have.property("end")
    done()
  })

})
