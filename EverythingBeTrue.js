/**
 * Created by chewy on 2/5/17.
 */

// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// Remember, you can access object properties through either dot notation or [] notation.

// Solution:
// 1. get list of keys from collection
// 2. filter list to those that have the pre key value
// 3. count how many have truth valus
// 4. if all have truthy values, return true otherwise return false


function truthCheck(collection, pre) {
    //console.log("pre: "+pre);
    let keys = Object.keys(collection);
    let isTrue = true;
    let counter = 0;
    keys.forEach(key => {
        //console.log(collection[key]);
        let tempKey = Object.keys(collection[key]);
        //console.log(key);
        //console.log(tempKey);
        const filteredKeys = tempKey.filter(tKey => {
            return tKey == pre;
        });
        filteredKeys.forEach(fKey => {
            //console.log(collection[key][pre]);
            if (Boolean(collection[key][pre])) {
                console.log(Boolean(collection[key][pre]));
                ++counter;
            }
        });
    });
    if (counter != collection.length) {
        isTrue = false;
    }
    console.log(isTrue);
    return isTrue;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

//truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") //should return false.
//truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat") //should return false
// check //truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat") //should return true
// check //truthCheck([{"single": "yes"}], "single") //should returnEverythingBeTrue.js:10 true
//truthCheck([{"single": ""}, {"single": "double"}], "single") //should return false
//truthCheck([{"single": "double"}, {"single": undefined}], "single") //should return false
//truthCheck([{"single": "double"}, {"single": NaN}], "single") //should return false