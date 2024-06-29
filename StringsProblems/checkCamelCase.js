/**
 * Camel case method checks the given string is camelCase or not
 * cames case : callName; findName
 * @param {string} srting as argument to check 
 * @returns 'Boolean' return true is the string is in camelCase, else return false
 */


function checkCamelCase(str){
    if(typeof(str) !== 'string'){
        throw new Error("Argument is not a string")
    }else{
        const pat = /^[a-z][A-Za-z]*$/;
        return pat.test(str)
    }

}

console.log(checkCamelCase('MyName'));
console.log(checkCamelCase('myName'));
console.log(checkCamelCase('firstName'));