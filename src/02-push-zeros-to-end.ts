/**
 * Moves all zeroes in the array to the end while maintaining the order of non-zero elements.
 * @param {number[]} arr - The input array of numbers.
 * @returns {number[]} - The modified array with zeroes pushed to the end.
 */
const pushZerosToEnd = (arr: number[]): number[] => {
    let nonZeroIndex: number = 0; // Pointer to track the position for the next non-zero element

    // Step 1: Move all non-zero elements to the front of the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZeroIndex] = arr[i]; // Place non-zero element at the current non-zero index
            nonZeroIndex++; // Increment the non-zero index
        }
    }

    // Step 2: Fill the remaining positions with zeroes
    for (let i = nonZeroIndex; i < arr.length; i++) {
        arr[i] = 0; // Fill zeroes from the non-zero index to the end
    }

    return arr; // Return the modified array
};

