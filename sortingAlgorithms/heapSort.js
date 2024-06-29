/**
 * Heap: A tree structure which can be build from sorting array and follows the heap property. Max-Heap is used for Natural sorting (ascending).
 * heap property: key(v) <= key(parent(v)) 
 * @param {*} index the parent index of array
 * @param {*} heapSize represents size of array
 */


Array.prototype.heapify = function(index, heapSize){

    let largest = index;
    const leftIndex = 2*index;
    const rightIndex = 2*index + 1;

    if(leftIndex < heapSize && this[leftIndex] > this[largest]){
        largest = leftIndex;
    }

    if ( rightIndex < heapSize && this[rightIndex] > this[largest]){
        largest = rightIndex
    }

    if(index !== largest){
        const temp = this[largest];
        this[largest] = this[index];
        this[index] = temp; 

        this.heapify(largest, heapSize)
    }

}


function heapSort(arr){
    const n = arr.length;

    // Build a max-Heap by bottom up approach
    for(let i = Math.floor(n/2)-1; i > -1; i--){
        arr.heapify(i, n)
    }

    // Extract element from heap one by one
    for( let j = n -1;  j > 0; j--){
        const temp = arr[0];
        arr[0] = arr[j];
        arr[j] = temp;

        arr.heapify(0, j)
    }

    return arr;
}


// let array = [5,2,12,9,14,0,7]
let array = ['sag', 'apple','dog', 'cat', 'appde']
console.log(heapSort(array))