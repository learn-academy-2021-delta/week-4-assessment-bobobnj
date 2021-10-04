// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and
// shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource:
//  https://jestjs.io/docs/expect#expectarraycontainingarray
//describe block ("", () => {

  describe("rmvShuffleArr", () => {
    //test ("", () => {
    test("takes the first item from the array and shuffles the remaining", () => {
    //expect() })})
    expect(shuffleArray(colors1)).toContain("yellow", "blue", "pink", "green")
    expect(shuffleArray(colors2)).toContain("indigo", "periwinkle", "ochre", "aquamarine", "saffron")
    })
  })

// var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
//
//
//
// // b) Create the function that makes the test pass.
//
// delcare function rmvShuffleArr
function rmvElementShuffle(arr) {
  // declare new var to compare
  let currInd = arr.length,  ranInd; // I thought I could use .length to isolate the fist index but that didn't work. I also thought
  // I could make currInd sort as well all in one method (currInd = arr.sort().length) but It kept returning undefined for whatever
  // shifted. I'm figuring its because of my ignorance of .length.

  // Identify what is left to be shuffled by using comparitives
  while (currInd != 0) {

    //use math. methods to randomize the shuffle
    ranInd = Math.floor(Math.random() * currInd);
    currInd--;

    // swap results with current element and move to the next
    [arr[currInd], arr[ranInd]] = [
      arr[ranInd], arr[currInd]];
  }
  // return the array, shuffled less the first element.
  return arr.shift(); // this is the only way I could get it to come out correctly.
}

// Log the code
rmvElementShuffle(colors1);
console.log(colors1);
rmvElementShuffle(colors2);
console.log(colors2);//adding .shift here will only log what was shifted and it's randomized at this point.

// ---------------> output [ 'green', 'purple', 'pink', 'blue' ]/[ 'saffron', 'indigo', 'aquamarine', 'periwinkle', 'ochre' ]
// respectively but also randomly.


// colors1.sort(() => (Math.random() > .5) ? 1 : -1);
// console.log(colors1); I found a cleaner code to shuffle but I didn't use it because I have to break it down a little more to
// understand how to implement it here.

// // // --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers
// // // in that order.
// //
// // // a) Create a test with expect statements for each of the variables provided.
// //
describe("maxMinProp", () => {
  test("whether function takes the highest and lowest numbers and log them in that order ", () => {
    expect(nums1).toEqual(-8,90)
    expect(nums1).toEqual(5,109)
  })
})
// //
// // var nums1 = [3, 56, 90, -8, 0, 23, 6]
// // // Expected output: [-8, 90]
// // var nums2 = [109, 5, 9, 67 8, 24]
// // // Expected output: [5, 109]

var nums1 = [3, 56, 90, -8, 0, 23, 6], nums2 = [109, 5, 9, 67 8, 24] // I keep getting syntax errors for index 4 inthe secondarray
var maximum


function newArr(value, len) {

    var arr = [];
    for (var i = 0; i < len; i++) {
        arr.push(value);
    }
    return arr;
}

function maxMinProp(nums1, nums2, maximum) {
    var answer = "";

    for (var count = 1; count++; count < nums1.length) { // so this is my attempt at getting the output to be both numbers and in order.
        if (newArr(nums1[count], num1.length) > nums1) // I couldn't wuite wrap my head around how exactly this works.
            answer += nums1[count]
        if (newArr(nums2[count], nums2.length) > nums2)
            answer += nums2[count]
    }
    return answer
}

//---------------------------------------------------//
console.log(maxMinProp(nums1, nums2 maximum))i // I tried to log it a few ways but still nothing came uip




// // --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values.
// // STRETCH: Use the spread operator to pass in a dynamic number of arguments.
//
//a) Create a test with an expect statement using the variables provided.

describe("oneToRuleThemAll", () => {
  test("if function takes arrays as arguments and returns one, duplicateless(values), array", () => {
    expect(testArray1, testArray2).toEqual(3,7,10,5,4,8,2,1)
  })
})
//
var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]



// b) Create the function that makes the test pass.

// decalre a function
//needs to take in two arrays and return one array
var testArray1 = [3, 7, 10, 5, 4, 3, 3], testArray2 = [7, 8, 2, 3, 1, 5, 4]
// this array needs to be sorted of all duplicates and return without duplicates
let currArr = [ ...testArray1, ...testArray2 ]
//try using ... for stretch purposes
const oneToRuleThemAll = currArr.filter((item, pos) => currArr.indexOf(item) === pos)
//log function
console.log(oneToRuleThemAll)
