/**
 * Created by chewy on 1/8/17.
 */
function smallestCommons(arr) {
    var item1 = arr[0];
    var item2 = arr[1];
    var lcm = 0;
    var counter1 = item1 +1;
    var counter2 = item2 +1;
    while (lcm === 0) {
        if (counter1 % item1 === 0) {
            if (counter1 % item2 === 0) {
                lcm = counter1;
            } else { ++counter1; }
        } else {
            ++counter1;
        }
        if (counter2 % item2 === 0) {
            if (counter2 % item1 === 0) {
                lcm = counter2;
            } else { ++counter2; }
        } else {
            ++counter2;
        }
    }
    return lcm;
}


smallestCommons([1,5]);