const assert = require("chai").assert;
const app = require("../factorial");

describe("TESTING THE FACTORIAL FUNCTION", function () {
  //test 1
  it("Factorial of 4 = 4", function () {
    let result = app.factorial(4);
    assert.equal(result, 4);
  });
});
