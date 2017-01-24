/**
 * Created by chewy on 1/24/17.
 */

// Make a function that looks through an array of objects (first argument)
// and returns an array of all objects that have matching property and value pairs (second argument).
// Each property and value pair of the source object has to be present in the object from the collection
// if it is to be included in the returned array.


function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var len = collection.length;
    var sourceK = Object.keys(source);
    var sourceKey = sourceK[0];
    console.log(sourceKey);
    for (var i =0;i<len;++i) { // loop through collection to see if any keys match the sourcekey
        var collectionKey = Object.keys(collection[i]);
        console.log(collectionKey);
        for (var j =0;j<collectionKey.length;++j) {
            if (collectionKey[j] == sourceKey) {
                console.log(collectionKey[j]);
                if (collection[j].sourceKey) {
                    arr.push(collection[j]);
                }
            }
        }
    }

    // Only change code above this line
    console.log(arr);
    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) //should return [{ first: "Tybalt", last: "Capulet" }].
//whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) //should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
//whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) //should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
//whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 })// should return [{ "a": 1, "b": 2, "c": 2 }].