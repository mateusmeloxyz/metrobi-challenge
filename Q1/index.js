function isPlainObject(variable) {
  return (
    typeof variable === "object" &&
    variable !== null &&
    !Array.isArray(variable)
  );
}
/**
 * Finds duplicate elements in an array.
 *
 * @param {Array} arr - The input array to search for duplicates.
 * @returns {Array} - An array containing all duplicate elements (with each duplicate appearing only once).
 * @throws {TypeError} - If the input is not an array.
 */
function findDuplicates(arr) {
  // Input validation
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }

  let seenItems = new Set();
  let duplicatesSet = new Set();

  for (let item of arr) {
    let jsonITEM = isPlainObject(item) ? JSON.stringify(item) : item;
    if (seenItems.has(jsonITEM)) {
      duplicatesSet.add(jsonITEM);
    } else {
      seenItems.add(jsonITEM);
    }
  }

  return Array.from(duplicatesSet);
}

// Export the function for testing
module.exports = findDuplicates;
