function isPalindrome(word) {
  // Write your algorithm here
  //use a stack to reverse the word
  let stack = [];
  let reversedWord = '';
  for (let i = 0; i < word.length; i++) {
    stack.push(word[i]);
  }
  for (let i = 0; i < word.length; i++) {
    reversedWord += stack.pop();
  }
  //compare the reversed word with the original word
  return reversedWord === word;
}

/* 
  Add your pseudocode here
  using a stack to reverse the word
  create an empty stack
  create an empty string to store the reversed word
  iterate through the word and push each character into the stack
  iterate through the word and pop each character from the stack and add it to the reversed word
  compare the reversed word with the original word and return the result
*/

/*
  Add written explanation of your solution here
  I used a stack to reverse the word and then compared the reversed word with the original word
  to determine if the word is a palindrome
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
