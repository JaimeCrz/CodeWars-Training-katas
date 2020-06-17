// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){
  let string = "";
    let lowerCaseWord = word.toLowerCase();
    for (let i = 0; i < lowerCaseWord.length; i++) {
      if (lowerCaseWord.indexOf(lowerCaseWord[i]) === lowerCaseWord.lastIndexOf(lowerCaseWord[i])) {
        string += "(";
      } else {
        string += ")";
      }
    }
    return string;
  }

  // or one liner:

  function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }
  

