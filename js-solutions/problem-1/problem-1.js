// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

//thinking: seems like a good candidate for reduce.  definitely some loop.  perhaps a version of sort
//boolean response => once two that sum to k are found, the rest don't matter, i.e. duplicated need not be found.
//perhaps look for the difference between k and each number and see if that difference exists in list
//will there be negatives in the list??  Assume so..
//bonus, does this mean in one pass over the list?  That's how I interperet it.

const doTheyAddUp = (list, k) => {
	// const diffs = list.each(num => k - num); // this would be one pass already discarding this for now

	//****  this will be my first attempt to run ****//

	// let answer = false;
	// list.each(num => {
	// 	answer = list.includes(k - num) || answer;
	// })
	// return answer;

	//first attempt output
	// TypeError: list.each is not a function
	//end of first attempt


	//**** attempt 2 ****//

	// let answer = false;
	// list.forEach(num => { //corrected this from attempt 1
	// 	answer = list.includes(k - num) || answer;
	// })
	// return answer;

	// end of attempt 2
	// all tests pass with this method with 42:50 remaining -- time used in report
	//does this pass the bonus???
	//forEach is one pass and inluceds is another, this is O(N^2) and doesn't break as soon as true


	//**** attempt 3 ****//

	// let answer = false;
	// let index = 0;
	// while(!answer) {
	// 	answer = list.includes(k - list[index]) || answer;
	// 	index++;
	// }
	// return answer;

	//end of attempt 3
	// lol, freezes.  There is not exit condition when return should be false

	//**** attempt 4 ****//
	//copied from 3 and exit condition ammended

	// let answer = false;
	// let index = 0;
	// while(!answer || index == list.length) {
	// 	answer = list.includes(k - list[index]) || answer;
	// 	index++;
	// }
	// return answer;

	// end of attempt 4
	//still infinite loop as additional exit condition is wrong, one more time.... with feeling


	//**** attempt 5 ****// Best result
	copied from 4 and exit condition ammended

	let answer = false;
	let index = 0;
	while(!answer && !(index == list.length)) { // change this to make the exit condition work
																							// now when index == list.length, rh => false, && => false
																							// or if answer => true, lh => false, && => false
		answer = list.includes(k - list[index]) || answer;
		index++;
	}
	return answer;

	// end of attempt 5
	// all tests pass, worst case complexity still the same as attempt 2
	// better best case performance.  I think this still uses more than one pass.  No bonus yet
	// time remaining 25:26

	//**** attempt 6 ****//
	// just to throw a sort attempt in there

	// let answer = false;

	// list.sort((a,b) => {
	// 	if(a + b == k) answer = true;
	// 	console.log(a, b, answer)
	// 	return -1;
	// })

	// return answer;

	//**** end of attempt 6 ****//
	// this isn't working.  I have a missunderstanding of Array.sort I'll have to review.
	// 3:00 to go, I'm going to call it

}

console.log(doTheyAddUp([10, 15, 3, 7], 17)) // given from question
console.log(doTheyAddUp([10, 15, 3, 7], 500)) // should return false
console.log(doTheyAddUp([10, 15, 3, -7], 8)) // true with negatives
console.log(doTheyAddUp([10, 15, 3, 7], 7)) // should be false but k is in list