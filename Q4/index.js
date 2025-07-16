function isValidString(inputString) {
  // This function validates whether the brackets of a given input string opened and closed properly
  //
  // eg.: "({[()]})" returns true
  // and "({[)]})" returns false
  //
  // an empty string "" also returns true
  // non-bracket characters are ignored

  // Handle edge cases for non-string inputs
  if (typeof inputString !== "string") {
    return false;
  }

  const stack = [];
  const bracketPairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  // Create a set of all closing brackets for faster lookup
  const closingBrackets = new Set(Object.values(bracketPairs));

  for (let char of inputString) {
    // If it's an opening bracket, push to stack
    if (char in bracketPairs) {
      stack.push(char);
    }
    // If it's a closing bracket
    else if (closingBrackets.has(char)) {
      // If stack is empty or if the closing bracket doesn't match the last opening bracket
      if (stack.length === 0 || bracketPairs[stack.pop()] !== char) {
        return false;
      }
    }
    // All other characters are ignored
  }

  // If stack is empty, all brackets were properly closed
  return stack.length === 0;
}

// Export the function for testing
module.exports = { isValidString };
