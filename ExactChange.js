/**
 * Created by chewy on 2/9/17.
 */

//Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price),
// payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

//cid is a 2D array listing available currency.

//Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

//Otherwise, return change in coin and bills, sorted in highest to lowest order.

function checkCashRegister(price, cash, cid) {
    let change;
    let changeOwed = cash - price;
    let totalInDraw = 0;
    cid.forEach(coin => { //gets total about in draw
        totalInDraw+= coin[1];
    });
    // checks to see if amt in draw is less than or equal to the changed owed
    if (Number(Math.round(totalInDraw+'e2')+'e-2') < changeOwed) {
        return "Insufficient Funds";
    }
    else if (Number(Math.round(totalInDraw+'e2')+'e-2') === changeOwed) {
        return "Closed";
    }
    console.log(totalInDraw);
    console.log(Number(Math.round(totalInDraw+'e2')+'e-2'));
    return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
