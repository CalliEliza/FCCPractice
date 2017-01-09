/**
 * Created by chewy on 1/8/17.
 */

function getArray(a,b) { //returns an array of values b/t two given points
    var arrayList = [];
    if (a < b) {
        for (var i = a; i <= b; ++i) {
            arrayList.push(i);
        }
    } else {
        for (var j = b;j<=a;++j) {
            arrayList.push(j);
        }
    }
    //console.log(arrayList);
    return arrayList;
}

function smallestCommons(arr) {
    var arrayList = getArray(arr[0],arr[1]);
    var lcm = 0;
    var counter = arrayList.length-1;
    while (lcm === 0) {

    }
    return lcm;
}

smallestCommons([1,5]);
//getArray(15,5);