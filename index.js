function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = word.split("").reverse().join("");
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  // reverse word string and then compare word with reversed word,
  iff equal then return true

  1. turn word into an array of individual characters with .split()
  2. reverse the order of array
  3. use .join() to rejoin array of word characters to create reversed string
  4. compare results





*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
