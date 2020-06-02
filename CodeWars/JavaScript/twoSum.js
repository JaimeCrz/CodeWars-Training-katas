// Write a function that takes an array of numbers (integers for the tests) and a target number. 


function twoSum(numbers, target) {
  for(var i = 0; i < numbers.length; i++){
    for (var j = i+1; j < numbers.length; j++){
      if (numbers[i] + numbers[j] == target) {
        return [i, j];
      }
    }
  }
}

//Comments: A fundamentals kata, great for those starting to understand how looping works.
  