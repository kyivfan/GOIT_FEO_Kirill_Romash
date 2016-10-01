var app = require('../js/app.js');

describe("app", function() {
  it("it should call sayHi method", function() {
    //prepare
    var result;
    console.log('app',app);
    //act
    result = app.sayHi('Vasya');
    //assert
    expect(result).toBe('Hi, Vasya');
    expect(true).toBe(true);
  });
});
