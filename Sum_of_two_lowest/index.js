module.exports = (array) => {
  const sortedArray = array.sort((a, b) => a - b);
  return sortedArray[0] + sortedArray[1];
}