//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

//Return the average of the given array rounded down to its nearest integer.

//The array will never be empty.

//getAverage([2,2,2,2]),2)
//getAverage([1,2,3,4,5,]),3);
//getAverage([1,1,1,1,1,1,1,2]),1)

function getAverage(arr){
//Steps
//Loop through array -> adding to a sum
  let sum = arr.reduce((accumulator, currentValue)=> accumulator + currentValue)
//Get avg. by sum divided by total num of nums in array
  let avg = sum / arr.length
//round down to nearest integer
  return Math.floor(avg)
}
const getAverage = arr => Math.floor( arr.reduce(accumulator,currentValue) => accumulator + currentValue) / arr.length )
//Tests
console.log(getAverage([2,2,2,2]),2))
console.log(getAverage([1,2,3,4,5,]),3);)
console.log(getAverage([1,1,1,1,1,1,1,2]),1))

