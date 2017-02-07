/**
 * Created by chewy on 2/7/17.
 */

// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

  //  var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

// Solution:
// 1. turn arguments list into an array
// 2. check that each value is a number, otherwise return undefined

function addTogether() {
    var args = [...arguments];
    let sum =0;
    args.forEach(a => {
        let typeOfValue = typeof a;
        if (typeOfValue == 'number') {
            sum+=a;
        } else {
            console.log('not a number');
            sum = undefined;
        }
    });
    console.log("answer "+sum);
    return sum;
}

//addTogether(2,3);

//addTogether(2)(3); //should return 5.
addTogether("http://bit.ly/IqT6zt"); //should return undefined.
//addTogether(2, "3"); //should return undefined.
//addTogether(2)([3]); //should return undefined.