// 1. LeetCode ( find index of two numbers in array whose sum == target)
 
// function findNum(array, target){
//     for(let i=0; i<array.length; i++){
//         let x = target-array[i];
//         for(let j=i+1; j<array.length; j++){
//             if(x===array[j]){
//                 return [i, j]
//             } 
//         }
        
//     }

// }


// // const result = findNum([2,7,11,15], 9)
// const result = findNum([3,2,4], 6)
// console.log(result)
// console.log("Helo")


// Question 2
// Reverse of arrays and the sum of number, then print the number after reversing)
// const array1 =[2,4,3];
// const array2 = [5,6,4]
// let numbers1 = Number(array1.reverse().join(""))
// let numbers2= Number(array2.reverse().join(""))
// let resultNumber = (numbers1+numbers2).toString()
// let finalNumber= resultNumber.split("").map(Number).reverse().join("")
// console.log(resultNumber)
// console.log(finalNumber)

// spliting number to Array
// const array =123;
// let numberString = array.toString()
// let x = numberString.split("").map(Number)
// console.log(x)


// Q3 Palindrome
// let x = -121;
// let y = x.toString()
// function isPallindraome(x){
//     for (let i=0; i<y.length; i++){
//         if(y.charAt(i) !== y.charAt(y.length -1-i)){
//             return false
//         }
//     }
//     return true;
   
// }
// const result =  isPallindraome(x);
// console.log(result)


// Question 4
// let n =10;
// function callingFunction(args){
//     return function(num){
//         let numbers =[]
//         for(let i =0; i<num; i++){
//             let x = args + i;
//             numbers.push(x);
//         }
//         return numbers;

//     }

// }

// const result = callingFunction(10)

// const finalResult = result(3)
// console.log(finalResult)


function callingFunction (args){
    return function(){
        let numberList = [];
        numberList.push(args);
        return numberList;

        }
    }


    const result = callingFunction(10);
    const array =['call', 'call'];
    for(let i =0; i<array.length; i++){
        if(array[i]=== 'call'){
            result.push(result[0]+1)
        }
    }
    console.log(result);
