//

function alphabetPosition(text) {

  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let textAsArr = text.toLowerCase().split("").filter(el => {
    return alphabet.includes(el);
  });
  let charAsNum = textAsArr.map(el => {
    return alphabet.indexOf(el) + 1;
  });
  return charAsNum.join(" ");
}

//Comments: 