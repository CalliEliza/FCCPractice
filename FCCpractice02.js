/**
 * Created by callie on 5/31/15.
 */
// 30 // Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.
function sumfibs(num) {
    var FibNum = 1;
    var sum = 0;
    for (i = 0; i <=num; ++i) {
        FibNum += i +3;
        if (FibNum % 2 != 0 ) {
            sum += FibNum;
        }
    }
    return sum;
}

// 31 // Sum all the prime numbers up to and including the provided number.
var is_prime = function (numb) {
    if (numb === 2) {
        return true;
    }
    for (i = 2; i < numb; ++i) {
        if (numb % i === 0 ) {
            return false;
        }
    }
    return true;
};

function sumPrimes(num) {
    count = 0;
    for (j =2; j<= num; ++j) {
        if (is_prime(j)) {
            count += j;
        }
    }
    return count;
}


// 32 // Find the smallest number that is evenly divisible by all numbers in the provided range.
// The range will be an array of two numbers that will not necessarily be in numerical order.

function smallestCommons(arr) {
    // checks to see if number is prime
    if ((arr[0] === 1 || arr[0] === 2) && (arr[1] === 1 || arr[1] === 2)) {
        var smallest = arr[0] * arr[1];
    }
    for (var j = 0; j < arr.length; ++j) {
        for (var i = 3; i < arr[j]; ++i) {
            if ( arr[j] % i !== 0 ) {
                smallest *= arr[j];
            }

        }
    }

    return smallest;
}


console.log(smallestCommons([1,5]));


