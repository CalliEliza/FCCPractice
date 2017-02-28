/**
 * Created by chewy on 1/24/17.
 */

//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

  //  In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

    //The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

    //Check the assertion tests for examples.

function uniteUnique(arr) {
    let args = [...arguments]; //converted arguments into a real array
    let unionArr = [];
    let len = args.length;
    for (let i=0;i<len;++i) {
        //console.log(arguments[i]);
        let len2 = args[i].length;
        for(let j=0;j<len2;++j)  {
            //console.log(arguments[i][j]);
            if (!unionArr.includes(args[i][j])) {
                unionArr.push(args[i][j]);
            }
        }
    }
    //unionArr.sort(); // sorts array in order
    console.log(unionArr);
    return unionArr;
}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) //should return [1, 3, 2, 5, 4].
//uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) //should return [1, 3, 2, [5], [4]].
//uniteUnique([1, 2, 3], [5, 2, 1]) //should return [1, 2, 3, 5].
//uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) //should return [1, 2, 3, 5, 4, 6, 7, 8].