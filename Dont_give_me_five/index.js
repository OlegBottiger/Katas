module.exports = (start, end) => {
  
  const arr = Array.from(Array(end+1).keys());
  const sequence = arr.slice(start, end+1);
  const resultArray = [];
  
  sequence.forEach(value => {
    value.toString().includes('5') ? null : resultArray.push(value);
  })
  
  return resultArray.length;
}