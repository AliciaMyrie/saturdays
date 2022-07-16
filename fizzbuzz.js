// The FizzBuzz problem is a classic test given in coding interviews.
// The task is simple: Print integers 1 - N but print "Fizz" if an integer is divisable by 3
// "Buzz" if an integar is divisible by 5, and "FizBuzz" if an integar is divisoble by both 3 and 5.

// The FizzBuzz problem is a classic test given in coding interviews.
//The task is simple: Print integers 1 to N,  // (this is from the range 1 to n)
//but print "Fizz" if an integer is divisible by 3,
//"Buzz" if an integer is divisible by 5, and "FizzBuzz" if an integer is divisible by both 3 and 5.

// function FizzBuzz(n) {
//     return // return is the same as "stop here"/ "done"
// }
// const FizzBuzz = (n) => {}
// both functions above are the same just two different ways of writing it
// return it in an array

function FizzBuzz(n) {
  let results = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push("FizzBuzz");
    } else if (i % 3 === 0) {
      results.push("Fizz");
    } else if (i % 5 === 0) {
      results.push("Buzz");
    } else results.push(i);
  }
  return results;
}

let fizzResults = FizzBuzz(15);
for (let i = 0; i < fizzResults.length; i++) {
  console.log(fizzResults[i]);
}
console.log(fizzResults);

// //let list = fizzResluts.join("\n" );
