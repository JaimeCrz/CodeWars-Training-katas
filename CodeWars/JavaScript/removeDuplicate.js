// Remove duplicate words in a string.

function removeDuplicateWords (s) {
  let uniqueList = s.split(' ')
 uniqueList = uniqueList.filter(function(elem,index){
     return uniqueList.indexOf(elem) == index
 })
return uniqueList.join(' ')
}

//Comments. nice usage of the filtering option in JS.