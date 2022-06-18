function hasTargetSum(array, target) {
  // Write your algorithm 
  const nums = {}
  for (let i = 0; i<array.length; i++){
  const num = array[i]
if( target- num in nums){
  return [nums[target-num], i]
}
nums [array[i]] = i
}
return [-1, -1]
}
/* 
  Write the Big O time complexity of your function here
*/
// O(n) linear we are iterating through every elements in an array
// O(1) constant accessing a value by index
/* 
  Add your pseudocode here
*/
// empty variable to hold the element
// iteration through every element in the array 
// comparing the element to see which pair equals to the target
// if the pair matches return true or else false
// 

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 5));

  console.log("");
}

module.exports = hasTargetSum;
