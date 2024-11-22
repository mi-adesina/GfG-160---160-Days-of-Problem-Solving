/**
 * Rotates the elements of an array to the left by a given number of positions.
 * The rotation is done in-place using the reversal algorithm.
 * 
 * @param arr - The array to be rotated.
 * @param d - The number of positions to rotate the array to the left.
 * @returns The rotated array.
 */
const rotateArr = (arr: number[], d: number): number[] => {
    // If the array is empty or the number of rotations is a multiple of the array length, no rotation is needed
    if (arr.length === 0 || d % arr.length === 0) return arr;

    // Calculate the effective number of rotations (in case `d` is larger than the array length)
    let mod: number = d % arr.length;

    // Reverse the first part of the array (from index 0 to `mod - 1`)
    reverse(arr, 0, mod - 1);

    // Reverse the second part of the array (from index `mod` to the end)
    reverse(arr, mod, arr.length - 1);

    // Reverse the entire array to achieve the final rotated result
    reverse(arr, 0, arr.length - 1);

    // Return the rotated array
    return arr;
};

/**
 * Reverses a portion of the array in-place, from the `start` index to the `end` index.
 * 
 * @param arr - The array to be reversed.
 * @param start - The starting index of the subarray to be reversed.
 * @param end - The ending index of the subarray to be reversed.
 */
const reverse = (arr: number[], start: number, end: number) => {
    // Continue swapping elements while the start index is less than the end index
    while (start < end) {
        // Swap the elements at `start` and `end`
        [arr[start], arr[end]] = [arr[end], arr[start]];
        // Move the start index forward and the end index backward
        start++;
        end--;
    }
};
