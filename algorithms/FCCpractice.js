/**
 * Created by callie on 5/26/15.
 */

// 3 // reverse a string
function reverseString(str) {
    var strArray = str.split(""); // turns string into array
    var ArrayReverse = strArray.reverse();  // reverses array
    return ArrayReverse.join("");  // turns array back into a string
}


// 4 // factorial function
function factorialize(num) {
    var result = num;
    for(i=1;i<num; ++i) {
        result *= i;
    }
    return result;
}


// 5 // palindromes

function plaindrome(str) {
    var lwrstr = str.toLowerCase();  // ensures all letters on lower case
    var str_Arr = lwrstr.split("");  //turns string into array

    if (str_Arr[0] === str_Arr[str_Arr.length-1]) {  // checks the first and last value to see if equal
        return true;
    }
    else {
        return false;
    }
};

// 6 // find longest word in string

function findLongestWord(str) {
   var strArray = str.split(" ");  // changes the string into an array of strings
   var longest = 0;  // sets initial values to variables
   var word = null;
   for (i = 0; i < strArray.length; ++i) {  //loops through array
       if (strArray[i].length > longest) {   // checks the length of each string & compares it to the previous longest
           word = strArray[i];  // if it finds a new longest, then it sets the new values
           longest = strArray[i].length;
       }
   }
    return word; // returns value of longest word (change to longest to see #)
}

// 7 // return string with first letter capitalized
function titleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}



// 8 // function to return the largest from each array
// function that will determine largest value from an array
function largestOfArray(array) {
    var largestValue = 0;
    for (var arr = 0; arr < array.length; ++arr) {
        if (array[arr] > largestValue) {
            largestValue = array[arr];
        }
    }
    return largestValue;
}

// function that takes all the largest values and adds to a new array

function largestOfFour(arrs) {
    var LargArr = [];  // array that will hold the largest values
    for (var i = 0; i < arrs.length; ++i) {
        LargArr.push(largestOfArray(arrs[i]));
    }
    return LargArr;
}
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));



// 9 // check if a string (first argument) ends with the given target string (second argument).
function end(str, target) {
    var strArr = str.split(" ");
    var ArrLenth = strArr.length;
    if (str.substr(-1) == target || strArr[ArrLenth -1] == target) {
        return true;
    }
}


// 10 // Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.
function repeat(str, num) {
var empty = "";  // empty string returned if # <0
var repstring = ""; // new string created
    if (num > 0) {
        for (i = 0; i < num; ++i) {
            repstring += str;
        }
    }
    else {
        return empty;
    }
    return repstring;
}