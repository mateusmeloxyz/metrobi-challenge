/**
 * Egg Drop function to determine the minimum number of tries needed
 * to find the critical floor with a given number of eggs
 * @param {number} eggs - Number of eggs available
 * @param {number} floors - Number of floors in the building
 * @returns {number} - Minimum number of drops needed in worst case
 */
function eggDrop(eggs, floors) {
  // Create a memoization cache to store previously calculated results
  const memo = {};

  function eggDropMemoized(eggs, floors) {
    // Create a unique key for memoization
    const key = `${eggs},${floors}`;

    // Return memoized result if available
    if (memo[key] !== undefined) {
      return memo[key];
    }

    // Base cases
    if (floors === 0 || floors === 1) {
      return floors;
    }

    if (eggs === 1) {
      return floors;
    }

    let minimum = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i <= floors; i++) {
      // Calculate worst case by considering:
      // 1. Egg breaks - we have (eggs-1) eggs and need to check floors below i
      // 2. Egg doesn't break - we still have 'eggs' eggs and need to check floors above i
      let worstCase =
        1 +
        Math.max(
          eggDropMemoized(eggs - 1, i - 1), // Egg breaks
          eggDropMemoized(eggs, floors - i), // Egg doesn't break
        );

      minimum = Math.min(minimum, worstCase);
    }

    // Store result in memo before returning
    memo[key] = minimum;
    return minimum;
  }

  // Call the memoized version with our initial parameters
  return eggDropMemoized(eggs, floors);
}

// Export the function for testing
module.exports = { eggDrop };
