module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) {
    return false;
  }
  let array = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    array.push(bracketsConfig[i].join(''))
  }
  let aTry = 1;
  while (aTry) {
    for (let j = 0; j < array.length; j++) {
      if (str.includes(array[j])) {
        str = str.replace(array[j], '');
        aTry++;
      }
    }
    aTry--;
  }
  return str.length == 0;
}