/**
 * 
 * Bubble Sort: compares the adjacent elements and swap their positions if the preceding element is greater than the 
 * following element.
 * Big-Oh notation: both in best and  worst case O(n^2). So, it is not efficient.
 * Two iteration need to be done, outer loop and inner loop
 * Uses two loops
 * this algorithm can sort both the interger and string array.
 * 
 * @param {arr} arr is an unsorted input array
 * @returns sorted array
 */

// Technique 1
// function bubbleSort(arr){
//     let noSwaps;
//     let n = arr.length;

//     for( let i = n; i>0; i--){
//         // flags for optimizations
//         noSwaps = true;
//         // number of passes
//         for( let j = 0; j<i-1; j++){

//             // compare adjacent positions
//             if(arr[j]>arr[j+1]){

//                 // Swap the numbers
//                 [arr[j], arr[j+1]]=[arr[j+1],arr[j]]
//                 noSwaps = false;
//             }
//         }

//         if(noSwaps){
//             break;
//         }
//     }
//     return arr;
    
// }


// Technique 2

function bubbleSort(arr){
    let swapped = true;

    while(swapped){
        swapped = false;
        for( let i = 0; i<arr.length -1; i++){
            if(arr[i]> arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
                swapped = true;
            }
        }
    }
    return arr;

}


// let array = [5,2,12,9,14,0,7]
let array = ['sag', 'apple','dog', 'cat', 'appde']
console.log(bubbleSort(array))