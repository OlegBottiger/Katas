module.exports = (input) => {
  let ohs = 0;
  let exes = 0;

  const arr = input.split('');

  arr.forEach(element => {
    element.toLowerCase() === 'x' ? exes++ : null;
    element.toLowerCase() === 'o' ? ohs++ : null;
  });

  return ohs == exes;
};