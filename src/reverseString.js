function reverseString(str) {
  if (str) {
    const reverseStr = str.split('').reverse().join('');
    return reverseStr;
  }
  return str;
}

module.exports = reverseString;
