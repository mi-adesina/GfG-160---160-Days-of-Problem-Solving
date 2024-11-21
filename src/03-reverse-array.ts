/**
 * Reverses the given array of numbers in place.
 * @param {number[]} arr - The array of numbers to reverse.
 * @returns {number[]} - The reversed array.
 */
const reverseArray = (arr: number[]): number[] => {
	// Check if the array has fewer than two elements.
	// If true, return the array as is since it doesn't need reversing.
	if (arr.length < 2) {
		return arr;
	}

	let temp: number; // Temporary variable for swapping values.

	/**
	 * Iterate over the first half of the array.
	 * For each iteration, swap the current element with its counterpart
	 * from the opposite end of the array.
	 */
	for (let i = 0; i < arr.length / 2; i++) {
		temp = arr[i]; // Store the current element in a temporary variable.
		arr[i] = arr[arr.length - i - 1];  // Replace the current element with its counterpart.
		arr[arr.length - i - 1] = temp; // Replace the counterpart with the value in temp.
    }

    // Return the reversed array.
	return arr;  
};
