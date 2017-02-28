/**
 * Created by callie on 7/18/16.
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
    var newArr = arr2.concat(arr1);
    diffArr = [];
    for(var i = 0 ; i < newArr.length ; i++){
        if(arr2.indexOf(newArr[i])=== -1 || arr1.indexOf(newArr[i])=== -1){
            diffArr.push(newArr[i]);
        }
    }


    return diffArr;
}

console.log(diffArray(arra, arrb));
console.log(diffArray(inta,intb));
console.log(diffArray(mixa,mixb));
console.log(diffArray(tricka,trickb));
console.log(diffArray(lasta,lastb));