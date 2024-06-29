/**
 * Selection sort: the algorithm sorts an array by repeatedly finding the minimum element(considering ascending order)
 * from unsorted part and putting it in the beginning. The algorithm contains two subarrays in the given array.
 * 1. Subarray which is already sorted
 * 2. Subarray which is unsorted.
 * 
 * in every itereation the minimum element is picked and moved to the sorted subarray.
 * @param {*} arr 
 * @returns 
 */
function selectionSort(arr){
    

    if( !Array.isArray(arr)){
        throw new Error("Given input is not an Array")
    }

    // Creating a copy of array so that the original remains same
    const array = [...arr];
    let n = array.length;

    for (let i = 0; i< array.length-1; i++){
        // if(typeof(array[1]) !== 'number'){
        //     throw new Error("One input in the arrayis not number")
        // }

        // No of passes
        let min = i;
        for(let j = i+1; j<array.length; j++){

            // comparing numbers to find minimum
            if(array[j] < array[min]){
                min = j;
            }
        }

        if(min !== i){
            // After each pass, if the current minimum element is not equal to the initial minimum elemnt, swap the elements
            [array[i], array[min]] = [array[min], arr[i]];
        }
    }

    return array;
}


// let array = [5,2,12,9,14,0,7]
let array = ['sag', 'apple','dog', 'cat', 'appde']
console.log(selectionSort(array))