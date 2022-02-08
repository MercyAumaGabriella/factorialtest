// for "test last", i created the factorial function first
module.exports = {
  factorial: function (n) {
    let ans = 1;

    //base case
    if (n == 0 || n == 1) {
      return ans;
    } else {
      for (var i = n; i >= 1; i--) {
        ans = ans * i;
      }
      return ans;
    }
  },
};
