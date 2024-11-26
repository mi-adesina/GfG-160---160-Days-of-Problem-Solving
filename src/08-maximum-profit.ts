/**
 * Calculates the maximum profit that can be achieved from a single buy-and-sell transaction.
 * 
 * The function iterates through the array of prices, keeping track of the lowest price seen so far 
 * and the maximum profit that can be achieved. The algorithm runs in O(n) time and uses O(1) space.
 *
 * @param stockPrices - An array of numbers where each element represents the stock price on a given day.
 * @returns The maximum profit that can be achieved from a single transaction. Returns 0 if no profit is possible.
 */
const calculateMaximumProfitOneTransaction = (stockPrices: number[]): number => {
    // If there are fewer than 2 prices, no transactions can be made
    if (stockPrices.length < 2) return 0;

    let maximumProfit: number = 0; // Stores the maximum profit found so far
    let lowestPriceSoFar: number = stockPrices[0]; // Tracks the lowest price seen so far

    // Iterate through stock prices starting from the second day
    for (let currentDayIndex = 1; currentDayIndex < stockPrices.length; currentDayIndex++) {
        const currentDayPrice = stockPrices[currentDayIndex]; // Price on the current day

        // Update the lowest price if the current day's price is lower
        lowestPriceSoFar = Math.min(lowestPriceSoFar, currentDayPrice);

        // Calculate potential profit and update maximumProfit if this is the highest so far
        maximumProfit = Math.max(maximumProfit, currentDayPrice - lowestPriceSoFar);
    }

    // Return the maximum profit found, or 0 if no profit is possible
    return maximumProfit;
};


const prices = [7, 10, 1, 3, 6, 9, 2];
console.log(calculateMaximumProfitOneTransaction(prices));