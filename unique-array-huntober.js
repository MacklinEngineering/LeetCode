/****
Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

solve([[1,2],[4],[5,6]]),4)
solve([[1,2],[4,4],[5,6,6]]),4)
solve([[1,2],[3,4],[5,6]]),8)
solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)

*****/

//Taking in an array of subarrays
//Get rid of the duplicates inside each subarray
//multiple the number of unique values in each sub array

//AKA

//array -> sub array
// uni arrays - find unique numbers and multiply together

function solve(arr){
  //map -> arr -> with dupes removed
  //A set has a .size property which tells you how many unique values are in a set
  //[1,2],[4,4],[5,6,6] -->>> [1,2],[4],[5,6] 
  //reduce -> product
  //Below is a okay solution but we can prob do this all inside a reduce
  return array.map(setSize => new Set(setSize).size).reduce((accumulator, currentValue)=>accumulator*currentValue, 1)
  
}
//As I'm looping through, I'm grabbing that set and then grabbing the unique values of that set. Then times that by accumulator.
const solve = arr => arr.reduce((accumulator, currentValue) => accumulator * new Set(currentValue).size, 1)

console.log(solve([1,2],[4],[5,6]]), 4)
console.log(solve([[1,2],[4,4],[5,6,6]]),4)
console.log(solve([[1,2],[3,4],[5,6]]),8))
console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72))
