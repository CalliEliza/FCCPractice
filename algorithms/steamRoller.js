/**
 * Created by chewy on 1/24/17.
 */


function steamrollArray(arr) {
    var steamrolled = [];
    var len = arr.length;
    for (var i =0;i<len;++i) {
        if (Array.isArray(arr[i])) {
            for (var j =0;j<arr[i].length;++j) {
                if (Array.isArray(arr[i][j])) {
                    for (var k =0;k<arr[i][j].length;++k) {
                        if (Array.isArray(arr[i][j][k])) {
                            for (var m = 0; m < arr[i][j][k].length; ++m) {
                                steamrolled.push(arr[i][j][k][m]);
                            }
                        } else {
                            steamrolled.push(arr[i][j][k]);
                        }
                    }
                } else {
                    steamrolled.push(arr[i][j]);
                }
            }
        } else  {
            steamrolled.push(arr[i]);
        }
    }
    console.log(steamrolled);
    return steamrolled;
}

//steamrollArray([1, [2], [3, [[4]]]]); //should return [1,2,3,4].

steamrollArray([[["a"]], [["b"]]]) //should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) //should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) //should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) //should return [1, {}, 3, 4].