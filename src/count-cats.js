const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
let arr = matrix.flat(2);
let result = 0;
if (arr.length === 0) {
  return 0;
} 
for (i=0; i<arr.length; i++) {
  if (arr[i] === '^^' || arr[i] === "^^") {
    result = 1 + result;
  };
    
};
return Number(result);

 };
