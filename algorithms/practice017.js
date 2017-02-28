/**
 * Created by callie on 6/18/15.
 */
// 17 // You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
function checksargs(value) {
   return value != args[0] && args[1];
}
function destroyer(arr) {
    args = [];
    arr1 = arr;
    args[0] = arguments[1];
    args[1] = arguments[2];
    var filtered = arr.filter(checksargs);
    return filtered;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));