//**** Solved (attempt 2), Time of 24:48 ****//

/**
Given an array of integers, return a new array such that each element at index i of the new array is
the product of all the numbers in the original array except the one at i.
For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
**/

// Using division -> find prod of all numbers, then divide prod by each number
// Not using division is where I will begin.

// Assumptions: 	The input array will only contain safe integers, no non-intergers or really big ints
//								The output array will also only contain safe integers s.t sigma(0,i) array < Number.MAX_SAFE_INTEGER
// 								0 is allowed, this would be tricky with the division method

// Thoughts: 	nested loop comes to mind => this will be O(n^2) at best(?)
// 						(maybe can save some time by storing results in case of repeat values)
//						can i do it without division OR nested loops?????

// First approach
// this will probably use nested loops unless a better idea strikes

// const exclusiveProduct = (array) => {
// 	array.forEach((value, i) => {
// 		let prod = 1;
// 		array.forEach((val, j) => {
// 			prod *= i == j ? 1 : val
// 		})
// 		array[i] = prod;
// 	})
// 	return array;
// }

// this end the first attempt at 40:03 remaining
// ammended first attempt due to missing "(" on line 27 at 38:50 remaining
// this method faild as it is destructive and each successive run doesn't ue the original array

// attempt 2 started at 37:13
// copy & paste from attempt 1


//**** winner ****//
const exclusiveProduct = (array) => {
	let outputArray = []; //added this line
	array.forEach((value, i) => {
		let prod = 1;
		array.forEach((val, j) => {
			prod *= i == j ? 1 : val
		})
		outputArray.push(prod); // changed this
	})
	return outputArray; // changed this
}

// this ends the second attempt at 35:12 remaining
// updated return at line 51 (left it as in attempt 1 at first) at 34:16 remaining
// This one works and will be the time used for completion
// As in assumptions, this is O(n^2), can it be better????

// attempt 3 started at 32:03 remaining
// how to avoid nested loops????  and division????
// look into bitwise operations, just for the fun of it (I can't do that now, idk how without references)
// Thinking with no action so far (now at 28:43 remaining)
// maybe O(nlogn)  something like split the array at before and after each i, then prod of prods of each new array
// and before prod can be stored and multiplied by val at i for next val
// rethink, start with outputArray of length == array, then multiply val at each index by curren val unless i == j

// const exclusiveProduct = (array) => {
// 	let outputArray = [array.length];
// 	let beforeProd = array[0];
// 	let subs = {};
// 	for(let i = 1, j = array.length; i <= j; i++) {
// 		let afterProd = 1;
// 		array.slice(i).forEach(val => afterProd *= val);
// 		outputArray[i - 1] = beforeProd * afterProd;
// 		beforeProd *= array[i - 1];
// 	}
// 	return outputArray;
// }

// ending third at 5:53 remaining
// ammending line 71 from i < j -> i <= j; with 4:444 remaining
// fails second test with 3: 39 remaining

// fourth attempt (prob run out of time)
//copy and paste from 3
// only passes first because 0th val is 1


// const exclusiveProduct = (array) => {
// 	let outputArray = [];
// 	let beforeProd = 1;
// 	let subs = {};
// 	for(let i = 1, j = array.length; i <= j; i++) {
// 		let afterProd = 1;
// 		array.slice(i).forEach(val => afterProd *= val);
// 		outputArray[i - 1] = beforeProd * afterProd;
// 		beforeProd *= array[i - 1];
// 	}
// 	return outputArray;
// }

// works with 0:36 remaining
// notes will go past time limit
// this works for both tests, but what is time?
// line 94 is O(logn) since as i -> n, number of remaining elements -> 0
// all else withing for on line 92 is O(c)
// I blieve this yeilds O(nlogn)
// I'll verify this and revise this with the chosen winner but for now, I like this one best

// Nvm, it's still n^2, however, I have figured out how to do it in O(n)
// by splitting this up into three O(n) loops (no longer nested) then
// I'll do this soln in a seperate file in this folder at a later time.

// For this challenge, the winner is soln 2 with a solution time of 24:48


console.log(exclusiveProduct([1, 2, 3, 4, 5]));
console.log(exclusiveProduct([3, 2, 1]));