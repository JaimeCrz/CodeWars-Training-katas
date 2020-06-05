//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");
      string = string.toLowerCase();
      return alphabets.every(x => string.includes(x));
  }

  
  //Comments: nice problem that can be solved with regex or with JS methods. personally I used methods.