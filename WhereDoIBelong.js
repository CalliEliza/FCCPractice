/**
 * Created by callie on 9/27/15.
 */
// Return the lowest index at which a value (second argument) should be inserted into a sorted array (first argument).

function where(arr, num) {
    arr.sort();
    for (var i = 0; i < arr.length; ++i) {
        if (num === arr[i]) {
            return arr.indexOf(arr[i]);
        }
        else if (num < arr[i]) {
            return arr.indexOf(arr[i]);
        }
    }
    return arr.length;
}

console.log(where([2,5,10], 15));
