/**
 * Created by chewy on 1/9/17.
 */

// Create a function that looks through an array (first argument)
// and returns the first element in the array that passes a truth test (second argument).

function findElement(arr, func) {
    var passes = arr.filter(func);
    console.log(passes[0]);
    return passes[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });