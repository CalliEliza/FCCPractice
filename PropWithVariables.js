/**
 * Created by callie on 1/2/16.
 */

/*var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line;

testObj.Montana;  // 16
var player = testObj[16];   // "Montana
*/



function phoneticLookup(val) {



    // Only change code below this line
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };

    return result = lookup[val];
    // Only change code above this line
}

// Change this value to test
console.log(phoneticLookup("charlie"));