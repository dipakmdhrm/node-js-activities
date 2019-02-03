// Adder.
module.exports.adder = (arr) => arr.reduce(addReducer);
var addReducer = (accumulator, currentValue) => accumulator + currentValue;

// Subtractor.
module.exports.subtractor = (minuend, subtrahend) => minuend - subtrahend;

// Multiplier
module.exports.multiplier = (arr) => arr.reduce(multiplyReducer);
var multiplyReducer = (accumulator, currentValue) => accumulator * currentValue;

// Divider.
module.exports.divider = (dividend, divisor) => dividend / divisor;

// Another method of exporting:
// module.exports = {
//   adder: adder,
//   subtractor: subtractor,
//   multiplier: multiplier,
//   divider: divider
// }
