/**
 * An armstrong number is equal to the sum of its own digits each raised power of the number of digits
 * 370 = 3*3*3 + 7*7*7 + 0*0*0 = 27+343+0 = 370
 */

let number  = 370

function isArmStrong(num){
//     one way to convert number to string, then count length of string
//    let numDigits = ""+num;
   
//  //  another way to count number of digits
   let numDigits = Math.floor(Math.log10(num)) +1;
   let originalNum = num;

   //// one way to find sum
//    let sum =0
// for (let i =0; i<numDigits; i++){
//     let rem = num%10
//     sum+= rem**numDigits;
//     num=Math.floor(num/10)
//    }
   
   // //another way to find sum ( convert num to string and then to array then apply reduce in each number of array)
   let numStr = num.toString().split('').map(Number)
   // let sum = [...numStr].reduce((sum,current)=>{sum + parseInt(num)**numDigits, 0})

   let sum = numStr.reduce((sum,current)=>{
      return sum+ Math.pow(current, numDigits)},0)

   return sum == originalNum;

}

console.log(isArmStrong(number))

