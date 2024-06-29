/**
 * @function abs
 * @description This script will find the absolute value of a number
 * @param {number} num - The input integer
 * @return {number} -Absolute number of num
 * @example abs(-10) = 10
 * @example abs(50) = 50
 * @example abs(0) = 0
 */


export const abs = (num:number | string | boolean)=>{
    const validNumber = +num  // Conversion to number, also can use - Number(num)

    if(Number.isNaN(validNumber) || typeof num === "object"){
        throw new TypeError("Argument is NaN - Not a Number")

    }
    return validNumber < 0 ? -validNumber:validNumber  // if valid number is less than zero, conversion to positive

}