function stringLength(str) {
  if (str.length > 1 && str.length <= 10) {
    return str.length;
  }
  return false;
}

module.exports = stringLength;
