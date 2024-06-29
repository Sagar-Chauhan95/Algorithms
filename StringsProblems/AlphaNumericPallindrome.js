/**
 * @alphaNumericPallindrome
 * @description the function should return true if the string has alphanumeric  characters that are palindrome irrespective of
 * special characters and the letter case.
 * @param {string} str the string to check
 * @returns {boolean}
 * @example like 'racecar', 'RaceCar', race CaR'
 * '2A3*3a2', '2A3 3a2'
 */


function alphaNumericPallindrome(str){
if(typeof(str) !== 'string'){
    throw new TypeError("Argument should be string")
}

// removing all special character and convering to lewer case;
const newStr = str.replace(/[^a-z0-9]+/gi,'').toLowerCase();
const midIndex = newStr.length >> 1 // x >> y = floor(2^y)

for(let i = 0; i< midIndex; i++){
    if(newStr.at(i) !== newStr.at(~i)){
        // ~n = -(n+1)
        return false;
    }
}
return true

}


console.log(alphaNumericPallindrome('@1aracecara1#'));
console.log(alphaNumericPallindrome('@sagar#'));
console.log(alphaNumericPallindrome('2A3 3a2'));