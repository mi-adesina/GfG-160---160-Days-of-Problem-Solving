/**
 * Calculates the maximum profit that can be achieved by buying and selling a stock multiple times.
 * @param {number[]} prices - An array of daily stock prices.
 * @returns {number} - The maximum profit achievable.
 */
const calculateMaximumProfit = (prices: number[]): number => {
    if (prices.length < 2) return 0; // No transactions possible if there are fewer than 2 prices.

    let totalProfit: number = 0;

    for (let currentDay = 1; currentDay < prices.length; currentDay++) {
        const priceToday = prices[currentDay];
        const priceYesterday = prices[currentDay - 1];

        if (priceToday > priceYesterday) {
            totalProfit += priceToday - priceYesterday; // Accumulate profit from upward trends.
        }
    }

    return totalProfit;
};
