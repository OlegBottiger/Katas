module.exports = (text) => {
  const textArray = [...text];
  let result = '';

  for(const [index, value ] of textArray.entries()) {
    for(let i = 0; i < index + 1; i++) {
      i === 0 ? result += value.toUpperCase() : result += value.toLowerCase();
    }
    index !== textArray.length - 1 ? result += '-' : null;
  }

  return result;
}