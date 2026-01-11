function toCamelCase(str) {
  // Use a regular expression to find words separated by spaces, hyphens, or underscores
  return str.replace(/[-_\s]+(.)?/g, (match, char) => {
    return char ? char.toUpperCase() : '';
  });
}

console.log(toCamelCase("hello world")); // Output: "helloWorld"





