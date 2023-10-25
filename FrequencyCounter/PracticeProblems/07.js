/* Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n) */
function findLongestSubstring(str) {
  // Handle the base case: an empty string has no substrings with distinct characters.
  if (str.length === 0) {
    return 0;
  }

  let start = 0; // Start of the current window
  let maxLength = 0; // Length of the longest substring
  const charIndex = {}; // An object to store the last index of each character

  // Loop through the string using the 'end' pointer to extend the window.
  for (let end = 0; end < str.length; end++) {
    const currentChar = str[end];

    // If the current character is already in the current window,
    // update the 'start' pointer to the next index of the character.
    if (
      charIndex[currentChar] !== undefined &&
      charIndex[currentChar] >= start
    ) {
      start = charIndex[currentChar] + 1;
    }

    // Update the index of the current character in the charIndex object.
    charIndex[currentChar] = end;

    // Update the maximum length if the current substring is longer.
    maxLength = Math.max(maxLength, end - start + 1);
    }

  return maxLength;
}

// Test cases
console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6

/* xplanation:

We start by defining the findLongestSubstring function, which takes a string str as its input.

We handle the base case: If the input string is empty (str.length === 0), we return 0 because an empty string has no substrings with distinct characters.

We initialize the start variable to 0, which represents the start of the current window. We also initialize maxLength to 0, which will store the length of the longest substring with distinct characters.

We create an empty object charIndex to keep track of the last index at which each character was seen.

We iterate through the string using a for loop, where the end variable represents the end of the current window.

For each character currentChar at index end, we check if it has been seen in the current window before. If it has (i.e., charIndex[currentChar] is not undefined and is greater than or equal to start), we update the start pointer to the next index of the character to exclude the previous occurrence.

We update the charIndex object with the current character's index.

We calculate the length of the current substring and update maxLength if it's longer than the previous longest substring.

After iterating through the entire string, we return the maxLength, which represents the length of the longest substring with all distinct characters.

This algorithm ensures that we find the longest substring with distinct characters using a sliding window approach, and it has a time complexity of O(n), where n is the length of the input string str. */
