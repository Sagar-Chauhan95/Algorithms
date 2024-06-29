/**
 * A program to calculate the Aliquot Sum of a number. The Aliquot sum of a number n, is the sum of all the proper divisor of n apart from n itself. 
 * For example, for the number 6
 * The divisors are 1,2,3 (we don't consider 6), so its aliquot sum is 1 + 2 + 3 = 6
 * 1 is the only number whose aliquot sum is 0 (since its only divisor is 1 and aliquot sum of number can't have itself)
 * For all prime numbers, the aliquot sum is 1, since their only divisor apart from themselves is 1
 * 
 */

/**
 * @param {Number} num  The number whose aliquot sum you want to calculate
 * 
 */

export function aliquotSum(num:number):number{
    //input num can't be negative
    if(num <0){
     throw new TypeError("Input number cannot be negative")
    }
    
    // num can't be decimal
    if(Math.floor(num) !== num){
        throw new TypeError('Input cannot be Decimal')
    }

    // Dealing with 1, which isn't a prime
    if(num==1){
        return 0;
    }

    let sum = 0;
    for(let i = 1; i <= num / 2; i++){
        if(num % i ===0){
            sum += i;
        }
    }
    return sum;
}