function isValidString(inputString) {
  // This function validates whether the brackets of a given input string opened and closed properly
  //
  // eg.: "({[()]})" returns true
  // and "({[)]})" returns false
  //
  // an empty string "" also returns true

  // Handle edge cases for non-string inputs
  if (typeof inputString !== "string") {
    return false;
  }

  const stack = [];
  const reference = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of inputString) {
    if (
      char !== "(" &&
      char !== ")" &&
      char !== "{" &&
      char !== "}" &&
      char !== "[" &&
      char !== "]"
    ) {
      continue;
    }
    // if is an open bracket, push char into the stack
    if (reference[char]) {
      stack.push(char);

      // if the stack is not empty and
      // the current char is a closing bracket from the previous character in the stack,
      // pop the character from the stack
    } else if (
      stack.length > 0 &&
      reference[stack[stack.length - 1]] === char
    ) {
      stack.pop();
    } else {
      // for any other case, return false
      return false;
    }
  }

  // the string was fully traversed.
  // if the stack is empty, return true
  return stack.length === 0;
}

// Export the function for testing
module.exports = { isValidString };
