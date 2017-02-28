/**
 * Created by callie on 5/25/15.
 */
    //array filter by even #
var numbers = [1,2,3,4,5,6,7,8,9,10];
var even = [];
var filtered = function(array) {
    for (i = 0; i < array.length; ++i) {
        if (array[i] % 2 === 0) {
            even.push(array[i]);
        }
    }
    return even;
};


// looping through array
var pets = ['cat', 'dog', 'rat'];

var loopthru = function(array) {
    for (i = 0; i <array.length; ++i) {
        array[i] = array[i] + 's';
    }
    return array;
};


var a = 1, b = 2, c = 3;

(function firstFunction(){
    var b = 5, c = 6;

    (function secondFunction(){
        var b = 8;

        (function thirdFunction(){
            var a = 7, c = 9;

            (function fourthFunction(){
                var a = 1, c = 8;

            })();
        })();
    })();
})();

//a: 1, b: 8,c: 6

console.log("a: "+a+", b: "+b+",c: "+c);
