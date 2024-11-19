/**
 * Finds the second largest unique number in an array.
 * @param {number[]} arr - The input array of numbers.
 * @returns {number} - The second largest unique number, or -1 if it doesn't exist.
 */
const getSecondLargest = (arr: number[]): number => {
    // Check if the array has fewer than 2 elements
    if (arr.length < 2) {
        return -1; // A second largest number cannot exist
    }

    // Clone and sort the array in ascending order
    let arr2 = [...arr].sort((a, b) => a - b);

    // Iterate backward from the second-to-last element
    for (let index = arr2.length - 2; index >= 0; index--) {
        // If the current element is not equal to the largest element
        if (arr2[index] !== arr2[arr2.length - 1]) {
            return arr2[index]; // Return the first smaller unique number
        }
    }

    // Return -1 if no second largest unique number is found
    return -1;
};