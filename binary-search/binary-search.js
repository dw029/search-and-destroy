'use strict';

// Complete this algo
const binarySearch = (array, target) => {
    if (array.length === 1) {
        if (array[0] === target) {
            return true
        } else {
            return false
        }
    }

    const midpoint = Math.floor(array.length/2)
    const leftHalf = array.slice(0, midpoint)
    const rightHalf = array.slice(midpoint)
    if (target > array[midpoint-1]) {
        return binarySearch(rightHalf, target)
    } else {
        return binarySearch(leftHalf, target)
    }

};

//[1,3,4,5,10,15]
// [5,10,15]
// [15]

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
