// 1.Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


let array = [1, 2, 3, 4];

let resultArr = array.reduce((a,b)=> a*b);

console.log( resultArr);


// / 2.Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9

let getpower = [1, 2, 2]
function powerArr(getpower){

    return getpower.reduce((sum,a)=>){
        return (a*a)+sum
    }
}

console.log (powerArr)

3.//You get an array of numbers, return the sum of all of the positives ones.
// [1, -12, 2, -13, 3, 5, -11, -14, -15];

let array = [1, -12, 2, -13, 3, 5, -11, -14, -15];

let positivesArr = array.filter((a)=> {return a>=0});

let sumArr = positivesArr.reduce((a,b)=> a+b);

console.log(sumArr)

let array = [1, -12, 2, -13, 3, 5, -11, -14, -15];

let positivesArr = array.reduce((a,b)=> b>0 ? a+b : a,0 )

console.log(positivesArr)

// 4.Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example

const arr = ['hello', 'world', 'this', 'is', 'great'];

let sentence = arr.join(" ");

console.log(sentence);


// 5.Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]

let num = 35231

let arr = String(num).split("").reverse().map(Number);

console.log(arr)

// 6. You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.


// Examples (input -> output)
// [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]



let filterArr1 = [1, 3, 5, 7, 9, 11, 12];
let filterArr2 = [1, 2, 3, 4, 5, 10, 12];

let filteredMerge = filterArr1.filter((x)=>!filterArr2.includes(x)).concat(filterArr2).sort((a,b)=> a-b);

console.log(filteredMerge);