// Return the number (count) of vowels in the given string.


function getCount(str) {

  let vowelCount = ( str = str.match(/[aeiou]/gi)) ? str.length : 0;
  
  return vowelCount
 }

 // recap on regex =).