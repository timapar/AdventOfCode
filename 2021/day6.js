const input1 = [3,5,1,2,5,4,1,5,1,2,5,5,1,3,1,5,1,3,2,1,5,1,1,1,2,3,1,3,1,2,1,1,5,1,5,4,5,5,3,3,1,5,1,1,5,5,1,3,5,5,3,2,2,4,1,5,3,4,2,5,4,1,2,2,5,1,1,2,4,4,1,3,1,3,1,1,2,2,1,1,5,1,1,4,4,5,5,1,2,1,4,1,1,4,4,3,4,2,2,3,3,2,1,3,3,2,1,1,1,2,1,4,2,2,1,5,5,3,4,5,5,2,5,2,2,5,3,3,1,2,4,2,1,5,1,1,2,3,5,5,1,1,5,5,1,4,5,3,5,2,3,2,4,3,1,4,2,5,1,3,2,1,1,3,4,2,1,1,1,1,2,1,4,3,1,3,1,2,4,1,2,4,3,2,3,5,5,3,3,1,2,3,4,5,2,4,5,1,1,1,4,5,3,5,3,5,1,1,5,1,5,3,1,2,3,4,1,1,4,1,2,4,1,5,4,1,5,4,2,1,5,2,1,3,5,5,4,5,5,1,1,4,1,2,3,5,3,3,1,1,1,4,3,1,1,4,1,5,3,5,1,4,2,5,1,1,4,4,4,2,5,1,2,5,2,1,3,1,5,1,2,1,1,5,2,4,2,1,3,5,5,4,1,1,1,5,5,2,1,1]
const collectionOfFish = formatFishInput(input1)

// initiate counter at 0
// if counter equals number of days we want, return input
// create new collection for the results after 1 day
// iterate through timers
  // for the timers at 0, add value at timer 6 and 8
  // for the timers at 1, add value at timer 0
  // for the timers at 2, add calue at timer 1
  // etc
// add to counter
// reassign new input

function determineNumberOfFishAfterNDays (collection, n) {
  let days = 0
  while (days < n) {
    const newCollection = {}
    for (let i = 8; i > 0; i--) {
      newCollection[i - 1] = collection[i] || 0
    }
    newCollection[8] = collection[0] || 0
    newCollection[6] = newCollection[6] + collection[0] || 0
    collection = newCollection
    days++
  }
  return collection
}

function countFishInCollection (collection) {
  let sum = 0
  for (const timer in collection) {
    sum += collection[timer]
  }
  return sum
}

function formatFishInput (inputArray) {
  const fishAsObject = {}
  for (const timer of inputArray) {
    fishAsObject[timer] = fishAsObject[timer] + 1 || 1 
  }
  return fishAsObject
}

// console.log(determineNumberOfFishAfterNDays(collectionOfFish, 256))
console.log('total number of fish:', countFishInCollection(determineNumberOfFishAfterNDays(collectionOfFish, 256)))