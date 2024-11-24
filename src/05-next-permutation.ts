/**
 * Finds the next lexicographically greater permutation of an array of integers.
 *
 * @param {number[]} arr - The input array of integers.
 * @returns {number[]} - The next permutation of the input array.
 */
const nextPermutation = (arr: number[]): number[] => {
    const n: number = arr.length;
    let pivot: number = -1;
  
    // Find the pivot: the first decreasing element from the right
    for (let i = n - 2; i >= 0; i--) {
      if (arr[i] < arr[i + 1]) {
        pivot = i;
        break;
      }
    }
  
    // If no pivot is found, the array is in descending order
    if (pivot === -1) {
      arr.reverse();
      return arr;
    }
  
    // Find the successor: the smallest element in the suffix that is greater than pivot
    for (let i = n - 1; i > pivot; i--) {
      if (arr[i] > arr[pivot]) {
        [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
        break;
      }
    }
  
    // Reverse the suffix to get the next permutation
    let left = pivot + 1;
    let right = n - 1;
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  
    return arr;
  };