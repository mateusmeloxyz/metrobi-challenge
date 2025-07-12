# Unbounded Knapsack Problem Solution

This repository contains a solution to the unbounded knapsack problem applied to carrot types. The solution uses dynamic programming to efficiently find the maximum value that can be obtained given a knapsack capacity and various carrot types with different weights and values.

## Problem Description

In this problem:
- We have a knapsack with a maximum weight capacity
- We have multiple carrot types, each with a weight and a price (value)
- We want to maximize the total value while keeping the total weight under or equal to the capacity
- We can use each carrot type multiple times (unbounded)

## Implementation Details

The solution uses a dynamic programming approach to solve the unbounded knapsack problem:

1. We create a 2D array `memo` where:
   - Rows represent the carrot types (0 to n)
   - Columns represent the weights (0 to capacity)
   - Each cell `memo[i][j]` represents the maximum value that can be obtained with the first `i` carrot types and a capacity of `j`

2. We build this table bottom-up, considering for each cell:
   - Not taking the current carrot type: `memo[i-1][j]`
   - Taking the current carrot type once and using the remaining capacity: `memo[i-1][j-weight] + price`
   - Taking the current carrot type multiple times: `memo[i][j-weight] + price`

3. The final answer is in `memo[n][capacity]`

## Input Validation

The implementation includes comprehensive input validation to ensure:
- `carrotTypes` is a valid array
- Each carrot type has a valid weight (positive integer) and price (non-negative number)
- The capacity is a valid non-negative integer

## Files

- `index.js`: Main implementation of the knapsack algorithm
- `tests/getMaxValue.test.js`: Jest test suite for the algorithm
- `package.json`: Project configuration with dependencies and scripts

## Running the Code

```bash
# Run the main examples
npm start

# Run the tests
npm test
```

## Example Usage

```javascript
const { getMaxValue } = require('./index');

const carrotTypes = [
  { weight: 5, price: 100 },
  { weight: 7, price: 150 },
  { weight: 3, price: 70 },
];
const capacity = 36; // kg

const maxValue = getMaxValue(carrotTypes, capacity);
console.log(`Maximum value: ${maxValue}`); // 840
```

## Time and Space Complexity

- **Time Complexity**: O(n × W) where n is the number of carrot types and W is the capacity
- **Space Complexity**: O(n × W) for the memoization table

## Test Cases

The solution includes a comprehensive test suite covering:
- Basic functionality with known examples
- Edge cases (empty array, zero capacity, etc.)
- Input validation
- Various knapsack scenarios

## Implementation Notes

The key insight in this implementation is properly handling the unbounded nature of the problem, which allows us to reuse items. This is reflected in the dynamic programming recurrence relation where we consider the option of using the current item multiple times.