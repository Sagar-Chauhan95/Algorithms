/**
 * Insertion sort : In-place, stable sorting technique. If the following elements are lesser than the current one,
 * swapping is done until the beginning or sorting is acompliseed.
 * Big-Oh Analysis
 * Time-Complesity: 
 - Best case: O(n)(if the array is already sorted),
 - Worst case: O(n^2) reversed array
 * Space Complexity: O(1)
 * @param {} arr unsorted array
 * @returns sorted array
 */

 //Technique 1
// function insertionSort(arr){
//     let n = arr.length;
//     if(n<2){
//         return arr;
//     }else{

//         for( let i =1; i<n; i++){
//             // Take current element in array
//             currentElement = arr[i];
//             // Take index of previous element of array
//             let j = i-1;

//             // Checking whether previous element is greater than current or not
//             while(j>=0 && arr[j]> currentElement){

//                 // Move previous, greater element towards unsorted part
//                arr[j+ 1] = arr[j];
//                j--;
//             }

//             // Insert current element at corret positionin sorted array
//             arr[j+1] = currentElement;
            
//         }

//         // returning sorted array
//         return arr;

//     }
   
// }

/**
 * Technique 2: this involves dividing initial unsorted array into two parts: sorted part and unsorted part.
 * Initially sorted part has only one element. We then pick element one by one from unsorted part compare them and place in
 * correct position.
 */

function insertionSort(arr){
    let n = arr.length;

    for( let i = 1; i< n; i++){
        let j;
        const temp = arr[i]
        for(j = i-1; j>=0 && arr[j]>temp; j--){
            arr[j+1]= arr[j];
        }

        arr[j +1] = temp;
    }

    return arr;
}



// let array = [5,2,12,9,14,0,7]
let array = ['sag', 'apple','dog', 'cat', 'appde']
console.log(insertionSort(array))