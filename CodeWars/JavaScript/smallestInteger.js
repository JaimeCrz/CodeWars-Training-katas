// Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
  findSmallestInt(numbers) {
  const smallestInt = Math.min(...numbers)
  return smallestInt
  }
}

//Comments: good usage of  math.min method for JS.