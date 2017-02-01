/**
 * Created by chewy on 1/24/17.
 */

// Make a function that looks through an array of objects (first argument)
// and returns an array of all objects that have matching property and value pairs (second argument).
// Each property and value pair of the source object has to be present in the object from the collection
// if it is to be included in the returned array.

//SOLUTION SHOULD:
// 1. generate an array of keys contained in the obj source
// 2. iterate over each object in the array collection
// 3. iterate over each key in the array keys
// 4. check if each key in the array exists in the current object

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var len = collection.length;
    var arrObjs = [];
    var keys = Object.keys(source); //generates array of keys contained in 'source'
    var sourceLen = sourceKeys.length;


    console.log(arrObjs);
    // Only change code above this line
    //console.log(arr);
    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) //should return [{ first: "Tybalt", last: "Capulet" }].
//whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) //should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
//whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) //should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
//whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 })// should return [{ "a": 1, "b": 2, "c": 2 }].