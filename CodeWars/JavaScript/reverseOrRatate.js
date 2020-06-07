//The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).


function revrot(str, sz) {
  if(sz <= 0 || str.length <= 0 || sz > str.length)
  return '';
let nums = [];
while(str.length >= sz){
  nums.push(str.slice(0, sz));
  str = str.slice(sz);
}
nums = nums.map(function(num){
  let sum = num.replace(/[02468]/g, '').length;
  if(sum % 2 === 0)
    return num.split('').reverse().join('');
  else
    return num.slice(1) + num.slice(0, 1);
});
return nums.join('');
}