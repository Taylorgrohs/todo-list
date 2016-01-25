describe('List', function() {
  it("will create a list of things to do on a certain day", function(){
    var testList = new List("Monday")
    expect(testList.day).to.equal("Monday");
    expect(testList.todo).to.eql([]);
  });
});
