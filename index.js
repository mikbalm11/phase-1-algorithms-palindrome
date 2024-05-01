function isPalindrome(word) {
  // Write your algorithm here

  let originalStringArray = word.split('');
  originalStringArray.reverse();
  let reversedString= originalStringArray.join('');

  return word === reversedString;
}

/* 
  Add your pseudocode here

  create an array from the original word string
  use reverse() on created array
  make a string from the reversed array
  comapare original word string with reversed string
*/

/*
  Add written explanation of your solution here
  
  since all strings in JS behave like arrays
  best approach would be to see if the reverse
  of any given string is the same with the original
  using .reverse() built in function on array form
  of said string, we can return the boolean value by
  comparing the original word string with the 
  reversed one.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("salts"));
}

module.exports = isPalindrome;
