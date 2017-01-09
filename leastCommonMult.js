/**
 * Created by chewy on 1/8/17.
 */
function smallestCommons(arr) {
    var arrayList = getArray(arr[0],arr[1]);
    var lcm = 0;
    var counter = arrayList.length-1;
    while (lcm === 0) {

    }
    return lcm;
}

function getArray(a,b) {
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

smallestCommons([1,5]);
//getArray(15,5);