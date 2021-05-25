//
// This is only a SKELETON file for the 'Square root' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const squareRoot = (x) => {
  var e = 0.0001, res = x;
  while ((res - x / res) > e) {
    res = (res + x / res) / 2;
  }
  return Math.floor(res);
};

