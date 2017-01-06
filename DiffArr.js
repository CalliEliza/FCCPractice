/**
 * Created by callie on 9/4/16.
 */


var arra = ["andesite", "grass", "dirt", "pink wool", "dead shrub"];
var arrb = ["diorite", "andesite", "grass", "dirt", "dead shrub"];
var inta = [1, 2, 3, 5];
var intb = [1, 2, 3, 4, 5];
var mixa = [1, "calf", 3, "piglet"];
var mixb = [1, "calf", 3, 4];
var tricka = [];
var trickb = ["snuffleupagus", "cookie monster", "elmo"];
var lasta = ["snuffleupagus", "cookie monster", "elmo"];
var lastb = [7, "filly"];


function diffArray(arr1, arr2) {
    var newArr = [];
    var length = 0;
    var longArr = [];
    var shortArr = [];
    if (arr1.length == arr2.length) {
        length = arr1.length;
        longArr = arr1;
        shortArr = arr2;
    } else if (arr1.length > arr2.length) {
        length = arr1.length;
        longArr = arr1;
        shortArr = arr2;
    } else {
        length = arr2.length;
        longArr = arr2;
        shortArr = arr1;
    }
    outerloop:
    for (var i =0;i<length;++i) {
        var temp = longArr[i];
        for (var j=0;j<length;++j) {
            var temp1 = shortArr[j];
            if (longArr[i] == shortArr[j]) {
                continue outerloop;
            }
        }
        newArr.push(longArr[i]);
    }
    outerloop:
        for (var i =0;i<length;++i) {
            for (var j=0;j<length;++j) {
                if (shortArr[i] == longArr[j]) {
                    continue outerloop;
                }
            }
            newArr.push(shortArr[i]);
        }
        for (var e = 0;e<length;++e) {
            if (newArr[e]==undefined) {
                newArr.splice(e,e+1);
            }
        }
    return newArr;
}

//console.log(diffArray(arra, arrb));
//console.log(diffArray(inta,intb));
//console.log(diffArray(mixa,mixb));
console.log(diffArray(tricka,trickb));
console.log(diffArray(lasta,lastb));