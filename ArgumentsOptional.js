/**
 * Created by chewy on 2/7/17.
 */

// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

  //  var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

//checks to see if argument value is a number
function isNumber() {
    if (typeof num != 'number') {
        return undefined;
    } else {
        return num;
    }
}

function addTogether() {
    let sum =0;
    if (arguments.length > 1) {

    }
    return sum;
}

addTogether(2,3);

//addTogether(2)(3); //should return 5.
//addTogether("http://bit.ly/IqT6zt"); //should return undefined.
//addTogether(2, "3"); //should return undefined.
//addTogether(2)([3]); //should return undefined.