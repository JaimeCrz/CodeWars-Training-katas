// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
  return str
 .split('')
 .reverse()
 .join('')
 .split(' ')
 .reverse()
 .join(' ');
 }

 //Comments: nice kata to keep in mind how to chain multiple JS methods and the usage of split/reverse/join.