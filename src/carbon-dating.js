const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //let sampleActivity = 1;
  let age = 0;
  if ((typeof(sampleActivity !== 'string')) ||
            sampleActivity < 1 ||
            sampleActivity > 15) {
              return false;
            } else {
              age = (Math.log(MODERN_ACTIVITY / sampleActivity)) / (0.693 / HALF_LIFE_PERIOD);
              return age;
            };  
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
