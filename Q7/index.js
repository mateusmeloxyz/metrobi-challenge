// This is a knapsack problem, where we can solve by using dynamic programming
//
// We can build a table that evaluates all the sub problems to find the optimal solution
// faster than a recursive approach
//
// Since the items are unlimited, we call this an unbounded knapsack problem,
// because it allows repetition of items, if the repetition is more efficient

// create a function that displays a 2d matrix array on the terminal only for feedback purposes
function displayMatrix(matrix) {
  console.table(matrix);
}

function getMaxValue(carrotTypes, capacity) {
  // Input validations
  if (!Array.isArray(carrotTypes)) {
    throw new Error("carrotTypes must be an array");
  }

  if (carrotTypes.length === 0) {
    return 0; // If no carrot types, max value is 0
  }

  if (
    typeof capacity !== "number" ||
    capacity < 0 ||
    !Number.isInteger(capacity)
  ) {
    throw new Error("capacity must be a non-negative integer");
  }

  // Validate each carrot type has valid weight and price
  for (const carrot of carrotTypes) {
    if (typeof carrot !== "object" || carrot === null) {
      throw new Error("Each carrot type must be an object");
    }

    if (
      typeof carrot.weight !== "number" ||
      carrot.weight <= 0 ||
      !Number.isInteger(carrot.weight)
    ) {
      throw new Error("Each carrot type must have a positive integer weight");
    }

    if (typeof carrot.price !== "number" || carrot.price < 0) {
      throw new Error("Each carrot type must have a non-negative price");
    }
  }

  // If capacity is 0, return 0
  if (capacity === 0) {
    return 0;
  }

  // create a 2d array to store the optimal items for each capacity
  // The Array.from is used to create a dynamic array with the number of rows equal to the quantity of carrot types
  // and the number of columns equal to the maximum capacity of the knapsack
  const memo = Array.from({ length: carrotTypes.length + 1 }, () =>
    Array(capacity + 1).fill(0),
  );

  // create two indexes to navigate the 2d matrix that will store the optimal value for each capacity
  let i = 0; // navigates the rows
  let j = 0; // navigates the columns

  // navigates through the 2d matrix to fill in the optimal value for each capacity
  for (i = 1; i < carrotTypes.length + 1; i++) {
    for (j = 0; j <= capacity; j++) {
      if (carrotTypes[i - 1].weight > j) {
        memo[i][j] = memo[i - 1][j]; // while item weight is above current weight, don't put the item
      } else {
        memo[i][j] = Math.max(
          memo[i - 1][j], // considers not putting the current item
          memo[i][j - carrotTypes[i - 1].weight] + carrotTypes[i - 1].price, // considers putting the current item
        );
      }
    }
  }

  // We'll make the displayMatrix call optional based on a debug flag
  if (process.env.DEBUG) {
    displayMatrix(memo);
  }

  return memo[carrotTypes.length][capacity];
}

// Export functions for testing
module.exports = {
  getMaxValue,
  displayMatrix,
};

// Example usage when file is run directly
if (require.main === module) {
  console.log("Running example cases:");
  const carrotTypes = [
    { weight: 5, price: 100 },
    { weight: 7, price: 150 },
    { weight: 3, price: 70 },
  ];
  const capacity = 36; //kg
  console.log(`Example 1 result: ${getMaxValue(carrotTypes, capacity)}`);

  const carrotTypesB = [
    { weight: 3, price: 2 },
    { weight: 1, price: 2 },
    { weight: 3, price: 4 },
    { weight: 4, price: 5 },
    { weight: 2, price: 3 },
  ];
  const capacityB = 7;
  console.log(`Example 2 result: ${getMaxValue(carrotTypesB, capacityB)}`);
}
