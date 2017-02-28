/**
 * Created by callie on 5/30/15.
 */


//  11 // Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a '...' ending
function truncate(str, num) {
    var ending = "...";
    if (str.length > num) {
        return str.slice(0, num - 3) + ending;
    }
    else {
        return str;
    }
}

// 12 // Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array

function chunk(arr, size) {
    var multidimArray = [];
    for (i = 0; i < arr.length / size; ++i) {
        multidimArray[i] = [];
        for (j = 0; j < size; ++j) {
            if (arr[i*size +j] === undefined) {
                return multidimArray;
            }
            multidimArray[i][j] = arr[(i * size) + j];
        }
    }
    return multidimArray;
}


// 13 // Return the remaining elements of an array after chopping off n elements from the head.
function slasher(arr, howMany) {
    var removed = arr.splice(0, howMany);
    return arr;
}


// 14 // Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
    var match = true;
    var dups = [];
    var arr0 = arr[0].toLowerCase();
    var arr1 = arr[1].toLowerCase();
    for (var i = 0; i < arr1.length; ++i) {
        for (var j = 0; j < arr0.length; ++j) {
            if (arr1.charAt(i) === arr0.charAt(j)) {
                dups.push(arr[0].charAt(j));
            }
        }
    }
    if (dups.length < arr[1].length) {
        match = false;
    }
    return match;
}

// 15 // Remove all falsey values from an array.
/**
 * @return {boolean}
 */
function IsFalse(item) {
    return item != false;

}

function bouncer(arr) {
    var empty = [];
   var noFalse = arr.filter(IsFalse);
    if (noFalse[0] === null) {
        return empty;
    }
   return noFalse;
}

// 16 // Make a function that looks through a list (first argument) and returns an array of all objects that have equivalent property values (second argument).
function where(collection,source) {
    var arr = [];
    for (i = 0; i < collection.length; ++i) {
        var key = collection[i];
        for (var prop in source) {
            if (collection[i] === prop) {
                arr.push(collection[i]);
            }
        }
    }
    return arr;
}

console.log(where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' }));

// 17 // You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr) {
    for ( var i = 1; i < arguments.length; ++i) {
        arr.filter(arguments[i]);
    }
    return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// 19 // We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
}

function sumAll(arr) {
    var min = getMinOfArray(arr);
    var max = getMaxOfArray(arr);
    var sum = 0;
    for (i = max; i >= min; --i) {
        sum += i;
    }
    return sum;
}


//26 //  Check if a value is classified as a boolean primitive. Return true or false.
function boo(bool) {
    var boolTrue = false;
    if (typeof bool === "boolean") {
        boolTrue = true;
    }
    return boolTrue;
}



