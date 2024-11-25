/**
 * Finds all elements in the array that appear more than ⌊n/3⌋ times.
 * 
 * Implements a variation of the Boyer-Moore Voting Algorithm, which is an efficient algorithm
 * for finding majority elements in arrays. It works by maintaining two potential majority
 * elements and their counts. The algorithm has a time complexity of O(n) and a space complexity of O(1).
 * 
 * @param arr - The input array of integers.
 * @returns An array of integers that appear more than ⌊n/3⌋ times, sorted in ascending order.
 */
const findMajority = (arr: number[]): number[] => {
    const n: number = arr.length;
    let candidate1: number = -1; // Potential first majority candidate
    let candidate2: number = -1; // Potential second majority candidate
    let count1: number = 0; // Count for the first candidate
    let count2: number = 0; // Count for the second candidate

    // First pass: Identify potential majority candidates
    for (const element of arr) {
        if (candidate1 === element) {
            count1++; // Increment count for the first candidate
        } else if (candidate2 === element) {
            count2++; // Increment count for the second candidate
        } else if (count1 === 0) {
            candidate1 = element; // Update first candidate
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = element; // Update second candidate
            count2 = 1;
        } else {
            count1--; // Decrease both counts
            count2--;
        }
    }

    // Second pass: Validate candidates by counting occurrences
    count1 = 0;
    count2 = 0;

    for (const element of arr) {
        if (element === candidate1) count1++;
        if (element === candidate2) count2++;
    }

    // Check if candidates occur more than ⌊n/3⌋ times
    const result: number[] = [];
    if (count1 > n / 3) result.push(candidate1);
    if (count2 > n / 3 && candidate1 !== candidate2) result.push(candidate2);

    // Sort the result in ascending order if there are two elements
    if (result.length === 2 && result[0] > result[1]) {
        [result[0], result[1]] = [result[1], result[0]];
    }

    return result;
};
