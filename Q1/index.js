// A JS function that finds duplicate elements in an array
//
// This function takes an array of elements and returns an array of elements that are duplicates

function findDuplicates(arr) {
  let seenItems = new Set();
  let duplicatesArr = new Array();

  for (let item of arr) {
    if (seenItems.has(item)) {
      if (!duplicatesArr.includes(item)) {
        duplicatesArr.push(item);
      }
    } else {
      seenItems.add(item);
    }
  }

  return duplicatesArr;
}

// Export the function for testing
module.exports = findDuplicates;
