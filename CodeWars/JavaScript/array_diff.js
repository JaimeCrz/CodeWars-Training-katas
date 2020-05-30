// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b.

function arrayDiff(a, b) {
  let newArray = [];
  for (let i = 0; i < a.length; i++) {
    if (b.length >= 1) {
      for (let j = 0; j < b.length; j++) {
        if (a[i] !== b[j]) {
          newArray.push(a[i]);
        }
      }
    } else {
      newArray = a;
    }

  }
  return newArray;
}

//Comments: I love  Codewars as I started with it, although it can be challenging for someone who is starting,
// The training challenges will requiere you to focus 100% and reherse your basics of coding.