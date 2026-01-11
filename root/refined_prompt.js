/**
 * Converts a string to camelCase format.
 * 
 * @param {string} str - The input string to convert (e.g., "hello world", "user_name", "first-name-test")
 * @returns {string} The camelCase formatted string (e.g., "helloWorld", "userNameTest")
 * @throws {Error} Throws "Invalid input" if input is null or undefined
 * @example
 * toCamelCase("hello world") // returns "helloWorld"
 * toCamelCase("user_name-test") // returns "userNameTest"
 * toCamelCase("first_name_123_last") // returns "firstName123Last"
 * toCamelCase(null) // throws Error: Invalid input
 */
function toCamelCase(str) {
  if (str === null || str === undefined) {
    throw new Error("Invalid input");
  }
  
  let normalized = str.replace(/[\s_-]+/g, ' ').trim();
  let words = normalized.split(/\s+/);
  let camel = words[0].toLowerCase();
  for (let i = 1; i < words.length; i++) {
    let word = words[i].toLowerCase();
    if (word.length > 0) {
      camel += word.charAt(0).toUpperCase() + word.slice(1);
    }
  }
  return camel;
}

/**
 * Converts a string to dot.case format (lowercase words separated by dots).
 * 
 * @param {string} str - The input string to convert (supports camelCase, snake_case, kebab-case, spaces)
 * @returns {string} The dot.case formatted string (e.g., "hello.world", "user.name.test")
 * @throws {Error} Throws "Invalid input" if input is null or undefined
 * @example
 * toDotCase("helloWorld") // returns "hello.world"
 * toDotCase("user_name test-case") // returns "user.name.test.case"
 * toDotCase("FirstName LastName") // returns "first.name.last.name"
 * toDotCase(null) // throws Error: Invalid input
 */
function toDotCase(str) {
  if (str === null || str === undefined) {
    throw new Error("Invalid input");
  }
  
  let normalized = str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[\s_-]+/g, ' ')
    .trim()
    .split(/\s+/)
    .map(word => word.toLowerCase())
    .join('.');
  
  return normalized;
}
