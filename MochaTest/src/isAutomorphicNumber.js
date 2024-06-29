
/**
 * a number n is called automorphic when the square of n ends with same ending nmber of n. i;e square of 5 is 25 (ending number of both 5 and 25 is 5 , so it is automorphic)
 */

let number = 25;

function isAutomorphicNumber(num){
    if(typeof(num) !== 'number' ){
        throw new Error("Type of n must be number")
    }

    if(!Number.isInteger(num)){
        throw new Error(' n cannot be a floating number')
    }

    if(num < 0){
        return false
    }

    let numSquare = Math.pow(num, 2)
    
    return num%10 === numSquare %10;
    
}

console.log(isAutomorphicNumber(number))
