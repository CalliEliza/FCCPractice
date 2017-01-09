/**
 * Created by chewy on 1/8/17.
 */

/** Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

 The range will be an array of two numbers that will not necessarily be in numerical order.

 e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
 **/

function smallestCommons(arr) {
    var item1 = arr[0];
    var item2 = arr[1];
    var lcm = 0;
    var counter1 = item1 +1;
    var counter2 = item2 +1;
    while (lcm == 0) {
        if (counter1 % item1 == 0) {
            if (counter1 % item2 == 0) {
                lcm = counter1;
            } else { ++counter1; }
        } else {
            ++counter1;
        }
        if (counter2 % item2 == 0) {
            if (counter2 % item1 == 0) {
                lcm = counter2;
            } else { ++counter2; }
        } else {
            ++counter2;
        }
    }
    //return lcm;
    console.log(lcm);
}


smallestCommons([1,5]);

smallestCommons([1, 5]); // should return 60.
smallestCommons([5, 1]); // should return 60.
smallestCommons([1, 13]); // should return 360360.
smallestCommons([23, 18]); // should return 6056820.