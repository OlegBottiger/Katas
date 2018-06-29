module.exports = (input) => {
  return input.split('').reduce((acc, val) => {
    ['a', 'e', 'i', 'o', 'u', 'y'].indexOf(val) >= 0 ? acc++ : null;
    return acc;
  }, 0);
}
