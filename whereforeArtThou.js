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
    var arrObjs = [];
    var sourceKeys = Object.keys(source);
    var sourceLen = sourceKeys.length;
    for (var i =0;i<len;++i) { // loop through each obj in collection
        var tempObj = collection[i];
        console.log("current obj: "+tempObj);
        var collKeys = Object.keys(tempObj);
        var collLen = collKeys.length;
        var count =0;
        for (var j =0;j<sourceLen;++j) { // loop through keys in source
            var tempSource = sourceKeys[j];
            console.log("current source: "+tempSource);
            for (var k=0;k<collLen;++k) { // loop through keys in obj in collection
                var insideObj = collKeys[k];
                console.log(insideObj);
                if (tempSource==insideObj) {
                    ++count;
                    if (count == collLen) {
                        arrObjs.push(tempObj);
                    }
                    break;
                }
            }
        }
    }

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