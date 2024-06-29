
function bucketSort(array, size){

    if(size === undefined){

        // setting default size of bucket
        size =5;
    }

    if ( array.size === 0){
        return array;
    }

    let min = array[0]; 
    let max = array [0];

    // finding minimum and maximum number in the array
    for(let iArray = 0; iArray < array.length -1; iArray++){
        if(array[iArray] < min){
            min = array[iArray]
        }else if ( array[iArray] > max){
            max = array[iArray]
        }
        
    }

    // how many bucket (size) we need
    const count = Math.floor((max-min)/size) +1;

    // create buckets
    const buckets = [];
    for (let iCount = 0; iCount < count; iCount++){
        buckets.push([]);
    }

    // filling bucket
    for ( let iBucket = 0; iBucket < array.length; iBucket++){
        const key = Math.floor((array[iBucket]-min)/ size);
        buckets[key].push(array[iBucket]);
    }

    const sorted =[];

    // now sort every buckets and merge it into sorted array
    for( let iBucket = 0; iBucket < buckets.length; iBucket++){
        const arr = buckets[iBucket].sort((a,b)=>a-b);

        for (let iSorted = 0; iSorted < arr.length; iSorted++){
            sorted.push(arr[iSorted])
        }
    }

    return sorted;
}



let array = [5,2,12,9,14,0,7]
console.log(bucketSort(array, 5))