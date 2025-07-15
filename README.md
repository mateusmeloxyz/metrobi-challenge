# Interview Challenge

## Questions

1) Write a javascript function that finds the duplicate items in any given array.

2) Write an async javascript function that writes every item in any given array with 1, 2, 4, 8,
etc., seconds apart.
Example: for [“a”, “b”, “c”, “d”], “a” is printed 1 second after the code runs, “b” is printed 2
seconds after the code runs, “c” is printed 4 seconds after the code runs, etc.

3) Write the necessary React code for generating the below figure (using flex) ([live demo](https://metrobi-challenge-ob0xt1ql7-mateusgomes01s-projects.vercel.app/))

![image](./img/flex-layout.png)

4) Write an efficient method that tells us whether or not an input string brackets ("{", "}",
"(", ")", "[", "]") opened and closed properly. Example: “{[]}” => true, “{(])}” => false,
“{([)]}” => false

5) A building has 100 floors. One of the floors is the highest floor an egg can be dropped
from without breaking. If an egg is dropped from above that floor, it will break. If it is
dropped from that floor or below, it will be completely undamaged and you can drop the
egg again. Given two eggs, find the highest floor an egg can be dropped from without
breaking, with as few drops as possible in the worst-case scenario.

6) Write the code that animates “Zeno's Paradox of Achilles and the Tortoise” on an
interface(we would like to see the paradox demonstrated).([Live demo](https://mateusmeloxyz.github.io/metrobi-challenge/Q6/zeno/))

7) Think that you have an unlimited number of carrots, but a limited number of carrot
types. Also, you have one bag that can hold a limited weight. Each type of carrot has a
weight and a price. Write a function that takes carrotTypes and capacity and return the
maximum value the bag can hold. [Python or Javascript]

Example:
carrotTypes = [{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}]
capacity = 36 //kg
getMaxValue(carrotTypes, capacity)

## How to run the Tests

To run the Jest tests:

1. Install the dependencies:

   ```bash
   npm install
   ```

2. Run the tests:

   ```bash
   npm test
   ```

3. If you wan to run the test suit on any single folder, run `npm test <folder_name>`. For example:

   ```bash
   npm test Q4
   ```
