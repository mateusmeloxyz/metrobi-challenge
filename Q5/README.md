# Egg Drop Problem

This directory contains a solution to the classic Egg Drop problem, a well-known dynamic programming challenge often asked in technical interviews.

## Problem Statement

You are given `k` eggs and a building with `n` floors. You need to determine the minimum number of attempts needed to find the critical floor in the worst-case scenario.

The critical floor is defined as the lowest floor from which if you drop an egg, it will break. If an egg doesn't break when dropped from a floor, it can be reused. If an egg breaks when dropped from a floor, it cannot be used again.

Your goal is to find the minimum number of egg drops needed to determine the critical floor in the worst case.

## Solution Approach

The problem is solved using dynamic programming with memoization:

1. **Base Cases:**
   - If there are 0 or 1 floors, the answer is trivial (0 or 1 drops)
   - If there is only 1 egg, we must check each floor from bottom to top (n drops)

2. **Recursive Solution with Memoization:**
   - For each floor i, we calculate the worst-case scenario by considering:
     - Egg breaks: We have (k-1) eggs and need to check floors below i
     - Egg doesn't break: We still have k eggs and need to check floors above i
   - We take the maximum of these two scenarios (worst case) and add 1 for the current drop
   - We find the minimum among all these worst cases
   - Results of subproblems are stored in a memo table to avoid redundant calculations

## Files

- `index.js`: Implementation of the egg drop solution using dynamic programming with memoization
- `index.test.js`: Comprehensive test suite using Jest
- `benchmark.js`: Performance comparison between memoized and non-memoized implementations

## Running the Code

### Installation

Make sure you have Node.js and npm installed, then run:

```bash
npm install
```

### Running Tests

```bash
npm test
```

## Performance

The solution demonstrates a significant performance improvement using memoization:

- **Original Recursive Solution (without memoization):** O(n^k) time complexity
- **Optimized Solution (with memoization):** O(k × n²) time complexity

For example, calculating the solution for 2 eggs and 100 floors:
- Without memoization: Extremely slow or impractical
- With memoization: Completes in milliseconds

## Example Results

| Eggs | Floors | Minimum Attempts |
|------|--------|-----------------|
| 1    | 10     | 10              |
| 2    | 10     | 4               |
| 2    | 36     | 8               |
| 2    | 100    | 14              |
| 3    | 100    | 9               |

## Key Insights

- With 1 egg, you must check each floor sequentially (n drops)
- With infinite eggs, you can use binary search (log₂(n) drops)
- With 2 eggs, the optimal strategy follows a special pattern where you drop the first egg at increasing intervals
