/**
 * Created by callie on 9/25/15.
 */
// You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function filtered(value) {
    for (var i = 0; i < args.length; ++i) {
        if (value=== args[i]) {
            return false;
        }
    }
    return true;
}

function destroyer(arr) {
    args = arr.slice.call(arguments);
    args.shift();
    return arr.filter(filtered);
}


console.log(destroyer([1,2,3,1,2,3], 2, 3, ""));

