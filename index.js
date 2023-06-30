/* 
  time complexity = O(n2)
*/

/* 
  - create loop to iterate over the array and select each element
  - create another for loop to iterate over the array but this selects the element before the first loop selects 
  - create an if condition for when the array pair sum is equal to the target to return true
  or else return false
*/



function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); //should return true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); //should return true
console.log(hasTargetSum([1, 2, 5], 4)); //should return false


module.exports = hasTargetSum;

