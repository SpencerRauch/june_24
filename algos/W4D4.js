/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.

 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the searchNum was found in the sortedNums array.
 */
// don't be afraid to add parameters! <---------
function binarySearch(sortedNums, searchNum, left=0, right=sortedNums.length-1) {
    //Your code here
    if (left > right) { //if our left has passed our right, no more values to check
        return false;
    }
    const mid = Math.floor((left + right) / 2); // calculate mid
    if (sortedNums[mid] === searchNum) {
        return true; //found
    }
    if (sortedNums[mid] > searchNum) { //if the mid val is greater than the search, adjust right
        return binarySearch(sortedNums, searchNum, left, mid - 1); 
    }
    return binarySearch(sortedNums, searchNum, mid + 1, right); //else adjust left
}



console.log(binarySearch(nums1, searchNum1)); // false
console.log(binarySearch(nums2, searchNum2)); // true
console.log(binarySearch(nums3, searchNum3)); // true