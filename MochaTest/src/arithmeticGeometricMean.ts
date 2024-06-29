/**
 * @funtion arithmeticGeometricMean
 * @description This finds the Arithmetic Geometric Mean between any 2 numbers.
 * @param {Number} a - 1st number, also used to store Arithmetic mean
 * @param {Number} g - 2nd number, also used to store Geometric Mean.
 * @return {Number} - AGM of both numbers.
 * 
 */

export const arithmeticGeometricMean = (a:number, g:number)=>{
    if (a === Infinity && g === 0) return NaN
    if(Object.is(a, -0) && !Object.is(-g, 0)) return 0
    if(a === g) return a  // avoid rounding errors, and increase efficiency

    let x;
    do{
        [a, g, x] = [(a + g) / 2, Math.sqrt(a*g), a]
    } while (a !== x && !isNaN(a))
    return a
}