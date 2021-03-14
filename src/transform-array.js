const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
      throw new Error()
  }
  const newArr = arr.slice();
  const reItem = 'item';
  for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
          case '--discard-next':
              if (i < newArr.length - 1) {
                  newArr[i + 1] = reItem;
              }
              newArr[i] = reItem
              break
          case '--discard-prev':
              if (i > 0) {
                  newArr[i - 1] = reItem
              }
              newArr[i] = reItem
              break;
          case '--double-next':
              if (i < newArr.length - 1) {
                  newArr[i] = newArr[i + 1]
              } else {
                  newArr[i] = reItem;
              }
              break;
          case '--double-prev':
              if (i > 0) {
                  newArr[i] = newArr[i - 1];
              } else {
                  newArr[i] = reItem;
              }  }  }

  return newArr.filter(el => el !== 'item');
};
