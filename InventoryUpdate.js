/**
 * Created by chewy on 2/13/17.
 */


// Compare and update the inventory stored in a 2D array
 // against a second 2D array of a fresh delivery.
 // Update the current existing inventory item quantities
// (in arr1). If an item cannot be found,
// add the new item and quantity into the inventory array.
// The returned inventory array should be in alphabetical
// order by item.

function updateInventory(arr1, arr2) {
    let count =0;
    for (let i=0;i<arr2.length;++i) {
        for (let j=0;j<arr1.length;++j) {
            let temp = arr2[i][1];
            let temp2 = arr1[j][1];
            if (arr2[i][1] == arr1[j][1]) {
                //console.log(arr2[i][1]);
                arr1[j][0] += arr2[i][0];
                //console.log(arr1[j][0]);
            } else {
                ++count;
            }
        }
        if (count == arr1.length) {
            arr1.push(arr2[i]);
           // console.log(arr1);
        }
        count =0;
    }
    arr1.sort((a,b) => {
        if (a[1]>b[1]) {
            return 1;
        }
        if (a[1]<b[1]) {
            return -1;
        }
        return 0;
    });
    return arr1;
}

// Example inventory lists
let curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

let newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

//updateInventory(curInv, newInv);

updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
//should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]