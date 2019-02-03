function sum(arr) {
  return arr.reduce(reducer);
}

function reducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

module.exports = sum;
