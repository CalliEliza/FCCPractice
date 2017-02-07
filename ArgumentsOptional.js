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
function isNumber(num) {
    if (typeof num != 'number') {
        return undefined;
    } else {
        return num;
    }
}

function addTogether() {
    let sum =0;
    if (arguments.length > 1) {
        let arg1 = isNumber(arguments[0]);
        let arg2 = isNumber(arguments[1]);
        if (arg1 === undefined || arg2 === undefined) { //checks to see if any arg is undefined
            sum = undefined;
        } else { // gets sum of all arguments
            sum = arg1 + arg2;
        }
    } else {
        // If only one parameter was found, returns a new function that expects two
        // Store first argument before entering the new function scope
        let arg0 = arguments[0];

        // Check the number again, must be outside the function to about returning an object
        // instead of undefined.
        if (isNumber(arg0)) {
            // Return function that expect a second argument.
            return function(arg2) {
                // Check for non-numbers
                if (arg0 === undefined || isNumber(arg2) === undefined) {
                    return undefined;
                } else {
                    // if numbers then add them.
                    return arg0 + arg2;
                }
            };
        } else {
            sum = undefined;
        }
    }
    console.log(sum);
    return sum;
}

//addTogether(2,3);

addTogether(2)(3); //should return 5.
//addTogether("http://bit.ly/IqT6zt"); //should return undefined.
//addTogether(2, "3"); //should return undefined.
//addTogether(2)([3]); //should return undefined.