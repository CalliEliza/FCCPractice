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
    var len = arrayList.length;
    var counter = arrayList.length;
    while (lcm === 0) {
        var trueCount = 0;
        for (var i=0;i<len;++i) {
            if (counter % arrayList[i] === 0) {
                ++trueCount;
            }
            if (trueCount == arrayList.length) {
                lcm = counter;
            }
        }
        ++counter;
    }
    //console.log(lcm);
    return lcm;
}

smallestCommons([1,5]); // should return 60
smallestCommons([5, 1]); // should return 60.
smallestCommons([1, 13]); // should return 360360.
smallestCommons([23, 18]); // should return 6056820.