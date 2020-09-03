// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6]
var strings = ["this", "is", "a", "collection", "of", "words"]
var instructors = [
  { firstname: "JD", teaches: "JavaScript" },
  { firstname: "Tim", teaches: "JavaScript" },
  { firstname: "Brit", teaches: "Ruby" },
  { firstname: "Joe", teaches: "iOS" },
  { firstname: "Jake", teaches: "JavaScript" },
  { firstname: "Will", teaches: "JavaScript" },
  { firstname: "Calvin", teaches: "JavaScript" },
  { firstname: "James", teaches: "Ruby" },
]

// ---------------------------
// 1. Find largest number
// ---------------------------
const largestNum = numbers.filter(function (item) {
  return item > 100
})

console.log(largestNum)

// ---------------------------
// 2. Find longest string
// ---------------------------

const largestStr = strings.filter(function (item) {
  let wordCount = 0
  for (let i = 0; i < strings.length; i++) {
    wordCount <= strings[i].length
  }
})

console.log(largestStr)
// ---------------------------
// 3. Find even numbers
// ---------------------------

// ---------------------------
// 4. Find odd numbers
// ---------------------------

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------

// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------

// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------
