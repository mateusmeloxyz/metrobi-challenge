// A JS function that finds duplicate elements in an array
//
// This function takes an array of elements and returns an array of elements that are duplicates

function findDuplicates(arr) {
  let seenItems = new Set();
  let duplicatesSet = new Set();

  for (let item of arr) {
    if (seenItems.has(item)) {
      duplicatesSet.add(item);
    } else {
      seenItems.add(item);
    }
  }

  return Array.from(duplicatesSet);
}

// Export the function for testing
module.exports = findDuplicates;
