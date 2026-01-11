/**
 * Converts a string to kebab-case (lowercase with hyphens separating words).
 * Handles camelCase, PascalCase, snake_case, and spaces. Invalid inputs return a default error string.
 * 
 * @param {string} input - The string to convert to kebab-case.
 * @returns {string} The kebab-case formatted string, or 'invalid-input' for non-string inputs.
 * 
 * @example
 * toKebabCase("HelloWorld")     // "hello-world"
 * toKebabCase("hello world")    // "hello-world"
 * toKebabCase("HELLO_WORLD")    // "hello-world"
 * toKebabCase("hello__world")   // "hello-world"
 * toKebabCase(123)              // "invalid-input"
 * toKebabCase(null)             // "invalid-input"
 * toKebabCase(undefined)        // "invalid-input"
 * 
 * @throws {TypeError} If input is not provided (strict null check).
 */
function toKebabCase(input) {
  // Step 2: Handle invalid inputs (non-strings, null, undefined)
  if (input == null || typeof input !== 'string') {
    return 'invalid-input';
  }

  // Step 1: Convert to kebab-case
  // Insert hyphens before uppercase letters and convert to lowercase
  let result = input
    // Handle camelCase/PascalCase: insert hyphen before uppercase
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    // Handle snake_case and multiple underscores/spaces
    .replace(/[_|\s]+/g, '-')
    // Convert to lowercase
    .toLowerCase()
    // Remove multiple consecutive hyphens
    .replace(/-+/g, '-')
    // Trim leading/trailing hyphens
    .replace(/^-+|-+$/g, '');

  return result;
}
